import getRandomNumber from '../utils';
import engine from '..';

const condition = 'What is the result of the expression?';

const getRandomStringOperation = () => {
  const operations = ['+', '-', '*'];
  const random = getRandomNumber(0, operations.length - 1);
  return operations[random];
};

const calcExpressionString = (firstNum, secondNum, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    default:
      break;
  }
  return String(result);
};

const gameCalc = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const operation = getRandomStringOperation();
  const task = `${firstNum}${operation}${secondNum}`;
  const calcTrueResult = calcExpressionString(firstNum, secondNum, operation);
  return [task, calcTrueResult];
};

export default () => engine(gameCalc, condition);
