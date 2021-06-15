let currentTemp = 67;

// helper function to be used when increasing/decreasing temp
const updateTemperature = currentTemp => {
    const tempValue = document.getElementById("temp-integer");
    tempValue.textContent = currentTemp;
    changeTempColor(currentTemp);
    changeLandscape(currentTemp);
}

// increases temperature by 1
const increaseTemperature = () => {
    currentTemp += 1;
    updateTemperature(currentTemp);
};

// decreases the temp by 1
const decreaseTemperature = () => {
    currentTemp -= 1;
    updateTemperature(currentTemp);
};

// changes the font color of the temperature based on how hot or cold it is
const changeTempColor = currentTemp => {
    // const tempValue = document.getElementById("temp-integer");
    let color = "";
    if (currentTemp > 80) {
        color = "red"
    } else if (currentTemp >= 70) {
        color = "orange"
    } else if (currentTemp >= 60) {
        color = "yellow"
    } else if (currentTemp >= 50) {
        color = "green"
    } else if (currentTemp < 50) {
        color = "teal"
    }
    currentTemp.classList = color;
}

const changeLandscape = currentTemp => {
    const landscapeContainer = document.getElementById("landscape");
    let landscape = "";
    if (currentTemp >= 80) {
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    } else if (currentTemp >= 70) {
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    } else if (currentTemp >= 60) {
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    } else if (currentTemp < 60) {
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    }
    landscapeContainer.textContent = landscape;
}

const changeSky = () => {
    const skyDropdown = document.getElementById("sky-dropdown").value;
    const skyForecast = document.getElementById("sky");
    // why do we make this variable rather than just use skyForecast and manipulate that directly?
    let sky = "";
    let skyColor = "";
    if (skyDropdown === "Sunny") {
        sky = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
        // why do these need to be added as classes in CSS?
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
