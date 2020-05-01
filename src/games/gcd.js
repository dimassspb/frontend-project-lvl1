import runGame from '../index.js';
import random from '../random.js';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const description = 'Find the greatest common divisor of given numbers.';
const getData = () => {
  const num1 = random(0, 10);
  const num2 = random(0, 10);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};
export default () => runGame(description, getData);
