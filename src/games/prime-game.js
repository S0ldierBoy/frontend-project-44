import playGame from '../index.js';
import generateRandomNumber from '../utils.js';

const isNumberPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const generateQuestionAndAnswer = () => {
  const question = generateRandomNumber(1, 100);
  const correctAnswer = isNumberPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => playGame(gameDescription, generateQuestionAndAnswer);
