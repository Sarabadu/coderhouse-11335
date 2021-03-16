import { gen } from "../utils/test";

let key = 0;
let its = {};
export const initializeIterator = (initialValue = 0) => {
  its[++key] = gen(initialValue);
  return key;
};

export const getNextFactorial = (key) => {
  return its[key].next().value;
};
