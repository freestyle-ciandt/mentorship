const { v4: uuidv4 } = require('uuid');

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

  const date = Date.now()

  const params = {
    TableName: TABLE_NAME,
    Item: {
      id: uuidv4(),
      email: event.email,
      data: date,
    }
  };

  console.log(params)

}