const {
    TABLE_NAME,
  } = process.env;

const aws = require("aws-sdk");  
const docClient = new aws.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const email = event.pathParameters.email
    try{
      queryObject = await docClient.query({
        TableName: TABLE_NAME,
        KeyConditionExpression: '#email = :email',
        ExpressionAttributeNames: { '#email': 'email' },
        ExpressionAttributeValues: { ':email': email },
        IndexName: 'email_index',
        Limit: 5,
      }).promise();
      console.log('Objeto da query: ',JSON.stringify(queryObject.Items[0]))
      return({ 
        statusCode: 200,
        body: JSON.stringify(
          "Apostas encontradas com sucesso!"),
        data: { "Aposta 1" : queryObject.Items[0],
                "Aposta 2" : queryObject.Items[1],
                "Aposta 3" : queryObject.Items[2],
                "Aposta 4" : queryObject.Items[3],
                "Aposta 5" : queryObject.Items[4] }
      }) // falta colocar o data
    }catch{
      return({ 
       statusCode: 500,
       body: JSON.stringify(
          "Houve um erro ao tentar listar apostas.") 
      })

    }
}