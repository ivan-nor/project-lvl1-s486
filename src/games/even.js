import getRandomNumber from '../utils';
import engine from '..';

const condition = 'Answer "yes" if number even otherwise answer "no"';

const isEven = num => num % 2 === 0;

const getStringEven = number => ((isEven(number)) ? 'yes' : 'no');


export default () => {
  const gameEven = () => {
    const task = getRandomNumber();
    const calcTrueResult = getStringEven(task);
    const generateGame = () => [task, calcTrueResult];
    return [
      generateGame,
      condition,
    ];
  };
  return engine(gameEven);
};
