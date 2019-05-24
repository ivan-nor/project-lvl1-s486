import getRandomNumber from '../utils';
import engine from '..';

const condition = 'What number is missing in the progression?';

const limitNumberOfProgression = 10;
const lengthProgression = 10;

const generateProgress = (begin, step, length) => {
  const resultArray = [];
  for (let i = 0; i < length; i += 1) {
    const newElement = begin + step * i;
    resultArray.push(newElement);
  }
  return resultArray;
};

const removeRandomElement = (array, index) => {
  const progress = array.slice();
  progress.splice(index, 1, '..');
  return progress;
};

const gameProgression = () => {
  const begin = getRandomNumber(-limitNumberOfProgression, limitNumberOfProgression);
  const step = getRandomNumber(-limitNumberOfProgression, limitNumberOfProgression);
  const hiddenElementPosition = getRandomNumber(0, lengthProgression - 1);
  const progression = generateProgress(begin, step, lengthProgression);
  const questionProgress = removeRandomElement(progression, hiddenElementPosition);
  const trueResult = progression[hiddenElementPosition];
  const task = questionProgress.join(' ');
  const calcTrueResult = String(trueResult);
  const generateGame = () => [task, calcTrueResult];
  return generateGame;
};

export default () => engine(gameProgression, condition);
