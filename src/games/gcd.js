import getRandomNumber from '../utils';
import engine from '..';

const condition = 'Find the greatest common divisor of given numbers.';

const getGcd = (first, second) => {
  if (second === 0) {
    return first;
  }
  if (first % second === 0) {
    return second;
  }
  return first < second ? getGcd(first, second % first) : getGcd(second, first % second);
};

const gameGcd = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const numberGcd = getGcd(first, second);
  const task = `${first} and ${second}`;
  const calcTrueResult = String(numberGcd);
  return [task, calcTrueResult];
};

export default () => engine(gameGcd, condition);
