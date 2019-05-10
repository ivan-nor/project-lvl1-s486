// #!/usr/bin/env node

import {
  welcome, askName, correctAnswer, oops, endGame, getRandomNumber,
  getRandomOperation, askAnswer, equalAnswer, congratulations, askQuestion,
} from '../index';

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

export default (userName) => {
  welcome();
  conditionGameProgress();

  for (let i = 1; i <= 3; i += 1) {
    const game = {};
    game.beginProgress = getRandomNumber(0, 10);
    game.stepProgress = getRandomNumber(1, 10);
    game.operation = getRandomOperation(2);
    game.randomPassElement = getRandomNumber(0, 9);
    game.progression = generateProgress(game.beginProgress, game.stepProgress, game.operation);
    game.questionProgress = removeRandomElement(game.progression, game.randomPassElement);
    game.isRight = game.progression[game.randomPassElement];
    game.stringQuestion = askQuestion(game.questionProgress.join(', '));
    game.userAnswer = askAnswer();
    game.equalAnswer = equalAnswer(Number(game.userAnswer), game.isRight);
    if (game.equalAnswer) {
      correctAnswer();
    } else {
      oops(userName, game.userAnswer, game.isRight);
      endGame();
    }
  }
  congratulations(userName);
};
