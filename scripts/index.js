const state = {
  temp: 73,
}

const changeTemp = (delta) => {
  state.temp += delta;
  console.log(state.temp);
  const tempDisplay = document.querySelector("#tempDisplay");
  tempDisplay.textContent = `${state.temp}`;
}

const increaseTemp = () => {
  changeTemp(1);
}

const decreaseTemp = () => {
  changeTemp(-1);
}

const registerEventHandlers = () => {
  const increaseButton = document.querySelector("#tempIncreaseButton");
  increaseButton.addEventListener("click", increaseTemp);
  
  const decreaseButton = document.querySelector("#tempDecreaseButton");
  decreaseButton.addEventListener("click", decreaseTemp);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);