// BUTTON EVENTS
// The object state is accessible in all our functions

const state = {
  currentTemp: 71
};

const updateTemperature = (currentTemp) => {
    const tempValue = document.querySelector("#temp_value");
    tempValue.textContent = currentTemp;
    const weatherLandscape= document.querySelector("#landscape_picture");
    if (currentTemp >= 80) {
        weatherLandscape.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-256.png";
    } else if (currentTemp >= 70) {
        weatherLandscape.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_1-256.png";
    } else if (currentTemp >= 60) {
        weatherLandscape.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_16-256.png";
    } else if (currentTemp >= 50) {
        weatherLandscape.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_35-256.png";
    }
}

const increaseTemp = () => {
    state.currentTemp += 1;
    updateTemperature(state.currentTemp);
};

const decreaseTemp = () => {
    state.currentTemp -= 1;
    updateTemperature(state.currentTemp);
};

const changeWeather = () => {
    const weatherMenu = document.querySelector("#weather_menu").value;
    const weatherIcon = document.querySelector("#weather_picture");
    if (weatherMenu === "Sunny") {
        weatherIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-256.png";
    } else if (weatherMenu === "Cloudy") {
        weatherIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_1-256.png";
    } else if (weatherMenu === "Rainy") {
        weatherIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_16-256.png";
    } else if (weatherMenu == "Snowy") {
        weatherIcon.src = "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_35-256.png";
    }
}

const updateCityName = () => {
    const inputCityName = document.querySelector("#city").value;
    const cityName = document.querySelector("#city_name");
    cityName.textContent = `✨`+ inputCityName + `✨`
};

const resetCityName = () => {
    const cityName = document.querySelector("#city");
    cityName.value = "✨Stallion Springs✨";
    updateCityName();

}

// Behavior Option 1
const updateDuckCount = () => {
  const duckCounterElement = document.querySelector("#duckCount");
  duckCounterElement.textContent = `Total ducks: ${state.duckCount}`;
};

// 1. Select the HTML element the event will occur on
const addDuckButton = document.querySelector("#addDuckButton");

// 2. Make a function to run when it occurs
const addDuck = () => {
  const duckContainer = document.querySelector("#duckContainer");
  const duckSpan = document.createElement("span");
  duckSpan.innerText = "🦆";
  duckContainer.appendChild(duckSpan);
  state.duckCount += 1; 
  // Behavior Option 1
  updateDuckCount();
  // Behavior Option 2
  // const duckCountContainer = document.querySelector("#duckCount");
  // duckCountContainer.textContent = `Duck Count: ${state.duckCount}`;
};


function toggleTheme() {
  const element = document.body;
  element.classList.toggle("light-mode");
}

// // 3. Register that function as an 'event listener' (added in DOM below)
// addDuckButton.addEventListener("click", addDuck);

// // Or, use an anonymous function instead of using make/register function
// someElement.addEventListener("click", () => {
//   someElement.textContent = "Bye!";
// });


// We need to ask our document to wait and register the event handlers after the DOM has been completely loaded

const registerEventHandlers = () => {

  const tempIncrease = document.querySelector("#increase_temp");
  tempIncrease.addEventListener("click", increaseTemp);

  const tempDecrease = document.querySelector("#decrease_temp");
  tempDecrease.addEventListener("click", decreaseTemp);

  const weatherStatus = document.querySelector("#weather_menu");
  weatherStatus.addEventListener("change", changeWeather);

  const cityNameInput = document.querySelector("#city");
  cityNameInput.addEventListener("input", updateCityName);

  const cityNameReset = document.querySelector("#reset_button");
  cityNameReset.addEventListener("click", resetCityName);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);