const state = {
    "temperature": 80,
    "sky": "sunny",
    "landscape": null,
    "cityName": null,
};

const changeColorTemperatureRange = () => {
    var temperatureDisplay = document.querySelector("#current-temp");
    if (state.temperature <= 49) {
        temperatureDisplay.className = "temp-teal";
    } else if (state.temperature >= 80) {
        temperatureDisplay.className = "temp-red";
    } else if (state.temperature >= 70) {
        temperatureDisplay.className = "temp-orange";
    } else if (state.temperature >= 60) {
        temperatureDisplay.className = "temp-yellow";
    } else if (state.temperature >= 50) {
        temperatureDisplay.className = "temp-green";
    }
};

const setLandscape = () => {
    const landscapeDisplay = document.querySelector("#landscape");
    if (state.temperature >= 80) {
        landscapeDisplay.textContent = "🌵  🐍 🦂 🌵🌵  🐍 🏜 🦂";
    } else if (state.temperature >= 70) {
        landscapeDisplay.textContent = "🌸🌿🌼  🌷🌻🌿 ☘️🌱 🌻🌷";
    } else if (state.temperature >= 60) {
        landscapeDisplay.textContent = "🌾🌾 🍃 🪨  🛤 🌾🌾🌾 🍃";
    } else {
        landscapeDisplay.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
};

const setSky = (event) => {

    const skyDisplay = document.querySelector("#sky");
    const userSelection = event.target.value;

    if (userSelection === "cloudy") {
        skyDisplay.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    } else if (userSelection === "sunny") {
        skyDisplay.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    } else if (userSelection === "rainy") {
        skyDisplay.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else if (userSelection === "snowy") {
        skyDisplay.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    }
};

const setNewCityName = () => {
    const userInputCityName = document.querySelector("#input-city-name").value;
    state.cityName = userInputCityName;
    const cityContainer = document.querySelector("#page-header");
    cityContainer.textContent = `Weather report: ${state.cityName}`;
};

const resetCityName = () => {
    const userInputCityName = document.querySelector("#input-city-name");
    userInputCityName.value = "";
    setNewCityName();
};

const updateTemperature = (event) => {
    console.log("in updateTemperature:", event);
    const temperatureDisplay = document.querySelector("#current-temp");
    temperatureDisplay.textContent = state.temperature;
    changeColorTemperatureRange();
    setLandscape();
};

const increaseTemperature = (event) => {
    console.log("in increaseTemperature:", event);
    state.temperature += 1;
    updateTemperature();
};

const decreaseTemperature = (event) => {
    console.log("in decreaseTemperature:", event);
    state.temperature -= 1
    updateTemperature();
};

const registerEventHandlers = (event) => {
    console.log("in registerEventHandlers: ", event);
    updateTemperature(state.temperature);

    const increaseTemperatureButton = document.querySelector("#increase-temp");
    increaseTemperatureButton.addEventListener("click", increaseTemperature);

    const decreaseTemperatureButton = document.querySelector("#decrease-temp");
    decreaseTemperatureButton.addEventListener("click", decreaseTemperature);

    const updateSky = document.querySelector("#sky-options");
    updateSky.addEventListener("change", setSky);

    setNewCityName();
    const updateCityName = document.querySelector("#input-city-name");
    updateCityName.addEventListener("input", setNewCityName);

    const resetButton = document.querySelector("#reset-city-name");
    resetButton.addEventListener("click", resetCityName);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);