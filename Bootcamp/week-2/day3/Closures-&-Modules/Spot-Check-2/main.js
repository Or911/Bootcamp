const mathOperations = function () {
  const add = function (x, y) {
    return x + y;
  };

  const subtract = function (x, y) {
    return x - y;
  };

  const multiply = function (x, y) {
    return x * y;
  };

  const divide = function (x, y) {
    return x / y;
  };
  return {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide,
  };
};
const cunst = mathOperations();

console.log(cunst.add(13, 29)); //42
console.log(cunst.mult(1.75, 24)); //42
console.log(cunst.mult(7, cunst.div(36, 6))); //42
