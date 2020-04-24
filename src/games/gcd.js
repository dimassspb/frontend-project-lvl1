import startGame from '..';
import randomNum from '../random.js';

const getGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const description = 'Find the greatest common divisor of given numbers.';
const getData = () => {
  const num1 = randomNum(0, 11);
  const num2 = randomNum(0, 11);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};
export default () => startGame(description, getData);
