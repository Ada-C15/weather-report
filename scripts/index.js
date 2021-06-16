const state = {
  temp: 73,
  cloudy: "☁️☁️☁️_☁️☁️☁️☁️☁️☁️",
  partlyCloudy: "☁️☁️___☀️☁️_☁️☁️",
  rainy: "🌧🌧🌧🌧🌧🌧🌧🌧🌧🌧",
  sunny: "___☀️☁️_____",
  onFireSky: "☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️",
  onFireGround: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥",
  garden: "🌻__🌷🌷🌱_",
}

const emojiSelector = {
  0: "✨",
  1: "⚡️",
  2: "👾",
  3: "⭐️",
  4: "🌈",
}

const randEmoji = () => {
  return emojiSelector[Math.floor(Math.random() * 5)];
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
  skyDisplay.textContent = state[updatedWeather];
  if (updatedWeather === "onFireSky") {
    document.getElementById("landscape").textContent = state.onFireGround;
  }
  else {
    document.getElementById("landscape").textContent = state.garden;
  }
}

const cityReset = () => {
  const cityDisplayCard = document.getElementById("cityDisplay");
  const cityTitleDisplay = document.getElementById("currentCity");

  let frameEmoji = randEmoji();

  cityDisplayCard.textContent = "Seattle";
  cityTitleDisplay.textContent = "Currently in " + frameEmoji + "Seattle" + frameEmoji;
}

const cityUpdate = () => {
  const newCity = document.getElementById("cityPicker").value;
  const cityDisplayCard = document.getElementById("cityDisplay");
  const cityTitleDisplay = document.getElementById("currentCity");

  let frameEmoji = randEmoji();

  cityDisplayCard.textContent = newCity;
  cityTitleDisplay.textContent = "Currently in " + frameEmoji + newCity + frameEmoji;
}

const registerEventHandlers = () => {
  const increaseButton = document.querySelector("#tempIncreaseButton");
  increaseButton.addEventListener("click", increaseTemp);
  
  const decreaseButton = document.querySelector("#tempDecreaseButton");
  decreaseButton.addEventListener("click", decreaseTemp);

  const changeWeather = document.getElementById("cloudStatus");
  changeWeather.addEventListener("change", skyDisplayUpdate);

  const updateCity = document.getElementById("cityPicker");
  updateCity.addEventListener("change", cityUpdate);

  const resetCity = document.getElementById("resetCity");
  resetCity.addEventListener("click", cityReset);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);