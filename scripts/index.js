const increaseTempButton = document.getElementById("upButton");
const decreaseTempButton = document.getElementById("downButton");

const deltaTemp = function (delta) {
  const temperature = document.getElementById("tempValue");
  temperature.textContent = parseInt(temperature.textContent) + delta;
};

increaseTempButton.addEventListener("click", () => deltaTemp(1));
decreaseTempButton.addEventListener("click", () => deltaTemp(-1));

let currentTemp = 32;

const upButton = document.createElement("button");
