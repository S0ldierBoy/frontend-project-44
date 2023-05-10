import playGame from '../index.js';
import generateRandomNumber from '../utils.js';

const generateProgression = (length) => {
  const first = generateRandomNumber(1, 10);
  const step = generateRandomNumber(2, 5);
  const hiddenIndex = generateRandomNumber(0, length - 1);
  let progression = '';
  let currentValue = first;

  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      progression += '.. ';
    } else {
      progression += `${currentValue} `;
    }
    currentValue += step;
  }

  return { progression, hiddenValue: first + hiddenIndex * step };
};

export const generateQuestionAndAnswer = () => {
  const { progression, hiddenValue } = generateProgression(10);
  const question = `Question: ${progression}`;
  const correctAnswer = hiddenValue.toString();
  return { question, correctAnswer };
};

const gameDescription = 'What number is missing in the progression?';

export default () => playGame(gameDescription, generateQuestionAndAnswer);
