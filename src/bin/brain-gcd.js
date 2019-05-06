#!/usr/bin/env node

import { welcome, askName } from '../index';

const game = () => {
  welcome();

  askName();
};

game();
