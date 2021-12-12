const state = {
  temp: parseInt(document.getElementById("tempValue")),
};

// Temperature Buttons --> Increase and Decrease
const increaseTempButton = document.getElementById("upButton");
const decreaseTempButton = document.getElementById("downButton");

const deltaTemp = function (delta) {
  const temperature = document.getElementById("tempValue");
  temperature.textContent = parseInt(temperature.textContent) + delta;
  state.temp = temperature.textContent;
  changeGarden();
};

increaseTempButton.addEventListener("click", () => deltaTemp(1));
decreaseTempButton.addEventListener("click", () => deltaTemp(-1));

// Garden Based on Temp Value
// TODO: THIS FUNCTIONALLY WORKS FINE BUT NEEDS LOGIC IMPROVEMENTS
// changeGarden = () => {
//   garden = document.getElementById("gardenScape");
//   if (state.temp >= 80) {
//     garden.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
//   } else if (70 >= state.temp < 80) {
//     garden.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
//   } else if (60 >= state.temp < 70) {
//     garden.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
//   } else {
//     garden.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
//   }
// };

changeGarden = () => {
  garden = document.getElementById("gardenScape");
  if (state.temp >= 80) {
    garden.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
  } else if (state.temp >= 70 && state.temp < 80) {
    garden.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
  } else if (state.temp >= 60 && state.temp < 70) {
    garden.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
  } else {
    garden.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
  }
};

// Change sky based on input
const skyDrop = document.getElementById("skyDrop");
skyDrop.addEventListener("change", () => deltaSky());

const deltaSky = () => {
  skyScape = document.getElementById("skyScape");
  let selectedValue = skyDrop.options[[skyDrop.options["selectedIndex"]]].value;
  if (selectedValue === "sunny") {
    skyScape.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
  } else if (selectedValue === "cloudy") {
    skyScape.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
  } else if (selectedValue === "rainy") {
    skyScape.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
  } else if (selectedValue === "snowy") {
    skyScape.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
  }
};

// Change city name based on user input
const cityInput = document.getElementById("cityInput");
cityInput.addEventListener("change", (event) => {
  deltaCity(event);
});

const deltaCity = (event) => {
  let cityName = document.getElementById("cityName");
  cityName.textContent = event.target.value;
};
