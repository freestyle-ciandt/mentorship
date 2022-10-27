const { v4: uuidv4 } = require("uuid");
process.env.TABLE_NAME = 'tabela-apostas'
jest.mock("uuid", () => {
  return { v4: jest.fn() };
});

const mockPromise = jest.fn()

const mockDeleteItem = jest.fn().mockImplementation(() => {
  return { promise: mockPromise };
});
jest.mock("aws-sdk", () => {
  return {
    DynamoDB: {
      DocumentClient: jest.fn().mockImplementation(() => {
        return { delete: mockDeleteItem };
      })
    },
  };
});

const { handler } = require("../deleteApostas");

describe("Testes para a lambda delete Apostas", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  const idInvalido = "";
  test("Deve retornar erro 400 no caso de um id inválido", async () => {
    const event = { pathParameters: { id: idInvalido } };
    const response = await handler(event);
    expect(response).toEqual({
      statusCode: 400,
      body: JSON.stringify({
        message: "Id inválido",
      }),
    });
  });
  test("Deve retornar 200 se a aposta for deletada", async () => {
    const event = { pathParameters: { id: "1234agatha" } };
    const response = await handler(event);
    expect(response).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        message: "Aposta 1234agatha deletada com sucesso.",
      }),
    });
    expect(mockDeleteItem).toHaveBeenCalledWith({
      Key: {
        id: "1234agatha" ,
      },
      TableName: process.env.TABLE_NAME
    });
  })
  test("Deve retornar 500 quando nao for possivel deletar a aposta", async () => {
    mockPromise.mockRejectedValue(new Error("Houve um erro ao tentar deletar a aposta."))
    const response = await handler({ pathParameters: { id: "1234agatha" } });
    expect(response).toEqual({
      statusCode: 500,
      body: JSON.stringify({
        message: "Houve um erro ao tentar deletar a aposta.",
      }),
    });
    expect(mockDeleteItem).toHaveBeenCalledWith({
      Key: {
        id: "1234agatha" ,
      },
      TableName: process.env.TABLE_NAME
    });
  })

});
