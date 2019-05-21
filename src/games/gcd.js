import { getRandomNumber } from '../index';

const conditionsGamesGcd = () => console.log('Find the greatest common divisor of given numbers.');

const gcdRecursion = (first, second) => {
  let n1 = first;
  let n2 = second;
  if (n2 === 0) {
    return n1;
  }
  if (n1 < n2) {
    const t = n1;
    n1 = n2;
    n2 = t;
  }
  if (n1 % n2 === 0) {
    return n2;
  }
  return gcdRecursion(n2, n1 % n2);
};

export default (user) => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const calcTrueResult = gcdRecursion(first, second);
  const result = {
    user,
    task: `${first} and ${second}`,
    calcTrueResult: String(calcTrueResult),
    condition: () => conditionsGamesGcd(),
  };
  return result;
};
