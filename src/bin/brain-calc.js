#!/usr/bin/env node

import {
  welcome, askName, getRandomNumber, congratulations,
  endGame, correctAnswer, askAnswer, askQuestion, equalAnswer,
  getRandomOperation, oops,
} from '../index';

const conditionsGamesCalc = () => console.log('What is the result of the expression?');

const getStringCalc = (first, second, operation) => `${first}${operation}${second}`;

const game = () => {
  welcome();
  conditionsGamesCalc();
  const userName = askName();

  for (let i = 1; i <= 3; i += 1) {
    const resultGame = {};
    resultGame.firstRandomNumber = getRandomNumber();
    resultGame.secondRandomNumber = getRandomNumber();
    resultGame.randomOperation = getRandomOperation();
    resultGame.stringQuestion = getStringCalc(
      resultGame.firstRandomNumber, resultGame.secondRandomNumber, resultGame.randomOperation,
    );
    // eslint-disable-next-line no-eval
    resultGame.isRight = eval(resultGame.stringQuestion);
    resultGame.askQuestion = askQuestion(resultGame.stringQuestion);
    resultGame.userAnswer = askAnswer();
    resultGame.equalAnswer = equalAnswer(Number(resultGame.userAnswer), resultGame.isRight);
    if (resultGame.equalAnswer) {
      correctAnswer();
    } else {
      oops(userName, resultGame.userAnswer, resultGame.isRight);
      endGame();
    }
  }

  congratulations(userName);

  endGame();
};

game();
