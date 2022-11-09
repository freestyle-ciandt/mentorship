import ItemBuilder from '../item-builder';

import { getBestBuildWithBudget } from '../index';

describe('E6 - Challenge - Buying tech items', () => {
  const keyboards = [
    new ItemBuilder().withName('Corsair K55').withPrice(160).build(),
    new ItemBuilder().withName('HyperX Alloy').withPrice(220).build(),
    new ItemBuilder().withName('Logitech K380').withPrice(200).build(),
    new ItemBuilder().withName('Logitech G213').withPrice(290).build(),
    new ItemBuilder().withName('CoolerMaster MK110').withPrice(350).build(),
  ];

  const speakers = [
    new ItemBuilder().withName('Logitech Z120').withPrice(95).build(),
    new ItemBuilder().withName('Redragon GS520').withPrice(190).build(),
    new ItemBuilder().withName('HP DHS-2111').withPrice(120).build(),
    new ItemBuilder().withName('Bakeey A4').withPrice(166).build(),
    new ItemBuilder().withName('Klipsch ProMedia 2.0').withPrice(300).build(),
  ];

  const expectedResultsPerBudget = [
    {
      budget: 400,
      expected: {
        bestKeyboard: 'Logitech K380',
        bestSpeaker: 'Redragon GS520',
        bestPriceUnderBudget: 390,
      },
    },
    {
      budget: 700,
      expected: {
        bestKeyboard: 'CoolerMaster MK110',
        bestSpeaker: 'Klipsch ProMedia 2.0',
        bestPriceUnderBudget: 650,
      },
    },
    {
      budget: 386,
      expected: {
        bestKeyboard: 'HyperX Alloy',
        bestSpeaker: 'Bakeey A4',
        bestPriceUnderBudget: 386,
      },
    },
    {
      budget: 285,
      expected: {
        bestKeyboard: 'Corsair K55',
        bestSpeaker: 'HP DHS-2111',
        bestPriceUnderBudget: 280,
      },
    },
  ];

  test('Should throw error if there are no options under the specified budget', () => {
    const budget = 200;
    try {
      getBestBuildWithBudget(keyboards, speakers, budget);
    } catch (err) {
      expect(err.message).toEqual('No option found under the specified budget');
      return;
    }
    throw new Error('Expected to fail, but the test was executed successfully.');
  });

  test.each(expectedResultsPerBudget)('Should return buying suggestion successfully for budget $budget', ({
    budget, expected
  }) => {
    const bestBuild = getBestBuildWithBudget(keyboards, speakers, budget);
    expect(bestBuild).toEqual(expected);
  });
});
