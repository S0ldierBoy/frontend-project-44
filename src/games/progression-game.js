import playGame from '../index.js';

import { generateProgression } from '../utils.js';

export const generateQuestionAndAnswer = () => {
  const { progression, hiddenValue } = generateProgression(10);
  const question = `Question: ${progression}`;
  const correctAnswer = hiddenValue.toString();
  return { question, correctAnswer };
};

export const gameDescription = 'What number is missing in the progression?';

export default () => playGame(gameDescription, generateQuestionAndAnswer);
