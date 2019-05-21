import {
  getRandomNumber, getRandomOperation,
} from '../index';

const conditionsGamesCalc = () => console.log('What is the result of the expression?');

const getStringCalc = (first, second, operation) => `${first}${operation}${second}`;

export default (user) => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const operation = getRandomOperation(3);
  const result = {
    user,
    task: getStringCalc(first, second, operation),
    get calcTrueResult() {
      // eslint-disable-next-line no-eval
      return String(eval(this.task));
    },
    condition: () => conditionsGamesCalc(),
  };
  return result;
};
