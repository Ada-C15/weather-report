const state = {
  temp: 73,
  cloudy: "☁️☁️☁️_☁️☁️☁️☁️☁️☁️",
  partlyCloudy: "☁️☁️___☀️☁️_☁️☁️",
  rainy: "🌧🌧🌧🌧🌧🌧🌧🌧🌧🌧",
  sunny: "___☀️☁️_____",
  onFireSky: "☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️",
}

const changeTemp = (delta) => {
  state.temp += delta;
  const tempDisplay = document.querySelector("#tempDisplay");
  tempDisplay.textContent = `${state.temp}`;
}

const increaseTemp = () => {
  changeTemp(1);
}

const decreaseTemp = () => {
  changeTemp(-1);
}

const skyDisplayUpdate = () => {
  const updatedWeather = document.getElementById("cloudStatus").value;
  const skyDisplay = document.getElementById("sky");
  console.log(updatedWeather);
  skyDisplay.textContent = state[updatedWeather];
}

const registerEventHandlers = () => {
  const increaseButton = document.querySelector("#tempIncreaseButton");
  increaseButton.addEventListener("click", increaseTemp);
  
  const decreaseButton = document.querySelector("#tempDecreaseButton");
  decreaseButton.addEventListener("click", decreaseTemp);

  const changeWeather = document.getElementById("cloudStatus");
  changeWeather.addEventListener("change", skyDisplayUpdate);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);