// #!/usr/bin/env node

import {
  getRandomNumber, congratulations, endGame,
  askQuestion, equalAnswer, askAnswer, correctAnswer, oops,
} from '../../index';

const conditionsGamesEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no"');
};

const getEven = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

export default (userName) => {
  conditionsGamesEven();

  for (let i = 1; i <= 3; i += 1) {
    const resultGame = {};
    resultGame.randomNumber = getRandomNumber();
    resultGame.isEven = getEven(resultGame.randomNumber);
    resultGame.askQuestion = askQuestion(resultGame.randomNumber);
    resultGame.userAnswer = askAnswer();
    resultGame.equalAnswer = equalAnswer(resultGame.userAnswer, resultGame.isEven);
    askQuestion(resultGame.randomNumber);
    if (resultGame.equalAnswer) {
      correctAnswer();
    } else {
      oops(userName, resultGame.userAnswer, resultGame.isEven);
      endGame();
    }
  }

  congratulations(userName);

  endGame();
};
