const { v4: uuidv4 } = require("uuid");
jest.mock("uuid", () => {
  return { v4: jest.fn() };
});
process.env.TABLE_NAME = 'nome-da-tabela'
const mockPutItem = jest.fn().mockImplementation(() => {
  return { promise: jest.fn() };
});
jest.mock("aws-sdk", () => {
  return {
    DynamoDB: jest.fn().mockImplementation(() => {
      return { putItem: mockPutItem };
    }),
  };
});
const mockedTimestamp = 1639061511000;
jest.spyOn(global.Date, 'now').mockReturnValue(mockedTimestamp);

const { handler } = require("../createApostas");

describe("Testes para a lambda Loteria Online", () => {
  const emailsInvalidos = ["user@", "user@mail", "@mail.com", "user", "123"];
  test.each(emailsInvalidos)(
    "Deve retornar erro 400 no caso de um email inválido $numeros",
    async (email) => {
      const event = { email };
      const response = await handler(event);
      expect(response).toEqual({
        statusCode: 400,
        body: JSON.stringify({
          message: "Email inválido",
        }),
      });
    }
  );
  const numerosInvalidos = [
    { numeros: [2, 3] },
    { numeros: ["1", 2, 3] },
    { numeros: [11, 8, 7] },
    { numeros: [-1, 2, 3] },
  ];
  test.each(numerosInvalidos)(
    "Deve retornar erro 400 no caso de numeros invalidos %o",
    async ({ numeros }) => {
      console.log(numeros);
      const event = { email: "agatha@mail.br", numeros };
      const response = await handler(event);
      expect(response).toEqual({
        statusCode: 400,
        body: JSON.stringify({
          message: "Números inválidos",
        }),
      });
    }
  );
  test("Deve retornar 200 quando o item é inserido na tabela", async () => {
    const event = { email: "agatha@mail.br", numeros: [2, 3, 6] };
    uuidv4.mockReturnValue("1234agatha");
    const response = await handler(event);
    expect(response).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        message: "Aposta 1234agatha registrada com sucesso. Boa sorte!",
      }),
    });
    expect(mockPutItem).toHaveBeenCalledWith({
      Item: {
        id: { S: "1234agatha" },
        email: { S: "agatha@mail.br" },
        data: { N: "1639061511000" },
        numeros: { L: [{ N: "9" }, { N: "8" }, { N: "3" }] },
      },
      TableName: process.env.TABLE_NAME
    });
  });
  test("Deve retornar 200 quando o item é inserido na tabela", async () => {
    const event = { email: "agatha@mail.br", numeros: [2, 3, 6] };
    uuidv4.mockReturnValue("1234agatha");
    mockPutItem.mockRejectedValue(new Error("Algo deu errado"))
    const response = await handler(event);
    expect(response).toEqual({
      statusCode: 500,
      body: JSON.stringify({
        message: "Houve um erro ao tentar registrar a aposta.",
      }),
    });
    expect(mockPutItem).toHaveBeenCalledWith({
      Item: {
        id: { S: "1234agatha" },
        email: { S: "agatha@mail.br" },
        data: { N: "1639061511000" },
        numeros: { L: [{ N: "9" }, { N: "8" }, { N: "3" }] },
      },
      TableName: process.env.TABLE_NAME
    });
  });
});
