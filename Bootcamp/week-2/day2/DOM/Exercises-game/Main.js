let ball = document.getElementById("ball")

const getBallPosition = function (side){
  let valuePosition = parseInt(ball.style[side]) || 0;
  return valuePosition
}

const move = function (side, stepValue) {
  let valuePosition = getBallPosition(side)
  if (valuePosition == 0 && stepValue < 0){
    return
  }
  valuePosition += stepValue;
  ball.style[side] = `${valuePosition}px`
};
const STEP_PLUS = 15;
const STEP_LESS = -15;

const moveRight = document.getElementById("right");
right.onclick = function () {
  move("left", STEP_PLUS);
};
const moveLeft = document.getElementById("left");
left.onclick = function () {
  move("left", STEP_LESS);
};
const moveUp = document.getElementById("up");
up.onclick = function () {
  move("top", STEP_LESS);
};
const moveDown = document.getElementById("down");
down.onclick = function () {
  move("top", STEP_PLUS);
};
