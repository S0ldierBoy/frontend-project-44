import playGame from '../index.js';

import { getGcd, generateRandomNumber } from '../utils.js';

const generateQuestionAndAnswer = () => {
  const num1 = generateRandomNumber(1, 10);
  const num2 = generateRandomNumber(1, 10);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();

  return { question, correctAnswer };
};

export const gameDescription =
  'Find the greatest common divisor of given numbers.';

export default () => playGame(gameDescription, generateQuestionAndAnswer);
