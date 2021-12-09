const state = {
  temp: 75,
};

// What to do when the view loads
window.addEventListener("load", () => {
  //Set temp
  const temp = document.getElementById("temp");
  temp.textContent = String(state.temp);
  adjustTempColor(state.temp);

  //Set Sky
  changeSky();
});

const registerEventHandlers = () => {
  const upButton = document.getElementById("upArrow");
  upButton.addEventListener("click", increaseTemp);

  const downButton = document.getElementById("downArrow");
  downButton.addEventListener("click", decreaseTemp);

  const skyDropdown = document.querySelector("select");
  skyDropdown.addEventListener("change", changeSky);

  const cityInput = document.querySelector("input");
  cityInput.addEventListener("input", updateCityName);

  const resetButton = document.querySelector("#resetButton");
  resetButton.addEventListener("click", resetCityName);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

// Temperature and landscape
const adjustTempColor = (tempNumber) => {
  const temp = document.getElementById("temp");
  const landscape = document.getElementById("landscape");
  const garden = document.querySelector(".garden");
  temp.classList.remove("red", "yellow", "green", "orange", "teal");
  garden.classList.remove(
    "warmBackground",
    "hotBackground",
    "coolBackground",
    "coldBackground"
  );
  let color = null;
  let background = null;
  switch (true) {
    case tempNumber <= 49:
      color = "teal";
      background = "coldBackground";
      landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
      break;
    case tempNumber <= 59:
      color = "green";
      background = "coldBackground";
      landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
      break;
    case tempNumber <= 69:
      background = "coolBackground";
      color = "yellow";
      landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
      break;
    case tempNumber <= 79:
      background = "warmBackground";
      color = "orange";
      landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
      break;
    default:
      color = "red";
      background = "hotBackground";
      landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
      break;
  }
  temp.classList = `${temp.classList} ${color}`;
  garden.classList = `${garden.classList} ${background}`;
};

const increaseTemp = () => {
  const temp = document.getElementById("temp");
  tempInt = parseInt(temp.textContent);
  tempInt += 1;
  temp.textContent = String(tempInt);
  state.temp += 1;
  adjustTempColor(tempInt);
};

const decreaseTemp = () => {
  const temp = document.getElementById("temp");
  tempInt = parseInt(temp.textContent);
  tempInt -= 1;
  temp.textContent = String(tempInt);
  state.temp -= 1;
  adjustTempColor(tempInt);
};

// Sky stuff
const skyOptions = {
  Sunny: "☀️☁️ ☀️☀️ ☁️ ☀️☀️☀️ ☁️ ☀️",
  Cloudy: "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️",
  Rainy: "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧",
  Snowy: "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨",
};

const changeSky = () => {
  const sky = document.getElementById("sky");
  const dropdown = document.querySelector("select");
  sky.textContent = skyOptions[dropdown.value];
};

// City name stuff
const updateCityName = () => {
  const cityInput = document.querySelector("input");
  const cityHeader = document.querySelector("h2");
  if (cityInput.value === "") {
    cityHeader.textContent = `for ✨Seattle✨`;
  } else {
    cityHeader.textContent = `for ✨${cityInput.value}✨`;
  }
};

// Reset Button
const resetCityName = () => {
  const cityInput = document.querySelector("input");
  const cityHeader = document.querySelector("h2");
  cityInput.value = null;
  cityHeader.textContent = "for ✨Seattle✨";
};
