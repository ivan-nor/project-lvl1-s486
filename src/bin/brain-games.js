#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { askName, welcome } from '../index';
import gameCalc from './brain-calc';
import gameEven from './brain-even';
import gameGCD from './brain-gcd';
import gamePrime from './brain-prime';
import gameProgression from './brain-progression';

const changeGame = () => {
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
      gameEven();
      break;
    case '2':
      gameCalc();
      break;
    case '3':
      gameGCD();
      break;
    case '5':
      gameProgression();
      break;
    case '6':
      gamePrime();
      break;
    case '0':
      break;
    default:
      console.log('Wrong input, repeat selection, please.');
      return changeGame();
  }
  return null;
};

welcome();

askName();

changeGame();
