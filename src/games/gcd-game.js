import playGame from '../index.js';
import generateRandomNumber from '../utils.js';

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGreatestCommonDivisor(b, a % b);
};

const generateQuestionAndAnswerForGcdGame = () => {
  const num1 = generateRandomNumber(1, 10);
  const num2 = generateRandomNumber(1, 10);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGreatestCommonDivisor(num1, num2).toString();

  return { question, correctAnswer };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export default () => playGame(gameDescription, generateQuestionAndAnswerForGcdGame);
