import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const attemptsLimit = 3;

const playGame = (gameDescription, getQuestionAndAnswer) => {
  const name = greetUser();
  console.log(gameDescription);

  for (let i = 0; i < attemptsLimit; i += 1) {
    const { question, correctAnswer } = getQuestionAndAnswer();
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `,
    );

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
