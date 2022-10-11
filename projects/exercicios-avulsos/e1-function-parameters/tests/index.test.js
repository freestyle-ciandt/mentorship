import { execute } from '../index';

describe('E1 - Function parameters', () => {
  it('Should return default value 1 when no parameters were specified', () => {
    const result = execute();
    expect(result).toBe(1);
  });

  it('Should return the same number when only one parameter was specified', () => {
    const result1 = execute(20);
    const result2 = execute(777);

    expect(result1).toBe(20);
    expect(result2).toBe(777);
  });

  it('Should return the sum of all numbers that were passed as parameters', () => {
    const result1 = execute(3, 2, 1);
    const result2 = execute(20, 40, 60, 80, 100);
    const result3 = execute(58, 12, 37, 44, 60, 91, 92, 48, 25, 84);

    expect(result1).toBe(6);
    expect(result2).toBe(300);
    expect(result3).toBe(551);
  });
});
