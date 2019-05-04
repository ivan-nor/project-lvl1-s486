#!/usr/bin/env node
import {
  welcome, askName, getRandomNumber, congratulations, endGame,
  askQuestion, equalAnswer, askAnswer, correctAnswer,
} from '../index';

const oops = (userName, userAnswer, isEven) => console.log(
  `'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven}'. Let's try again, ${userName}!`,
);

const conditionsGamesEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no"');
};

const getEven = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

const game = () => {
  welcome();
  conditionsGamesEven();
  const userName = askName();

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

game();
