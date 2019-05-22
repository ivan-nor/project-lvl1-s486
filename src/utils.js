const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperation = (length = 4) => {
  const arr = ['+', '-', '*', '/'];
  const operations = arr.slice(0, length);
  const random = getRandomNumber(0, length - 1);
  return operations[random];
};

export { getRandomNumber, getRandomOperation };
