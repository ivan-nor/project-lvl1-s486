#!/usr/bin/env node

import {
  welcome, askName, endGame, congratulations, getRandomNumber,
  askQuestion, askAnswer, correctAnswer, oops, equalAnswer,
} from '../index';

const conditionsGamesGcd = () => console.log('Find the greatest common divisor of given numbers.');

const gcdRecursion = (first, second) => {
  let n1 = first;
  let n2 = second;
  if (n2 === 0) {
    return n1;
  }
  if (n1 < n2) {
    const t = n1;
    n1 = n2;
    n2 = t;
  }
  if (n1 % n2 === 0) {
    return n2;
  }
  return gcdRecursion(n2, n1 % n2);
};

const start = () => {
  welcome();
  const userName = askName();
  conditionsGamesGcd();

  for (let i = 1; i <= 3; i += 1) {
    const game = {};
    game.firstRandomNumber = getRandomNumber();
    game.secondRandomNumber = getRandomNumber();
    game.stringQuestion = `${game.firstRandomNumber} and ${game.secondRandomNumber}`;
    game.askQuestion = askQuestion(game.stringQuestion);
    game.calcTrueResult = gcdRecursion(game.firstRandomNumber, game.secondRandomNumber);
    game.userAnswer = askAnswer();
    game.equalAnswer = equalAnswer(Number(game.userAnswer), game.calcTrueResult);
    if (game.equalAnswer) {
      correctAnswer();
    } else {
      oops(userName, game.userAnswer, game.calcTrueResult);
      endGame();
    }
  }

  congratulations(userName);
  endGame();
};

start();
