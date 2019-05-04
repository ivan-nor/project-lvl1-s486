#!/usr/bin/env node
import {
  welcome, askName, getRandomNumber, congratulations, oops, endGame, getEven,
  conditionsGamesEven,
  askQuestion, equalAnswer, askAnswer, correctAnswer,
} from '../index';

const start = () => {
  const game = () => {
    return {
      randomNumber: getRandomNumber(),
      isEven: getEven(this.randomNumber),
      askQuestion: askQuestion(this.randomNumber),
      userAnswer: askAnswer(),
      equalAnswer: equalAnswer(this.userAnswer, this.isEven),
    };
  };

  welcome();
  conditionsGamesEven();
  const userName = askName();

  for (let i = 1; i <= 3; i += 1) {
    const resultGame = game();
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

start();
