const { handler } = require('../index');

describe('Testes para a lambda Loteria Online', () => {
    const emailsInvalidos = ["user@", "user@mail", "@mail.com", "user", "123"]
    test.skip.each(emailsInvalidos)('Deve retornar erro 400 no caso de um email inválido', async (email) => {
        expect(email).toEqual('Hi, someone!');
        // const event = {"email":"", "numeros":""}
        // const result = await handler('someone')
        // expect(result.greeting).toEqual('Hi, someone!');
    });
    test('Deve retornar erro 400 no caso de um email inválido', async () => {
        const event = {email:"user@"}
        const response = await handler(event)
        expect(response).toEqual({
            statusCode: 400,
            body: JSON.stringify({
            message: "Email inválido",
            }),
            })
    });
});
