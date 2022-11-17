import { countPairs } from '../index';

describe('E7 - Challenge - Count pairs', () => {
  const testData = [
    {
      items: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      expected: 0,
    },
    {
      items: [1, 4, 1, 5, 6, 2, 4, 3],
      expected: 2,
    },
    {
      items: [6, 6, 4, 3, 5, 6, 1, 2, 1, 3, 9, 5, 6, 7, 0, 1, 2, 0, 5, 6, 2, 4, 3],
      expected: 8,
    },
    {
      items: [11, 11, 11, 22, 11, 0, 55, 2, 22],
      expected: 3,
    },
    {
      items: [554837, 144325, 868378, 208474, 144325, 644433],
      expected: 1,
    },
  ];

  test.each(testData)('Should count $expected pairs in the list $items', ({
    items, expected
  }) => {
    const result = countPairs(items);
    expect(result).toEqual(expected);
  });
});
