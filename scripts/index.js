let defaultTempValue = 68;
const createSky = () => {
  const inputSky = document.getElementById("skyThemeSelect").value;
  const skyContainer = document.getElementById("skyContent");
  let sky = "";
  let skyColor = "";
  if (inputSky === "Cloudy") {
    sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️☁️☁️☁️☁️☁️☁️ ☁️☁️☁️☁️";
    skyColor = "cloudy";
  } else if (inputSky === "Sunny") {
    sky = "☁️  ⛅️  🌞 ☁️🌤  🌞 ☁️ 🌥☁️😶‍🌫️ 🌞 ☁️🌞 ☁️🌞🌞 ";
    skyColor = "sunny";
  } else if (inputSky === "Rainy") {
    sky = "🌧🌈⛈🌧🌧💧💧💧💧💧⛈🌧🌦🌧💧💧💧💧💧🌧";
    skyColor = "rainy";
  } else if (inputSky === "Snowy") {
    sky = "🌨❄️❄️❄️🌨🌨❄️❄️❄️❄️🌨❄️❄️❄️🌨❄️❄️❄️❄️🌨";
    skyColor = "snowy";
  }
  skyContainer.textContent = sky;
  const gardenContent = document.getElementById("gardenContent");
  gardenContent.classList = `gardenContent ${skyColor}`;
};

const updateCityName = () => {
  console.log("updateCityName called");

  const inputCityName = document.getElementById("searchBarText").value;
  const headerCity = document.getElementById("headerCity");
  headerCity.textContent = inputCityName;
};

const resetCity = () => {
  const searchBarText = document.getElementById("searchBarText");
  searchBarText.value = "Seattle";
  updateCityName();
};

const updateTempIcons = (currentTemp) => {
  const tempValueContainer = document.getElementById("tempValue");
  let color = "blue";
  if (currentTemp >= 80) {
    color = "maroon";
  } else if (currentTemp >= 70) {
    color = "red";
  } else if (currentTemp >= 60) {
    color = "orange";
  } else if (currentTemp >= 50) {
    color = "blue";
  }

  tempValueContainer.classList = color;
};

const updateGarden = (currentTemp) => {
  const gardenContentContainer = document.getElementById("gardenContent");
  let gardenContent = "🌲 🌲 ⛄️ 🌲 ⛄️ 🍂 🌲 🍁 🌲 🌲 ⛄️ 🦅 🍂 🌲 ⛄️ 🦅 ";
  if (currentTemp >= 80) {
    gardenContent = "🌵 🐍 🌴 🦂 🌵 🦅 🌵 🐍 🏜 🦂 🦎 🌵 🐍 🏜 🐞 🦂 ";
  } else if (currentTemp >= 70) {
    gardenContent = "🌸 🌿 🌼 🐸 🌷 🌻 🐝 🦋 🌿 🐸 🌻 🌺 🐛 🐝 🌷 🌼";
  } else if (currentTemp >= 60) {
    gardenContent = "🍁 🍃 🌳 🍁 🏕 🦊 🌿 🥀 🪨 🍂 🛤 🍃 🌳 🐻 🍃";
  }
  gardenContentContainer.textContent = gardenContent;
};

const updateTemp = (temp_val) => {
  const tempValueContainer = document.getElementById("tempValue");
  tempValueContainer.innerHTML = temp_val;
  updateTempIcons(temp_val);
  updateGarden(temp_val);
};

const increaseTemp = () => {
  defaultTempValue += 1;
  updateTemp(defaultTempValue);
};

const decreaseTemp = () => {
  defaultTempValue -= 1;
  updateTemp(defaultTempValue);
};

const refresh = document.querySelector("#refresh");
const resetCityOld = () => {
  window.location.reload("resetCity");
  refresh.addEventListener("click", resetCity);
};

const registerEventHandlers = () => {
  console.log("register event handlers called");

  updateTemp(defaultTempValue);
  const increaseTempControl = document.getElementById("highTemp");
  increaseTempControl.addEventListener("click", increaseTemp);

  const decreaseTempControl = document.getElementById("lowTemp");
  decreaseTempControl.addEventListener("click", decreaseTemp);

  updateCityName();
  const cityNameInput = document.getElementById("searchBarText");
  cityNameInput.addEventListener("input", updateCityName);

  const cityNameResetBtn = document.getElementById("resetCityBtn");
  cityNameResetBtn.addEventListener("click", resetCity);

  createSky();
  const skySelect = document.getElementById("skyThemeSelect");
  skySelect.addEventListener("change", createSky);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
//--

//   skyContainer.textContent = sky;
//   const gardenContent = document.getElementById("gardenContent");
//   gardenContent.classList = `gardenContent ${skyColor}`;
// };
// const getPrecipitation = document.querySelector("#getPrecipitation");
// const addRain = () => {
//   const rainSpan = document.createElement("span");
//   const skyContainer = document.querySelector("#skyContainer");
//   rainSpan.innerText = "☔️️️ ️️💧 💧 💧 💧 💧 💧 💧 💧 ☔️";
//   skyContainer.appendChild(rainSpan);
// };
// getPrecipitation.addEventListener("click", addRain);
// //----------------------------------------------------------------------

// const getCloudy = document.querySelector("#getCloudy");
// const addClouds = () => {
//   const cloudSpan = document.createElement("span");
//   const skyContainer = document.querySelector("#skyContainer");
//   cloudSpan.innerText = "☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️";
//   skyContainer.appendChild(cloudSpan);
// };
// getCloudy.addEventListener("click", addClouds);

// //---------------------------------------------------------------------
// const getSunny = document.querySelector("#getSunny");
// const addSun = () => {
//   const skyContainer = document.querySelector("#skyContainer");
//   const sunSpan = document.createElement("span");
//   sunSpan.innerText = "🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞";
//   skyContainer.appendChild(sunSpan);
// };
// getSunny.addEventListener("click", addSun);

// //---------------------------------------------------------------------

// const getSnowy = document.querySelector("#getSnowy");
// const addSnow = () => {
//   const skyContainer = document.querySelector("#skyContainer");
//   const snowSpan = document.createElement("span");
//   snowSpan.innerText = "☃️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ☃️";
//   skyContainer.appendChild(snowSpan);
// };
// getSnowy.addEventListener("click", addSnow);

// //---------------------------------------------------------------------
// const getNight = document.querySelector("#getNight");
// const addNight = () => {
//   const skyContainer = document.querySelector("#skyContainer");
//   const nightSpan = document.createElement("span");
//   nightSpan.innerText = "🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚";
//   skyContainer.appendChild(nightSpan);
// };
// getNight.addEventListener("click", addNight);
// //---------------------------------------------------------------------

// const highTemp = document.querySelector("#highTemp");
// const addGarden = () => {
//   const gardenContainer = document.querySelector("#gardenContainer");
//   const hotTempSpan = document.createElement("span");
//   hotTempSpan.innerText = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
//   gardenContainer.replaceChild(hotTempSpan);
// };
// highTemp.addEventListener("click", addGarden);

// const increaseTemp = () => {
//   //const highTemp = document.querySelector("#highTemp");
//   const temperatureBarNumber = document.querySelector("#temperatureBarNumber");
//   const tempSpan = document.createElement("span");
//   increaseTemp.textContent = state.temperature;
//   state.temperature += 1;
// };
//--------------------------------------------------------------------------

// const submitCity = () => {
//   const searchBarButton = document.getElementById("searchBarButton");
// };

//-------------------------------------------------------------------
// const registerEventHandlers = (event) => {
//   const getPrecipitation = document.querySelector("#getPrecipitation");
//   getPrecipitation.addEventListener("click", addRain);

//   const getCloudy = document.querySelector("#getCloudy");
//   getCloudy.addEventListener("click", addClouds);

//   const getSunny = document.querySelector("#getSunny");
//   getSunny.addEventListener("click", addSun);

//   const getSnowy = document.querySelector("#getSnowy");
//   getSnowy.addEventListener("click", addSnow);

//   const getNight = document.querySelector("#getNight");
//   getNight.addEventListener("click", addNight);

//   const refresh = document.querySelector("#refresh");
//   refresh.addEventListener("click", reset);

//   const highTemp = document.querySelector("#highTemp");
//   highTemp.addEventListener("click", addGarden);
// };
