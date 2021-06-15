let currentTemp = 67;

// helper function to be used when increasing/decreasing temp
const updateTemperature = currentTemp => {
    const tempValue = document.getElementById("temp-integer");
    tempValue.textContent = currentTemp;
}

// increases temperature
const increaseTemperature = () => {
    currentTemp += 1;
    updateTemperature(currentTemp);
};

const decreaseTemperature = () => {
    currentTemp -= 1;
    updateTemperature(currentTemp);
};

// const changeTempColor = (currentTemp)

const changeSky = () => {
    const skyDropdown = document.getElementById("sky-dropdown").value;
    const skyForecast = document.getElementById("sky");
    // why do we make this variable rather than just use skyForecast and manipulate that directly?
    let sky = "☁️ ☁️ ☁️ ☀ ☁️ ☁️";
    let skyColor = "";
    if (skyDropdown === "Sunny") {
        sky = "☁️ ☁️ ☁️ ☀ ☁️ ☁️"
        // skyColor = "sunny";
    }
    else if (skyDropdown === "Cloudy") {
        sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️"
    }
    else if (skyDropdown === "Rainy") {
        sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
    }
    else if (skyDropdown === "Snowy") {
        sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    }
    skyForecast.textContent = sky;
    // const weatherContent = document.getElementById("weather-content");
    // weatherContent.classList = `weather__content ${skyColor}`;
};

// updates header with city name input
const updateCityName = () => {
    const inputCityName = document.getElementById("city").value;
    const cityNameHeader = document.getElementById("city-name");
    cityNameHeader.textContent = inputCityName;
};

// resets city name in header to Dogeville
const resetCityName = () => {
    const cityNameInput = document.getElementById("city");
    cityNameInput.value = "Dogeville";
    updateCityName();
};

const registerEventHandlers = () => {
    increaseTemperature();
    const tempIncreaseBtn = document.getElementById("increase-temp");
    tempIncreaseBtn.addEventListener("click", increaseTemperature);

    decreaseTemperature();
    const tempDecreaseBtn = document.getElementById("decrease-temp");
    tempDecreaseBtn.addEventListener("click", decreaseTemperature);

    changeSky();
    const skyDropdown = document.getElementById("sky-dropdown");
    skyDropdown.addEventListener("change", changeSky);

    updateCityName();
    const inputCityName = document.getElementById("city");
    inputCityName.addEventListener("input", updateCityName);

    resetCityName();
    const cityNameResetBtn = document.getElementById("reset-button");
    cityNameResetBtn.addEventListener("click", resetCityName);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
