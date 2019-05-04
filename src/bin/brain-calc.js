#!/usr/bin/env node

import { welcome, askName } from '..';

const conditionsGamesCalc = () => console.log('What is the result of the expression?');

const game = () => {
  welcome();
  conditionsGamesCalc();
  askName();
};

game();
