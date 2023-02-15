for (let i = 1; i < 5; i++) {
  let newBox = document.createElement("div");
  newBox.setAttribute("class", "divs");
  newBox.setAttribute("id", `box${i}`);
  newBox.style.backgroundColor = "red";
  newBox.onmouseover = function () {
    this.style.backgroundColor = getRandomColor();
  };
  document.getElementById("container").appendChild(newBox);
}

const getRandomColor = function () {
  const niceColors = [
    "#8e44ad",
    "#3498db",
    "#c0392b",
    "#f1c40f",
    "#d35400",
    "#2ecc71",
    "#1abc9c",
    "#2c3e50",
    "#7f8c8d",
  ];

  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
};
