const state = {
    temperature: 70
};

const addTemperature = () => {
    state.temperature += 1;
    const tempValue = document.querySelector("#temp-value");
    tempValue.textContent = `${state.temperature}`;
    changeTempColor(state.temperature);
    changeSkyView(state.temperature);
};

const reduceTemperature = () => {
    state.temperature -= 1;
    const tempValue = document.querySelector("#temp-value");
    tempValue.textContent = `${state.temperature}`;
    changeTempColor(state.temperature);
    changeSkyView(state.temperature);
};

const changeTempColor = (currentTemp) => {
    const tempValue = document.querySelector("#temp-value");
    if (currentTemp >= 80) {
        tempValue.style.color = "red";
    } else if (currentTemp >= 70) {
        tempValue.style.color = "orange"
    } else if (currentTemp >= 60){
        tempValue.style.color = "yellow"
    } else if (currentTemp >= 50){
        tempValue.style.color = "green"
    } else {
        tempValue.style.color = "teal"
    };
};

const changeSkyView = (currentTemp) => {
    const groundView = document.querySelector("#ground-view");
    if (currentTemp >= 80) {
        groundView.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    } else if (currentTemp >= 70) {
        groundView.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    } else if (currentTemp >= 60){
        groundView.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    } else {
        groundView.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    };
};

// helper function to change garden background color
const changeGradenBackground = () => {
    const weatherChoice = document.querySelector("#weather-choice").value;
    const gardenView = document.querySelector("#garden-view");
    if (weatherChoice === "Sunny") {
        gardenView.style.backgroundColor = "lightskyblue";
    } else if (weatherChoice === "Cloudy") {
        gardenView.style.backgroundColor = "lightgrey";
    } else if (weatherChoice === "Rainy") {
        gardenView.style.backgroundColor = "darkgrey";
    } else if (weatherChoice === "Snowy") {
        gardenView.style.backgroundColor = "ivory";
    };
};

const changeWeatherChoice = () => {
    const weatherChoice = document.querySelector("#weather-choice").value;
    const skyView = document.querySelector("#sky-view"); 
    if (weatherChoice === "Sunny") {
        skyView.textContent = "☁️ ☁️☁️ ☁️ 🍃 ☁️☀️ 🍃☁️ ☁️ 🍃☁️"
    } else if (weatherChoice === "Cloudy") {
        skyView.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️☁️ ☁️"
    } else if (weatherChoice === "Rainy") {
        skyView.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧⛈"
    } else if (weatherChoice === "Snowy") {
        skyView.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨❄️"
    };
    changeGradenBackground();
};

const changeBackground = () => {
    let body = document.body;
    body.classList.toggle("night");
};

const updateCityName = (event) => {
    const cityNameInput = event.target.value;
    updateHeader(cityNameInput);
};

const resetCityName = () => {
    const cityNameInput = document.querySelector("#city-name-input");
    cityNameInput.value = "";
    updateHeader("");
};

// helper function to update city name in header
const updateHeader = (cityNameInput) => {
    const cityNameHeader = document.querySelector("#city-name-header");
    cityNameHeader.textContent = cityNameInput;
};

const init = () => {
    changeTempColor(state.temperature);
    changeSkyView(state.temperature);
    changeWeatherChoice();
    registerEventHandlers();
    changeGradenBackground();
};

const registerEventHandlers = () => {   
    const darkModeButton = document.querySelector("#dark-mode");
    darkModeButton.addEventListener("click", changeBackground);

    const cityNameInput = document.querySelector("#city-name-input");
    cityNameInput.addEventListener("input", updateCityName);

    const resetCityNameButton = document.querySelector("#city-name-reset");
    resetCityNameButton.addEventListener("click", resetCityName);

    const addTempButton = document.querySelector("#add-temp-button");
    addTempButton.addEventListener("click", addTemperature);

    const reduceTempButton = document.querySelector("#reduce-temp-button");
    reduceTempButton.addEventListener("click", reduceTemperature);

    const weatherChoice = document.querySelector("#weather-choice");
    weatherChoice.addEventListener("change", changeWeatherChoice);
};

document.addEventListener("DOMContentLoaded", init);