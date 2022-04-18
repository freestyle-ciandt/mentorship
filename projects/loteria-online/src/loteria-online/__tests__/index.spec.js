const { handler } = require('../index');

describe('Example', () => {
    it('Should return expected object', async () => {
        const result = await handler('someone')
        expect(result.greeting).toEqual('Hi, someone!');
    });
});
