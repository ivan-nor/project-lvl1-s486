#!/usr/bin/env node

import { welcome, askName, congratulations } from '../index';

const conditionGamePrime = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (number) => {
  

}

const start = () => {
  welcome();
  conditionGamePrime();
  const userName = askName();

  

  congratulations(userName);
};

start();
