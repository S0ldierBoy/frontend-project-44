import playGame from '../index.js';
import generateRandomNumber from '../utils.js';

const generateProgression = (length) => {
  const firstValue = generateRandomNumber(1, 10);
  const step = generateRandomNumber(2, 5);
  const hiddenIndex = generateRandomNumber(0, length - 1);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(`${firstValue + i * step}`);
    }
  }
  return { progression: progression.join(' '), hiddenValue: firstValue + hiddenIndex * step };
};

export const generateQuestionAndAnswer = () => {
  const { progression, hiddenValue } = generateProgression(10);
  const question = `Question: ${progression}`;
  const correctAnswer = hiddenValue.toString();
  return { question, correctAnswer };
};

const gameDescription = 'What number is missing in the progression?';

export default () => playGame(gameDescription, generateQuestionAndAnswer);
