import { buildStairs } from '../index';

describe('E5 - Challenge - Build staircase', () => {
  const printResult = (result) => console.log(`Result:\n${result}`);

  test('Should throw an error when number of steps are less than 2', () => {
    try {
      buildStairs(1);
    } catch (err) {
      expect(err.message).toEqual('No need to build stairs');
      return;
    }
    throw new Error('Expected to fail, but this test was executed successfully.');
  });

  test('Should generate stairs correctly with 3 steps', () => {
    const result = buildStairs(3);
    printResult(result);

    expect(result).toEqual(
      '  #\n' +
      ' ##\n' +
      '###'
    );
  });

  test('Should generate stairs correctly with 5 steps', () => {
    const result = buildStairs(5);
    printResult(result);

    expect(result).toEqual(
      '    #\n' +
      '   ##\n' +
      '  ###\n' +
      ' ####\n' +
      '#####'
    );
  });

  test('Should generate stairs correctly with 10 steps', () => {
    const result = buildStairs(10);
    
    printResult(result);
    expect(result).toEqual(
      '         #\n' +
      '        ##\n' +
      '       ###\n' +
      '      ####\n' +
      '     #####\n' +
      '    ######\n' +
      '   #######\n' +
      '  ########\n' +
      ' #########\n' +
      '##########'
    );
  });
});
