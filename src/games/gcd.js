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
  if (first < second) {
    return getGcd(first, second % first);
  }
  return getGcd(second, first % second);
};

export default () => {
  const gameGcd = () => {
    const first = getRandomNumber();
    const second = getRandomNumber();
    const numberGcd = getGcd(first, second);
    const task = `${first} and ${second}`;
    const calcTrueResult = String(numberGcd);
    const generateGame = () => [task, calcTrueResult];
    return [
      generateGame,
      condition,
    ];
  };
  return engine(gameGcd);
};
