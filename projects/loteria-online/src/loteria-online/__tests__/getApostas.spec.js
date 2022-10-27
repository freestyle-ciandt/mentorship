process.env.TABLE_NAME = 'tabela-apostas'

const mockPromise = jest.fn()
const mockQueryItems = jest.fn().mockImplementation(() => {
  return { promise: mockPromise };
});
jest.mock("aws-sdk", () => {
  return {
    DynamoDB: {
      DocumentClient: jest.fn().mockImplementation(() => {
        return { query: mockQueryItems };
      })
    },
  };
});

const { handler } = require("../getApostas");

describe("Testes para a lambda get Apostas", () => {
    const event = { pathParameters: { email: "agatha@mail.com" } };

    test("Deve retornar 500 quando nao for possivel fazer a listagem de apostas", async () => {
      mockQueryItems.mockRejectedValue(new Error("Houve um erro ao tentar listar apostas."))
      const response = await handler(event);
      expect(response).toEqual({
        statusCode: 500,
        body: JSON.stringify(
            "Houve um erro ao tentar listar apostas.") ,
      });
      expect(mockQueryItems).toHaveBeenCalledWith({
        TableName: process.env.TABLE_NAME,
        KeyConditionExpression: '#email = :email',
        ExpressionAttributeNames: { '#email': 'email' },
        ExpressionAttributeValues: { ':email': event.pathParameters.email },
        IndexName: 'email_index',
        Limit: 5,
      });
    });
    test("Deve retornar 200 quando for possivel fazer a listagem de apostas", async () => {
        mockPromise.mockReturnValue({Items: [1, 2, 3, 4, 5]})
        const response = await handler(event);
        expect(response).toEqual({
          statusCode: 200,
          body: JSON.stringify(
            "Apostas encontradas com sucesso!"),
        });
        expect(mockQueryItems).toHaveBeenCalledWith({
            TableName: process.env.TABLE_NAME,
            KeyConditionExpression: '#email = :email',
            ExpressionAttributeNames: { '#email': 'email' },
            ExpressionAttributeValues: { ':email': event.pathParameters.email },
            IndexName: 'email_index',
            Limit: 5,
          });
    });
  });
