export const getRandomNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomOperation = (length = 4) => {
  const arr = ['+', '-', '*', '/'];
  const operations = arr.slice(0, length);
  const random = getRandomNumber(0, length - 1);
  return operations[random];
};
