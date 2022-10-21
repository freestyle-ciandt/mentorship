import { sleep } from './utils';

export const getBrandData = async () => {
  await sleep(3); // simulating network delay
  return { name: 'Ford', type: 'Car manufacturer' }
};

export const getModelData = async () => {
  await sleep(4); // simulating network delay
  return { name: 'Mustang GT', fuel: 'gas/alcohol', speed: '250 km/h' }
};

export const getPriceData = async () => {
  await sleep(2); // simulating network delay
  return { value: '$ 200.000' }
};
