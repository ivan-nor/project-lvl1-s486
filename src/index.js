import readlineSync from 'readline-sync';

export default (game) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hello, ${userName}!`);

  const gameIter = (parameter, round, lastRound) => {
    const [task, calcTrueResult, condition] = parameter;

    if (round > lastRound) {
      return console.log(`Congratulations, ${userName}!`);
    }

    if (round === 1) {
      console.log(condition);
    }

    console.log(`Question: ${task} ?`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (!(userAnswer === calcTrueResult)) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${calcTrueResult}'. Let's try again, ${userName}!`;
    }
    console.log('Correct!');

    return gameIter(game, round + 1, lastRound);
  };

  return gameIter(game, 1, 3);
};
