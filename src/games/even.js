import getRandomNumber from '../utils';
import engine from '..';

const condition = 'Answer "yes" if number even otherwise answer "no"';

const isEven = num => num % 2 === 0;

const getStringEven = number => ((isEven(number)) ? 'yes' : 'no');

const gameEven = () => {
  const task = getRandomNumber();
  const calcTrueResult = getStringEven(task);
  return [task, calcTrueResult];
};

export default () => engine(gameEven, condition);
