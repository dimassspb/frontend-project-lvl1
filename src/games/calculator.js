import runGame from '../index.js';
import random from '../random.js';

const calculate = (sign, num1, num2) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      break;
  }
};

const description = 'What is the result of the expression?';
const signs = ['+', '-', '*'];
const getData = () => {
  const randomSignIndex = Math.floor(Math.random() * signs.length);
  const randomSign = signs[randomSignIndex];
  const num1 = random(0, 11);
  const num2 = random(0, 11);
  const correctAnswer = String(calculate(randomSign, num1, num2));
  const question = `${num1} ${randomSign} ${num2}`;
  return [question, correctAnswer];
};
export default () => runGame(description, getData);
