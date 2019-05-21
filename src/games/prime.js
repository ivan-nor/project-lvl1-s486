import { getRandomNumber } from '../index';

const conditionGamePrime = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const stringIsPrime = numb => ((!numb) ? 'no' : 'yes');

export const isPrime = (numb) => {
  if (numb < 2) {
    return false;
  }
  if (numb % 2 === 0) {
    return false;
  }
  for (let i = 3; i < numb; i += 1) {
    if (numb % i === 0) {
      return false;
    }
  }
  return true;
};

export default user => ({
  user,
  task: getRandomNumber(1, 100),
  get calcTrueResult() {
    return stringIsPrime(isPrime(this.task));
  },
  condition: () => conditionGamePrime(),
});
