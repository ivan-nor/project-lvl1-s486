import { getRandomNumber } from '../utils';

const getEven = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

export default () => {
  const task = getRandomNumber();
  const calcTrueResult = getEven(task);
  const condition = 'Answer "yes" if number even otherwise answer "no"';
  return [
    task,
    calcTrueResult,
    condition,
  ];
};
