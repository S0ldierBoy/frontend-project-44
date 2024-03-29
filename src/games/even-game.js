import generateRandomNumber from '../utils.js';
import playGame from '../index.js';

const generateQuestionAndAnswerForEvenNumber = () => {
  const question = generateRandomNumber(1, 10);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => playGame(gameDescription, generateQuestionAndAnswerForEvenNumber);
