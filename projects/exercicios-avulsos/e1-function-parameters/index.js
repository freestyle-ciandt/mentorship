
export const execute = (firstNumber = 1, ...args) => {
  let soma = firstNumber
  soma += args.reduce((partialSum, a) => partialSum + a, 0);    
  return soma
};
