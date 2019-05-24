import getRandomNumber from '../utils';
import engine from '..';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const stringBoolean = boolean => ((boolean) ? 'yes' : 'no');

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const gamePrime = () => {
    const task = getRandomNumber(1, 100);
    const calcTrueResult = stringBoolean(isPrime(task));
    const generateGame = () => [task, calcTrueResult];
    return [
      generateGame,
      condition,
    ];
  };
  return engine(gamePrime);
};
