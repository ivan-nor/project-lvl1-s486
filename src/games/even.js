import { getRandomNumber } from '../index';

const conditionsGamesEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no"');
};

const getEven = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

export default user => ({
  user,
  task: getRandomNumber(),
  get calcTrueResult() {
    return getEven(this.task);
  },
  condition: () => conditionsGamesEven(),
});


