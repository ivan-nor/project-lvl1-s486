import readlineSync from 'readline-sync';

const numberOfRounds = 3;

export default (game) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name, please? ');
  console.log(`Hello, ${userName}!`);

  const [, condition] = game();
  console.log(condition);

  const gameIter = (parameter, round, lastRound) => {
    if (round > lastRound) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const [generateGame] = parameter;
    const [task, calcTrueResult] = generateGame();

    console.log(`Question: ${task} ?`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (!(userAnswer === calcTrueResult)) {
      const result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${calcTrueResult}'. Let's try again, ${userName}!`;
      return console.log(result);
    }
    console.log('Correct!');

    return gameIter(game(), round + 1, lastRound);
  };

  return gameIter(game(), 1, numberOfRounds);
};
