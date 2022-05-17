const { v4: uuidv4 } = require('uuid');

const aws = require("aws-sdk");
const dynamodb = new aws.DynamoDB

const {
  TABLE_NAME,
} = process.env;

exports.handler = async (event) => {

  const reg = new RegExp('[a-z0-9]+@[a-z]+[a-z]{2,3}' )

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

  console.log(returnMessage(400,"Email inválido"))

  if (!validateEmail(event.email)){
    return {
      statusCode: 400,
      body: JSON.stringify({
      message: "Email inválido",
      }),
      };
  }
  if (!validadeNumber(event.numeros)){
    return {
      statusCode: 400,
      body: JSON.stringify({
      message: "Números inválidos",
      }),
      };

  }

  const date = Date.now().toString()
  console.log('a data eh', date)

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
    console.log('foi p tabela!!!')
    return {
      statusCode: 200,
      body: JSON.stringify({
      message: `Aposta ${params.Item.id.S} registrada com sucesso. Boa sorte!`,
      }),
      };

  }catch(err){
    console.log('nao foi p tabela')
    return {
      statusCode: 500,
      body: JSON.stringify({
      message: "Houve um erro ao tentar registrar a aposta.",
      }),
      };
  }


  console.log('params eh', params)

}
