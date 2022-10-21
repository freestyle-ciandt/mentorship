import { ONE_SECOND_IN_MS } from './constants';

export const sleep = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * ONE_SECOND_IN_MS));
