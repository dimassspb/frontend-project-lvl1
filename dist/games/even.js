"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require(".."));

var _random = _interopRequireDefault(require("../random.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getAnswerAndQuestion = () => {
  const question = (0, _random.default)(0, 101);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

var _default = () => (0, _.default)(description, getAnswerAndQuestion);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9ldmVuLmpzIl0sIm5hbWVzIjpbImRlc2NyaXB0aW9uIiwiaXNFdmVuIiwibnVtIiwiZ2V0QW5zd2VyQW5kUXVlc3Rpb24iLCJxdWVzdGlvbiIsImNvcnJlY3RBbnN3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLE1BQU1BLFdBQVcsR0FBRyw0REFBcEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFJQyxHQUFELElBQVNBLEdBQUcsR0FBRyxDQUFOLEtBQVksQ0FBcEM7O0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsTUFBTTtBQUNqQyxRQUFNQyxRQUFRLEdBQUcscUJBQVUsQ0FBVixFQUFhLEdBQWIsQ0FBakI7QUFDQSxRQUFNQyxhQUFhLEdBQUdKLE1BQU0sQ0FBQ0csUUFBRCxDQUFOLEdBQW1CLEtBQW5CLEdBQTJCLElBQWpEO0FBQ0EsU0FBTyxDQUFDQSxRQUFELEVBQVdDLGFBQVgsQ0FBUDtBQUNELENBSkQ7O2VBS2UsTUFBTSxlQUFVTCxXQUFWLEVBQXVCRyxvQkFBdkIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGFydEdhbWUgZnJvbSAnLi4nO1xuaW1wb3J0IHJhbmRvbW51bSBmcm9tICcuLi9yYW5kb20uanMnO1xuXG5jb25zdCBkZXNjcmlwdGlvbiA9ICdBbnN3ZXIgXCJ5ZXNcIiBpZiB0aGUgbnVtYmVyIGlzIGV2ZW4sIG90aGVyd2lzZSBhbnN3ZXIgXCJub1wiLic7XG5jb25zdCBpc0V2ZW4gPSAobnVtKSA9PiBudW0gJSAyID09PSAwO1xuY29uc3QgZ2V0QW5zd2VyQW5kUXVlc3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHF1ZXN0aW9uID0gcmFuZG9tbnVtKDAsIDEwMSk7XG4gIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSBpc0V2ZW4ocXVlc3Rpb24pID8gJ3llcycgOiAnbm8nO1xuICByZXR1cm4gW3F1ZXN0aW9uLCBjb3JyZWN0QW5zd2VyXTtcbn07XG5leHBvcnQgZGVmYXVsdCAoKSA9PiBzdGFydEdhbWUoZGVzY3JpcHRpb24sIGdldEFuc3dlckFuZFF1ZXN0aW9uKTtcbiJdfQ==