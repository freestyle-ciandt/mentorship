import {
  executeInParallel,
  validateToken,
} from '../index';

import { VALID_TOKEN } from '../constants';

describe('E4 - Promises', () => {
  describe('executeInParallel', () => {
    it('Should execute in parallel', async () => {
      const result = await executeInParallel();
      expect(result).toEqual({
        brand: { name: 'Ford', type: 'Car manufacturer' },
        model: { name: 'Mustang GT', fuel: 'gas/alcohol', speed: '250 km/h' },
        price: { value: '$ 200.000' },
      });
    });
  }, 5000);

  describe('validateToken', () => {
    it('Should wait 2 seconds and return loggedIn as true if token is valid', async () => {
      const startTime = Date.now();
      const result = await validateToken(VALID_TOKEN);
      const executionTime = Date.now() - startTime;

      expect(result).toEqual({ loggedIn: true });
      // Execution time should be greater than 2 seconds.
      expect(executionTime).toBeGreaterThanOrEqual(2000);
    });

    it('Should throw an error if token is invalid', async () => {
      try {
        await validateToken('f8dd22e0-187f-4e3b-89b9-1e2f0777b14b');
      } catch (err) {
        expect(err.message).toEqual('Invalid token.');
        return;
      }
      throw new Error('Expected test to fail, but it was executed successfully.');
    });
  });
});
