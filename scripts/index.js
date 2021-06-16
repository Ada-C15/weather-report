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
        weatherLandscape.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuVmlWz5y854ii4XszM6vh84lQcmq6OD7ag&usqp=CAU";
    } else if (currentTemp >= 70) {
        weatherLandscape.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4PyEvV3JoXIrS2x5p_fEtzDr3rhvfwR3MQ&usqp=CAU";
    } else if (currentTemp >= 60) {
        weatherLandscape.src = "data:image/jpeg;base64,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";
    } else if (currentTemp >= 50) {
        weatherLandscape.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzr7hFP2nd4zcjdIEt2Fr5917T-6euq-otQA&usqp=CAU";
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