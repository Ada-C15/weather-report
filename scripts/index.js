let currentTemp = 67;

// increases temperature
const increaseTemperature = () => {
    const currentTemp = document.getElementById("temp-integer");
    currentTemp.value += 1;
}

const decreaseTemperature = () => {
    const currentTemp = document.getElementById("temp-integer");
    currentTemp.value += 1;
}

// const changeTempColor = (currentTemp)

const changeSky = () => {
    const weatherDropdown = document.getElementById("weather-dropdown").value;
    const skyForecast = document.getElementById("sky");
    if weatherDropdown === "Sunny" {
        skyForecast = "☁️ ☁️ ☁️ ☀ ☁️ ☁️";
    }
    else if weatherDropdown === "Cloudy" {
        skyForecast = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁";️
    }
    else if weatherDropdown === "Rainy" {
        skyForecast = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    }
    else if weatherDropdown === "Snowy" {
        skyForecast = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    }
    // skyForecast.textContent = sky;
}

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
    const inputSkyStatus = document.getElementById("weather-dropdown");
    inputSkyStatus.addEventListener("change", changeSky);

    updateCityName();
    const inputCityName = document.getElementById("city");
    inputCityName.addEventListener("input", updateCityName);

    resetCityName();
    const cityNameResetBtn = document.getElementById("reset-button");
    cityNameResetBtn.addEventListener("click", resetCityName);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);
