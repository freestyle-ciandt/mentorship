const { handler } = require("../deleteApostas");

const { v4: uuidv4 } = require("uuid");
jest.mock("uuid", () => {
  return { v4: jest.fn() };
});

const mockDeleteItem = jest.fn().mockImplementation(() => {
  return { promise: jest.fn() };
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
// jest.mock("aws-sdk", () => {
//   return { 
//     DynamoDB: { DocumentClient: () => {
//       return { delete: mockDeleteItem };
//     },}
//   };
// });

// jest.mock('aws-sdk', () => {
//   class DocumentClient {}
//   DocumentClient.prototype.delete = mockDeleteItem;
//   return {
//     DynamoDB: {DocumentClient},
//   };
// });

describe("Testes para a lambda delete Apostas", () => {
  const idInvalido = "";
  test("Deve retornar erro 400 no caso de um id inválido", async (id) => {
    const event = { pathParameters: { id: idInvalido } };
    const response = await handler(event);
    expect(response).toEqual({
      statusCode: 400,
      body: JSON.stringify({
        message: "Id inválido.",
      }),
    });
  });
  test("Deve retornar 200 se a aposta for deletada", async (id) => {
    const event = { pathParameters: { id: uuidv4.mockReturnValue("1234agatha") } };
    const response = await handler(event);
    expect(response).toEqual({
      statusCode: 400,
      body: JSON.stringify({
        message: "Aposta 1234agatha deletada com sucesso.",
      }),
    });
    expect(mockDeleteItem).toHaveBeenCalledWith({
      Item: {
        id: { S: "1234agatha" },
        email: { S: "agatha@mail.br" },
        data: { N: "1639061511000" },
        numeros: { L: [{ N: "9" }, { N: "8" }, { N: "3" }] },
      },
      TableName: process.env.TABLE_NAME
    });
  })
  test("Deve retornar 500 quando nao for possivel deletar a aposta", async () => {
    const event = { pathParameters: { id: uuidv4.mockReturnValue("1234agatha") } };
    mockDeleteItem.mockRejectedValue(new Error("Houve um erro ao tentar deletar a aposta."))
    const response = await handler(event);
    expect(response).toEqual({
      statusCode: 500,
      body: JSON.stringify({
        message: "Houve um erro ao tentar deletar a aposta.",
      }),
    });
    expect(mockDeleteItem).toHaveBeenCalledWith({
      Item: {
        id: { S: "1234agatha" },
        email: { S: "agatha@mail.br" },
        data: { N: "1639061511000" },
        numeros: { L: [{ N: "9" }, { N: "8" }, { N: "3" }] },
      },
      TableName: process.env.TABLE_NAME
    });
  })

});
