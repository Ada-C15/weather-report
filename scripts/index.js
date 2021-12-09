//Temperature values elements that will change when clicked
const tempContainer = document.getElementById('temperature-value');
const increaseButton = document.getElementById('increaseTemp');
const decreaseButton = document.getElementById('decreaseTemp');

const state = {
  tempCount: 76,
  skyColor: "#324DF7",
};
//increases and decrease tempereature with one click 
const addTemperature = () => {
  state.tempCount += 1;
  tempContainer.textContent = `${state.tempCount}`;
}
const decreaseTemperature = () => {
  state.tempCount -= 1;
  tempContainer.textContent = `${state.tempCount}`;
}

const registerEventHandlers = (event) => {
  // const increaseButton = document.querySelector("#increaseButton");
  increaseButton.addEventListener("click", addTemperature);
  decreaseButton.addEventListener("click", decreaseTemperature);
};



document.addEventListener("DOMContentLoaded", registerEventHandlers);
