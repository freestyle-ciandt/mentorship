import {
  getWinnersMessage,
  getUserReport,
} from '../index';

describe('E3 - Destructing', () => {
  describe('getWinnersMessage', () => {
    test('Should generate winners message correctly', () => {
      const result = getWinnersMessage(['Julia', 'Fabio', 'Tadeu', 'Jaqueline', 'Sabrina', 'Yuri']);
      expect(result).toEqual('The first person to complete the test was Julia.\n' + 
      'Right after, Fabio completed the test.\n' +
      'And, last but not least, Tadeu completed.\n\n' +
      'The other participants include Jaqueline, Sabrina, Yuri.');
    });
  });

  describe('getUserReport', () => {
    test('Should generate user report correctly', () => {
      const report1 = getUserReport({
        nome: 'Lucas',
        age: 32,
        address: {
          street: 'Caminho das Rosas',
          city: 'Belo Horizonte'
        },
        profession: 'Engineer'
      });

      const report2 = getUserReport({
        nome: 'Pedro',
        age: 28,
        address: {
          street: 'Antonio de Albuquerque',
          city: 'Caete',
          country: 'United States'
        }
      });

      expect(report1).toEqual('The user Lucas is 32 years old.\n' + 
      'Lucas lives at Caminho das Rosas street in Belo Horizonte city - Brazil.\n' +
      'Lucas works as a Engineer.');
      expect(report2).toEqual('The user Pedro is 28 years old.\n' + 
      'Pedro lives at Antonio de Albuquerque street in Caete city - United States.\n' +
      'Pedro doesn\'t have a profession.');
    });
  });
});
