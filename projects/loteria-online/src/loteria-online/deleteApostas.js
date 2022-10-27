const {
    TABLE_NAME,
  } = process.env;

const aws = require("aws-sdk");  
const docClient = new aws.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const id = event.pathParameters.id
    if(!id){
      return({
        statusCode: 400,
        body: JSON.stringify({
          message: "Id inválido",
        }),
      })
    }        
    const params = {
        Key: {
         "id": id
        }, 
        TableName: TABLE_NAME
       };
    try{
      await docClient.delete(params).promise();
      return({
        statusCode: 200,
        body: JSON.stringify({
          message: `Aposta ${id} deletada com sucesso.`,
        }),
      })
    }catch(err){
        console.log("erro: ", err.message)
      return({
        statusCode: 500,
        body: JSON.stringify({
          message: "Houve um erro ao tentar deletar a aposta.",
        }),
      })

    }
}
