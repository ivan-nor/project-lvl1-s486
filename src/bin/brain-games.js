#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { askName, welcome } from '../index';
import gameCalc from './brain-calc';
import gameEven from './brain-even';
import gameGCD from './brain-gcd';
import gamePrime from './brain-prime';
import gameProgression from './brain-progression';

welcome();

const userName = askName();

const changeGame = (user) => {
  console.log('Choose the game:');
  console.log('1. Even number');
  console.log('2. Calculate the expression');
  console.log('3. Greatest common divisor');
  console.log('4. Guess missing number');
  console.log('5. Prime number');
  console.log('0. Exit');
  const choice = readlineSync.question('Your mchoice: ');
  switch (choice) {
    case '1':
      gameEven(user);
      break;
    case '2':
      gameCalc(user);
      break;
    case '3':
      gameGCD(user);
      break;
    case '4':
      gameProgression(user);
      break;
    case '5':
      gamePrime(user);
      break;
    case '0':
      break;
    default:
      console.log('Wrong input, repeat selection, please.');
      return changeGame();
  }
  return null;
};

changeGame(userName);
