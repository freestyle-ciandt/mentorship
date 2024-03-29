import {
  getBrandData,
  getModelData,
  getPriceData,
} from './repository';

import { VALID_TOKEN } from './constants';

export const executeInParallel = async () => {
  // REPLACE THE LOGIC BELOW...
  const brandData = await getBrandData();
  const modelData = await getModelData();
  const priceData = await getPriceData();

  return { brand: brandData, model: modelData, price: priceData };
};

export const validateToken = (token) => {
  throw new Error('Needs to be implemented!');
};