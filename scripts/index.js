const state = {
    temperatureDegrees: 68
};



// increase temperature function 
const increaseTemperature = (event) => {
    state.temperatureDegrees += 1;
    const temperatureDegreesContainer = document.querySelector("#temperatureDegrees");
    temperatureDegreesContainer.textContent = `Temperature Degrees: ${state.temperatureDegrees}`;
    changeTemperatureTextColor()
    changeLandscapeEmojis()
};

// decrease temperature function
const decreaseTemperature = (event) => {
    state.temperatureDegrees -= 1;
    const temperatureDegreesContainer = document.querySelector("#temperatureDegrees");
    temperatureDegreesContainer.textContent = `Temperature Degrees: ${state.temperatureDegrees}`;
    changeTemperatureTextColor()
    changeLandscapeEmojis()
};

// reset temperature and city function 
const resetTemperature = (event) => {
    state.temperatureDegrees = 68;
    document.getElementById("cityPhrase").textContent = `Beautiful city weather`;
    const temperatureDegreesContainer = document.querySelector("#temperatureDegrees");
    temperatureDegreesContainer.textContent = `Temperature Degrees: ${state.temperatureDegrees}`;
    changeTemperatureTextColor()
    changeLandscapeEmojis()
};

// change temperature text color function
const changeTemperatureTextColor = (event) => {
    if (state.temperatureDegrees >= 70) {
        document.getElementById("temperatureDegrees").style.color = "red";
    } else if (state.temperatureDegrees <= 69 && state.temperatureDegrees >= 60) {
        document.getElementById("temperatureDegrees").style.color = "orange";
    } else if (state.temperatureDegrees <= 59 && state.temperatureDegrees >= 50) {
        document.getElementById("temperatureDegrees").style.color = "yellow";
    } else if (state.temperatureDegrees <= 49 && state.temperatureDegrees >= 40) {
        document.getElementById("temperatureDegrees").style.color = "green";
    } else if (state.temperatureDegrees <= 39) {
        document.getElementById("temperatureDegrees").style.color = "blue";
    }
};

// change landscape emojis function
const changeLandscapeEmojis = (event) => {
    if (state.temperatureDegrees >= 70) {
        document.getElementById("landscapeEmojis").textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.temperatureDegrees <= 69 && state.temperatureDegrees >= 60) {
        document.getElementById("landscapeEmojis").textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (state.temperatureDegrees <= 59 && state.temperatureDegrees >= 50) {
        document.getElementById("landscapeEmojis").textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (state.temperatureDegrees <= 49) {
        document.getElementById("landscapeEmojis").textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
}

// change sky emojis function
const changeSkyEmojis = (event) => {
    const chosenSky = document.getElementById("skyEmojis").value; 
    if (chosenSky === "Sunny") {
        document.getElementById("chosenSkyEmojis").textContent = "☁️ ☁️ ☁️ ☀️ ☀️ ☀️ ☀️ ☁️ ☁️";
    } else if (chosenSky === "Cloudy") {
        document.getElementById("chosenSkyEmojis").textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    } else if (chosenSky === "Rainy") {
        document.getElementById("chosenSkyEmojis").textContent = "🌧🌈⛈🌧💧⛈🌧🌦🌧💧🌧";
    } else if (chosenSky === "Snowy") {
        document.getElementById("chosenSkyEmojis").textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    }
}


// change city name function
const changeCityName = (event) => {
    const chosenCityName = document.getElementById("cityName").value;
    document.getElementById("cityPhrase").textContent = `Beautiful ${chosenCityName} weather`;
}


// event handlers
const registerEventHandlers = (event) => {
    const increaseButton = document.querySelector("#addIncreaseTemperatureButton");
    increaseButton.addEventListener("click", increaseTemperature);

    const decreaseButton = document.querySelector("#addDecreaseTemperatureButton");
    decreaseButton.addEventListener("click", decreaseTemperature);

    const resetButton = document.querySelector("#addResetButton");
    resetButton.addEventListener("click", resetTemperature);

    const skyEmojis = document.getElementById("skyEmojis");
    skyEmojis.addEventListener("change", changeSkyEmojis)

    const renameCity = document.getElementById("cityName");
    renameCity.addEventListener("change", changeCityName)

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);