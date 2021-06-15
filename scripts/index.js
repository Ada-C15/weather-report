const state = {
  temperature: 45
};

const getPrecipitation = document.querySelector("#getPrecipitation");
const addRain = () => {
  const rainSpan = document.createElement("span");
  const gardenContainer = document.querySelector("#gardenContainer");
  rainSpan.innerText = "☔️️️ ️️💧 💧 💧 💧 💧 💧 💧 💧 ☔️";
  gardenContainer.appendChild(rainSpan);
};
getPrecipitation.addEventListener("click", addRain);
//----------------------------------------------------------------------

//const getCloudy = document.querySelector("#getCloudy");
const addClouds = () => {
  const cloudSpan = document.createElement("span");
  const gardenContainer = document.querySelector("#gardenContainer");
  cloudSpan.innerText = "☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️";
  gardenContainer.appendChild(cloudSpan);
};
//getCloudy.addEventListener("click", addClouds);

//---------------------------------------------------------------------
//const getSunny = document.querySelector("#getSunny");
const addSun = () => {
  const gardenContainer = document.querySelector("#gardenContainer");
  const sunSpan = document.createElement("span");
  sunSpan.innerText = "🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞";
  gardenContainer.appendChild(sunSpan);
};
//getSunny.addEventListener("click", addSun);

//---------------------------------------------------------------------

//const getSnowy = document.querySelector("#getSnowy");
const addSnow = () => {
  const gardenContainer = document.querySelector("#gardenContainer");
  const snowSpan = document.createElement("span");
  snowSpan.innerText = "☃️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ☃️";
  gardenContainer.appendChild(snowSpan);
};
//getSnowy.addEventListener("click", addSnow);

//---------------------------------------------------------------------
//const getNight = document.querySelector("#getNight");
const addNight = () => {
  const gardenContainer = document.querySelector("#gardenContainer");
  const nightSpan = document.createElement("span");
  nightSpan.innerText = "🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚";
  gardenContainer.appendChild(nightSpan);
};
//getNight.addEventListener("click", addNight);
//---------------------------------------------------------------------

//const temperatureBarNumber = document.querySelector("#temperatureBarNumber");
const increaseTemp = () => {
  //const highTemp = document.querySelector("#highTemp");
  const highTemp = document.querySelector("#highTemp");
  const temperatureBarNumber = document.createElement("span");
  increaseTemp.textContent = state.temperature;
  state.temperature += 1;
};

//---------------------------------------------------------------------
const registerEventHandlers = (event) => {
  const getPrecipitation = document.querySelector("#getPrecipitation");
  getPrecipitation.addEventListener("click", addRain);

  const getCloudy = document.querySelector("#getCloudy");
  getCloudy.addEventListener("click", addClouds);

  const getSunny = document.querySelector("#getSunny");
  getSunny.addEventListener("click", addSun);

  const getSnowy = document.querySelector("#getSnowy");
  getSnowy.addEventListener("click", addSnow);

  const getNight = document.querySelector("#getNight");
  getNight.addEventListener("click", addNight);

  const highTemp = document.querySelector("#highTemp");
};

document.addEventListener("DOmContentLoaded", registerEventHandlers);
