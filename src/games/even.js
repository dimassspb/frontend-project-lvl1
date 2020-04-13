import startGame from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const getAnswerAndQuestion = () => {
  const question = Math.floor(Math.random() * 101) + 1;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => startGame(description, getAnswerAndQuestion);
