export const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

export const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

export const generateProgression = (length) => {
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

export const isPrime = (num) => {
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
