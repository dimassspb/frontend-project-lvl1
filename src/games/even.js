import runGame from '../index.js';
import random from '../random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const getData = () => {
  const question = random(0, 11);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => runGame(description, getData);
