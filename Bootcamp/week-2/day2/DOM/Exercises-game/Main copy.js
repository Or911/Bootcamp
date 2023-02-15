let ball = document.getElementById("ball");

const getBallPosition = function (side) {
  let valuePosition = parseInt(ball.style[side]) || 0;
  return valuePosition;
};
//to change the  conditions
const CheckLimits = function (side, valuePosition, stepValue) {
  if (valuePosition == 0 && stepValue < 0) {
    return true;
  } else if (valuePosition >= 405 && stepValue > 0) {
    return true;
  } else if (valuePosition >= 330 && stepValue > 0) {
    return true;
  }
};
const move = function (side, stepValue) {
  let changeStep = stepValue;
  if (side == "right" || side == "top") {
    changeStep -= changeStep + changeStep;
  }
  let valuePosition = getBallPosition(side);
  if (CheckLimits(valuePosition, changeStep)) {
    return;
  }
  valuePosition += stepValue;
  ball.style[side] = `${valuePosition}px`;
};
const STEP_PLUS = 15;
const STEP_LESS = -15;

const moveRight = document.getElementById("right");
right.onclick = function () {
  move("right", STEP_PLUS);
};
const moveLeft = document.getElementById("left");
left.onclick = function () {
  move("left", STEP_PLUS);
};
const moveUp = document.getElementById("up");
up.onclick = function () {
  move("top", STEP_PLUS);
};
const moveDown = document.getElementById("down");
down.onclick = function () {
  move("bottom", STEP_PLUS);
};

// let ball = document.getElementById("ball")

// const getBallPosition = function (side){
//   let valuePosition = parseInt(ball.style[side]) || 0;
//   return valuePosition
// }
// //to change the  conditions
// const CheckLimits = function (side, valuePosition, stepValue){
//   if (valuePosition == 0 && stepValue < 0){
//     return true
//   }
//   else if (valuePosition >= 405 && stepValue > 0){
//     return true
//   }
//   else if (valuePosition >= 330 && stepValue > 0){
//     return true
//   }
// }
// const move = function (side, stepValue) {
//   if (side == "right"){
//     stepValue -= stepValue*2
//   }
//   let valuePosition = getBallPosition(side)
//   if (CheckLimits(valuePosition, stepValue)){
//     return
//   }
//   valuePosition += stepValue;
//   ball.style[side] = `${valuePosition}px`
// };
// const STEP_PLUS = 15;
// const STEP_LESS = -15;

// const moveRight = document.getElementById("right");
// right.onclick = function () {
//   move("right", STEP_PLUS);
// };
// const moveLeft = document.getElementById("left");
// left.onclick = function () {
//   move("left", STEP_LESS);
// };
// const moveUp = document.getElementById("up");
// up.onclick = function () {
//   move("top", STEP_LESS);
// };
// const moveDown = document.getElementById("down");
// down.onclick = function () {
//   move("top", STEP_PLUS);
// };
