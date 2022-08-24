const { v4: uuidv4 } = require('uuid');

const aws = require("aws-sdk");
const dynamodb = new aws.DynamoDB

const {
  TABLE_NAME,
} = process.env;

exports.handler = async (event) => {

  const reg = new RegExp('[a-z0-9]+\@[a-z]+[\.]{1}[a-z]{2,3}' )

  const validateEmail = (param) => {
    return reg.test(param);
  };

  const validadeNumber = (param) => {
    if (param.length!=3){
      return false
    }
    for (i of param){
      if (typeof i!='number' || i<0 || i>9){
        return false
      }
    }
    return true
  }

  const returnMessage = (code, message) => ({ 
    statusCode: code,
    body: JSON.stringify({
    message,
    }),
  })

  if (!validateEmail(event.email)){
    return returnMessage(400,"Email inválido");
  }
  if (!validadeNumber(event.numeros)){
    return returnMessage(400,"Números inválidos")
  }

  const date = Date.now().toString()

  const params = {
    TableName: TABLE_NAME,
    Item: {
      "id": {
        S: uuidv4()
       }, 
      "email": {
        S: event.email
       }, 
      "data": {
        N: date
       },
      "numeros": {
        "L": [ {"N": "9"} , {"N": "8"}, {"N": "3"}]

      }
    }
  };
  try{
    await dynamodb.putItem(params).promise();
    return returnMessage(200,`Aposta ${params.Item.id.S} registrada com sucesso. Boa sorte!`)

  }catch(err){
    return returnMessage(500,"Houve um erro ao tentar registrar a aposta.") 
  }
}
