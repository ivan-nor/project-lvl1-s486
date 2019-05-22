import {
  getRandomNumber, getRandomOperation,
} from '../utils';

export default () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const operation = getRandomOperation(3);
  const task = `${first}${operation}${second}`;
  // eslint-disable-next-line no-eval
  const calcTrueResult = String(eval(task));
  const condition = 'What is the result of the expression?';
  return [
    task,
    calcTrueResult,
    condition,
  ];
};
