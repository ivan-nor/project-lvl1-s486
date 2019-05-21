import { getRandomNumber, getRandomOperation } from '../index';

const conditionGameProgress = () => console.log('What number is missing in the progression?');

const generateProgress = (begin, step, operation) => {
  const resultArray = [];
  for (let i = 0; i < 10; i += 1) {
    const stringFormula = `begin ${operation} (step * ${i})`;
    // eslint-disable-next-line no-eval
    const newEl = eval(stringFormula);
    resultArray.push(newEl);
  }
  return resultArray;
};

const removeRandomElement = (array, index) => {
  const progress = array.slice();
  progress.splice(index, 1, '..');
  return progress;
};

export default (user) => {
  const begin = getRandomNumber(0, 10);
  const step = getRandomNumber(1, 10);
  const operation = getRandomOperation(2);
  const randomPassElement = getRandomNumber(0, 9);
  const progression = generateProgress(begin, step, operation);
  const questionProgress = removeRandomElement(progression, randomPassElement);
  const trueResult = progression[randomPassElement];
  const result = {
    user,
    task: questionProgress.join(', '),
    calcTrueResult: String(trueResult),
    condition: () => conditionGameProgress(),
  };

  return result;
};
