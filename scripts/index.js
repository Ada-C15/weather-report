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
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

// Temperature and landscape
const adjustTempColor = (tempNumber) => {
  const temp = document.getElementById("temp");
  const landscape = document.getElementById("landscape");
  temp.classList.remove("red", "yellow", "green", "orange", "teal");
  let color = null;
  switch (true) {
    case tempNumber <= 49:
      color = "teal";
      landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
      break;
    case tempNumber <= 59:
      color = "green";
      landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
      break;
    case tempNumber <= 69:
      color = "yellow";
      landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
      break;
    case tempNumber <= 79:
      color = "orange";
      landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
      break;
    default:
      color = "red";
      landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
      break;
  }
  temp.classList = `${temp.classList} ${color}`;
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
