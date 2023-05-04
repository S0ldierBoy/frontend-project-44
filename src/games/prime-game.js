import playGame from "../index.js";
import { generateRandomNumber } from "../utils.js";

export const generateQuestionAndAnswer = () => {
  const question = generateRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? "yes" : "no";
  return { question, correctAnswer };
};

const isPrime = (num) => {
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

export const gameDescription =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => playGame(gameDescription, generateQuestionAndAnswer);
