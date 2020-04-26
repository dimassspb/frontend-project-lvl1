"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require(".."));

var _random = _interopRequireDefault(require("../random.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '-':
      return num1 - num2;

    case '+':
      return num1 + num2;

    case '*':
      return num1 * num2;

    default:
      return null;
  }
};

const description = 'What is the result of the expression?.';
const signs = ['+', '-', '*'];

const getAnswerAndQuestion = () => {
  const randomsignindex = Math.floor(Math.random() * signs.length);
  const randomSign = signs[randomsignindex];
  const num1 = (0, _random.default)(0, 101);
  const num2 = (0, _random.default)(0, 101);
  const correctAnswer = String(calculate(num1, num2, randomSign));
  const question = `${num1} ${randomSign} ${num2}`;
  return [question, correctAnswer];
};

var _default = () => (0, _.default)(description, getAnswerAndQuestion);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9jYWxjdWxhdG9yLmpzIl0sIm5hbWVzIjpbImNhbGN1bGF0ZSIsIm51bTEiLCJudW0yIiwic2lnbiIsImRlc2NyaXB0aW9uIiwic2lnbnMiLCJnZXRBbnN3ZXJBbmRRdWVzdGlvbiIsInJhbmRvbXNpZ25pbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInJhbmRvbVNpZ24iLCJjb3JyZWN0QW5zd2VyIiwiU3RyaW5nIiwicXVlc3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLE1BQU1BLFNBQVMsR0FBRyxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBYUMsSUFBYixLQUFzQjtBQUN0QyxVQUFRQSxJQUFSO0FBQ0UsU0FBSyxHQUFMO0FBQ0UsYUFBT0YsSUFBSSxHQUFHQyxJQUFkOztBQUNGLFNBQUssR0FBTDtBQUNFLGFBQU9ELElBQUksR0FBR0MsSUFBZDs7QUFDRixTQUFLLEdBQUw7QUFDRSxhQUFPRCxJQUFJLEdBQUdDLElBQWQ7O0FBQ0Y7QUFDRSxhQUFPLElBQVA7QUFSSjtBQVVELENBWEQ7O0FBYUEsTUFBTUUsV0FBVyxHQUFHLHdDQUFwQjtBQUNBLE1BQU1DLEtBQUssR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFkOztBQUVBLE1BQU1DLG9CQUFvQixHQUFHLE1BQU07QUFDakMsUUFBTUMsZUFBZSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTCxLQUFLLENBQUNNLE1BQWpDLENBQXhCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHUCxLQUFLLENBQUNFLGVBQUQsQ0FBeEI7QUFDQSxRQUFNTixJQUFJLEdBQUcscUJBQVUsQ0FBVixFQUFhLEdBQWIsQ0FBYjtBQUNBLFFBQU1DLElBQUksR0FBRyxxQkFBVSxDQUFWLEVBQWEsR0FBYixDQUFiO0FBQ0EsUUFBTVcsYUFBYSxHQUFHQyxNQUFNLENBQUNkLFNBQVMsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWFVLFVBQWIsQ0FBVixDQUE1QjtBQUNBLFFBQU1HLFFBQVEsR0FBSSxHQUFFZCxJQUFLLElBQUdXLFVBQVcsSUFBR1YsSUFBSyxFQUEvQztBQUNBLFNBQU8sQ0FBQ2EsUUFBRCxFQUFXRixhQUFYLENBQVA7QUFDRCxDQVJEOztlQVNlLE1BQU0sZUFBVVQsV0FBVixFQUF1QkUsb0JBQXZCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhcnRHYW1lIGZyb20gJy4uJztcbmltcG9ydCByYW5kb21udW0gZnJvbSAnLi4vcmFuZG9tLmpzJztcblxuY29uc3QgY2FsY3VsYXRlID0gKG51bTEsIG51bTIsIHNpZ24pID0+IHtcbiAgc3dpdGNoIChzaWduKSB7XG4gICAgY2FzZSAnLSc6XG4gICAgICByZXR1cm4gbnVtMSAtIG51bTI7XG4gICAgY2FzZSAnKyc6XG4gICAgICByZXR1cm4gbnVtMSArIG51bTI7XG4gICAgY2FzZSAnKic6XG4gICAgICByZXR1cm4gbnVtMSAqIG51bTI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5jb25zdCBkZXNjcmlwdGlvbiA9ICdXaGF0IGlzIHRoZSByZXN1bHQgb2YgdGhlIGV4cHJlc3Npb24/Lic7XG5jb25zdCBzaWducyA9IFsnKycsICctJywgJyonXTtcblxuY29uc3QgZ2V0QW5zd2VyQW5kUXVlc3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHJhbmRvbXNpZ25pbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpZ25zLmxlbmd0aCk7XG4gIGNvbnN0IHJhbmRvbVNpZ24gPSBzaWduc1tyYW5kb21zaWduaW5kZXhdO1xuICBjb25zdCBudW0xID0gcmFuZG9tbnVtKDAsIDEwMSk7XG4gIGNvbnN0IG51bTIgPSByYW5kb21udW0oMCwgMTAxKTtcbiAgY29uc3QgY29ycmVjdEFuc3dlciA9IFN0cmluZyhjYWxjdWxhdGUobnVtMSwgbnVtMiwgcmFuZG9tU2lnbikpO1xuICBjb25zdCBxdWVzdGlvbiA9IGAke251bTF9ICR7cmFuZG9tU2lnbn0gJHtudW0yfWA7XG4gIHJldHVybiBbcXVlc3Rpb24sIGNvcnJlY3RBbnN3ZXJdO1xufTtcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHN0YXJ0R2FtZShkZXNjcmlwdGlvbiwgZ2V0QW5zd2VyQW5kUXVlc3Rpb24pO1xuIl19