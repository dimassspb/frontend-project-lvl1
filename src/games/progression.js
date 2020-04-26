import startGame from '../index.js';
import random from '../random.js';

const getProgression = (firstNum, difference, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(firstNum + i * difference);
  }
  return arr;
};

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;
const getData = () => {
  const num1 = random(0, 11);
  const difference = random(1, 11);
  const progression = getProgression(num1, difference, lengthOfProgression);
  const randomIndex = random(0, lengthOfProgression);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = String(progression);
  return [question, correctAnswer];
};
export default () => startGame(description, getData);
