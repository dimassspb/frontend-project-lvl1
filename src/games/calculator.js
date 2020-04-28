import runGame from '../index.js';
import random from '../random.js';

const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const description = 'What is the result of the expression?';
const signs = ['+', '-', '*'];
const getData = () => {
  const randomSignIndex = Math.floor(Math.random() * signs.length);
  const randomSign = signs[randomSignIndex];
  const num1 = random(0, 11);
  const num2 = random(0, 11);
  const correctAnswer = String(calculate(num1, num2, randomSign));
  const question = `${num1} ${randomSign} ${num2}`;
  return [question, correctAnswer];
};
export default () => runGame(description, getData);
