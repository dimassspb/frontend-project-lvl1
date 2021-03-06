import runGame from '../index.js';
import random from '../random.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getData = () => {
  const question = random(0, 10);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => runGame(description, getData);
