import runGame from '../index.js';
import random from '../random.js';

const getProgression = (firstNum, difference, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNum + i * difference);
  }
  return progression;
};

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;
const getData = () => {
  const firstNum = random(0, 11);
  const difference = random(1, 11);
  const progression = getProgression(firstNum, difference, lengthOfProgression);
  const randomIndex = random(0, lengthOfProgression);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = String(progression);
  return [question, correctAnswer];
};
export default () => runGame(description, getData);
