const getPrecipitation = document.querySelector("#getPrecipitation");
const addRain = () => {
  const gardenContainer = document.querySelector("#gardenContainer");
  const rainSpan = document.createElement("span");
  rainSpan.innerText = "\n☔️️️ ️️🐸 💧 🐸 ☔️";
  gardenContainer.appendChild(rainSpan);
};
console.log("precipitation:" + getPrecipitation);
// getPrecipitation.addEventListener("click", addRain);
//----------------------------------------------------------------------

const getCloudy = document.querySelector("#getCloudy");
const addClouds = () => {
  const gardenContainer = document.querySelector("#gardenContainer");
  const cloudSpan = document.createElement("span");
  cloudSpan.innerText = "\n☁️ 🪴 ☁️";
  gardenContainer.appendChild(cloudSpan);
};
// getCloudy.addEventListener("click", addClouds);

//---------------------------------------------------------------------
const getSunny = document.querySelector("#getSunny");
const addSun = () => {
  const gardenContainer = document.querySelector("#gardenContainer");
  const sunSpan = document.createElement("span");
  sunSpan.innerText = "🌞 🌻 🌻 🌞";
  gardenContainer.appendChild(sunSpan);
};
getSunny.addEventListener("click", addSun);

//---------------------------------------------------------------------

const getSnowy = document.querySelector("#getSnowy");
const addSnow = () => {
  const gardenContainer = document.querySelector("#gardenContainer");
  const snowSpan = document.createElement("span");
  snowSpan.innerText = "☃️ ❄️ 🎄 ❄️ ☃️";
  gardenContainer.appendChild(snowSpan);
};
getSnowy.addEventListener("click", addSnow);

//---------------------------------------------------------------------
const input = document.querySelector("#temperature-bar-number");
const btnIncrement = document.querySelector("#highTemp");
btnIncrement.addEventListener("click", () => {
  input.value = parseInt(input.value) + 1;
});

const btnDecrement = document.querySelector("#lowTemp");
btnDecrement.addEventListener("click", () => {
  input.value = parseInt(input.value) - 1;
});
