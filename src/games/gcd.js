import startGame from '..';
import randomnum from '../random.js';

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const description = 'Find the greatest common divisor of given numbers.';
const getAnswerAndQuestion = () => {
  const randomNum1 = randomnum(0, 101);
  const randomNum2 = randomnum(0, 101);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = String(gcd(randomNum1, randomNum2));
  return [question, correctAnswer];
};
export default () => startGame(description, getAnswerAndQuestion);
