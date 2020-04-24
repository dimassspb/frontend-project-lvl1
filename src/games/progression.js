import startGame from '..';
import randomNum from '../random.js';

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
  const num1 = randomNum(0, 11);
  const difference = randomNum(1, 11);
  const question = getProgression(num1, difference, lengthOfProgression);
  const randomIndex = randomNum(0, lengthOfProgression);
  const correctAnswer = String(question[randomIndex]);
  question[randomIndex] = '..';
  return [String(question), correctAnswer];
};
export default () => startGame(description, getData);
