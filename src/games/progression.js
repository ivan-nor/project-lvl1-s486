import getRandomNumber from '../utils';
import engine from '..';

const condition = 'What number is missing in the progression?';

const limitNumberOfProgression = 10;
const lengthProgression = 10;

const generateProgress = (begin, step) => {
  const resultArray = [begin];
  for (let i = 1; i < lengthProgression; i += 1) {
    const newElement = resultArray[i - 1] + step;
    resultArray.push(newElement);
  }
  return resultArray;
};

const removeRandomElement = (array, index) => {
  const progress = array.slice();
  progress.splice(index, 1, '..');
  return progress;
};

export default () => {
  const gameProgression = () => {
    const begin = getRandomNumber(-limitNumberOfProgression, limitNumberOfProgression);
    const step = getRandomNumber(-limitNumberOfProgression, limitNumberOfProgression);
    const hiddenElementPosition = getRandomNumber(0, lengthProgression - 1);
    const progression = generateProgress(begin, step);
    const questionProgress = removeRandomElement(progression, hiddenElementPosition);
    const trueResult = progression[hiddenElementPosition];
    const task = questionProgress.join(' ');
    const calcTrueResult = String(trueResult);
    const generateGame = () => [task, calcTrueResult];
    return [
      generateGame,
      condition,
    ];
  };
  return engine(gameProgression);
};
