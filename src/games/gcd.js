import { getRandomNumber } from '../utils';
import engine from '..';

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

export default () => {
  const gameGcd = () => {
    const first = getRandomNumber();
    const second = getRandomNumber();
    const gsd = gcdRecursion(first, second);
    const task = `${first} and ${second}`;
    const calcTrueResult = String(gsd);
    const condition = 'Find the greatest common divisor of given numbers.';
    return [
      task,
      calcTrueResult,
      condition,
    ];
  };
  return engine(gameGcd);
};
