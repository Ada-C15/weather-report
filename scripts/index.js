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
        weatherLandscape.src = "https://freepngimg.com/thumb/lizard/27295-6-lizard-transparent-background-thumb.png";
        tempValue.className = "red";
    } else if (currentTemp >= 70) {
        weatherLandscape.src = "https://freepngimg.com/thumb/chicken/17-chicken-png-image-thumb.png";
        tempValue.className = "orange";
    } else if (currentTemp >= 60) {
        weatherLandscape.src = "https://freepngimg.com/thumb/fox/10-2-fox-png-6-thumb.png";
        tempValue.className = "yellow";
    } else if (currentTemp >= 50) {
        weatherLandscape.src = "https://freepngimg.com/thumb/deer/93967-springbok-antelope-africa-vecteur-free-download-png-hq-thumb.png";
        tempValue.className = "green";
    } else if (currentTemp >= 40) {
        weatherLandscape.src = "https://freepngimg.com/thumb/polar_bear/29346-2-polar-bear-image-thumb.png";
        tempValue.className = "teal";
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
    } else if (weatherMenu === "Empty") {
        weatherIcon.src = "";
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

function toggleTheme() {
  const element = document.body;
  element.classList.toggle("light-mode");
}

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