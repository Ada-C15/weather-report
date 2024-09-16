let temp_num = 60;

const changeScenerynStyle = (withTemp) => {
  const earthContainer = document.getElementById("landscape");
  const tempContainer = document.getElementById("temp_num");
  let landscape = "";
  let color = "";
  if (withTemp >= 80) {
    landscape = "🌵_🐍_🦂_🌵🌵🐍_🏜_🦂";
    color = "red";
  } else if (withTemp >= 70){
    landscape = "🌸🌿🌼🌷🌻🌿☘️🌱🌻🌷";
    color = "orange";
  } else if (withTemp >= 60) {
    landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾_🍃";
    color = "yellow";
  } else if (withTemp >= 50) {
    landscape = "🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    color = "green";
  } else if (withTemp <= 49) {
    landscape = "🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    color = "teal";
  }
  tempContainer.className = color;
  earthContainer.textContent = landscape;
}

const tempChange = temp_num => {
  const tempContainer = document.getElementById("temp_num");
  tempContainer.textContent = temp_num;
  changeScenerynStyle(temp_num);
}

const hotter = () => {
  temp_num += 1;
  tempChange(temp_num);
};

const colder = () => {
  temp_num -= 1;
  tempChange(temp_num);
};

const changeSky = () => {
  const skyChoice = document.getElementById("sky_select").value;
  const skyOnEarth = document.getElementById("sky");
  const background = document.body;
  let sky = "";
      if (skyChoice === "Sunny") {
        sky = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
      } else if (skyChoice === "Cloudy") {
        sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
      } else if (skyChoice === "Rainy") {
        sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
      } else if (skyChoice === "Snowy") {
        sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
      }
  skyOnEarth.textContent = sky;
  background.className= skyChoice;
}
const changeLocale = () => {
  const cityContainer = document.querySelector(".header_city");
  const typed_city = document.querySelector("#typed_city").value;
  cityContainer.textContent = typed_city;
}
const skipTown = () => {
  const thisIsthePlace = document.querySelector(".header_city")
  var typed_city = document.querySelector("#typed_city").value;
  typed_city = "Missoula, Mt";
  changeLocale()
}
//tried a couple different ways of the click button to clear input/city again but it's not working, atleast it will change with the typing still?
const registerEventHandlers = () => {
  tempChange(temp_num);
  const someLikeItHot = document.querySelector("#temp_increase");
  temp_increase.addEventListener("click", hotter);
  const someLikeItCold = document.querySelector("#temp_decrease");
  temp_decrease.addEventListener("click", colder);
  changeSky();
  const updateSky = document.getElementById("sky_select");
  updateSky.addEventListener("change", changeSky);
  const weOutHere = document.getElementById("typed_city");
  const moveTown = document.querySelector("#city_reset");
  weOutHere.addEventListener("input", changeLocale);
  moveTown.addEventListener("click", skipTown);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
