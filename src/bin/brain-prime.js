#!/usr/bin/env node

import {
  welcome, askName, congratulations, getRandomNumber,
  askQuestion, askAnswer, equalAnswer, oops,
  correctAnswer, endGame, isPrime,
} from '../index';

const conditionGamePrime = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const stringIsPrime = numb => ((!numb) ? 'no' : 'yes');

const start = () => {
  welcome();
  conditionGamePrime();
  const userName = askName();

  for (let i = 1; i <= 3; i += 1) {
    const game = {};
    game.randomNumber = getRandomNumber(1, 100);
    game.isRight = isPrime(game.randomNumber);
    game.stringIsPrime = stringIsPrime(game.isRight);
    game.askQuestion = askQuestion(game.randomNumber);
    game.userAnswer = askAnswer();
    game.equalAnswer = equalAnswer(game.userAnswer, game.stringIsPrime);
    if (game.equalAnswer) {
      correctAnswer();
    } else {
      oops(userName, game.userAnswer, game.stringIsPrime);
      endGame();
    }
  }
  congratulations(userName);
  endGame();
};

start();
