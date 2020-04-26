"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const iterCount = 3;

const playGame = (description, getData) => {
  const name = _readlineSync.default.question('May I have your name?:');

  console.log(`Hello ${name} !`);
  console.log(description);

  for (let i = 0; i < iterCount; i += 1) {
    const [question, correctAnswer] = getData();
    console.log('Question:', question);

    const yourAnswer = _readlineSync.default.question('Your answer:');

    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}`);
};

var _default = playGame;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpdGVyQ291bnQiLCJwbGF5R2FtZSIsImRlc2NyaXB0aW9uIiwiZ2V0RGF0YSIsIm5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpIiwiY29ycmVjdEFuc3dlciIsInlvdXJBbnN3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLFNBQVMsR0FBRyxDQUFsQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQ0MsV0FBRCxFQUFjQyxPQUFkLEtBQTBCO0FBQ3pDLFFBQU1DLElBQUksR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0Isd0JBQXRCLENBQWI7O0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFNBQVFKLElBQUssSUFBMUI7QUFDQUcsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLFdBQVo7O0FBRUEsT0FBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVCxTQUFwQixFQUErQlMsQ0FBQyxJQUFJLENBQXBDLEVBQXVDO0FBQ3JDLFVBQU0sQ0FBQ0gsUUFBRCxFQUFXSSxhQUFYLElBQTRCUCxPQUFPLEVBQXpDO0FBQ0FJLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJGLFFBQXpCOztBQUNBLFVBQU1LLFVBQVUsR0FBR04sc0JBQWFDLFFBQWIsQ0FBc0IsY0FBdEIsQ0FBbkI7O0FBQ0EsUUFBSUssVUFBVSxLQUFLRCxhQUFuQixFQUFrQztBQUNoQ0gsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNELEtBRkQsTUFFTztBQUNMRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxJQUFHRyxVQUFXLDZDQUE0Q0QsYUFBYyxJQUFyRjtBQUNBSCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJKLElBQUssR0FBckM7QUFDQTtBQUNEO0FBQ0Y7O0FBQ0RHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLG9CQUFtQkosSUFBSyxFQUFyQztBQUNELENBbEJEOztlQW1CZUgsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmNvbnN0IGl0ZXJDb3VudCA9IDM7XG5jb25zdCBwbGF5R2FtZSA9IChkZXNjcmlwdGlvbiwgZ2V0RGF0YSkgPT4ge1xuICBjb25zdCBuYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT86Jyk7XG4gIGNvbnNvbGUubG9nKGBIZWxsbyAke25hbWV9ICFgKTtcbiAgY29uc29sZS5sb2coZGVzY3JpcHRpb24pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlckNvdW50OyBpICs9IDEpIHtcbiAgICBjb25zdCBbcXVlc3Rpb24sIGNvcnJlY3RBbnN3ZXJdID0gZ2V0RGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKCdRdWVzdGlvbjonLCBxdWVzdGlvbik7XG4gICAgY29uc3QgeW91ckFuc3dlciA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignWW91ciBhbnN3ZXI6Jyk7XG4gICAgaWYgKHlvdXJBbnN3ZXIgPT09IGNvcnJlY3RBbnN3ZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdDb3JyZWN0IScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgJyR7eW91ckFuc3dlcn0nIGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzICcke2NvcnJlY3RBbnN3ZXJ9Jy5gKTtcbiAgICAgIGNvbnNvbGUubG9nKGBMZXQncyB0cnkgYWdhaW4sICR7bmFtZX0hYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGBDb25ncmF0dWxhdGlvbnMsICR7bmFtZX1gKTtcbn07XG5leHBvcnQgZGVmYXVsdCBwbGF5R2FtZTtcbiJdfQ==