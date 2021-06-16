console.log("fingers crossed it's sunny")

let temperatureValue = 70;

// sky block functions

const updateSky = () => {
    const inputSky = document.getElementById("sky-options").value;
    const skyContainer = document.getElementById("sky-art");
    let skyArt = "🔆☀️🌞🌤️⛅🌥️🌦️";
    if (inputSky == "sunny") {
        skyArt = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    } else if (inputSky == "cloudy") {
        skyArt = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    } else if (inputSky == "rainy") {
        skyArt = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else if (inputSky == "snowy") {
        skyArt = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    } else {
        skyArt = "🔆☀️🌞";
    }
    skyContainer.textContent = skyArt;
    console.log("ahhhhhhhhhh")
};


const updateGarden = (currentTemperature) => {
    const landArtContainer = document.getElementById("land-art");
    let landArt = "🌲🌲🌲";
    if (currentTemperature >= 80) {
        landArt = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (currentTemperature >= 70) {
        landArt = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (currentTemperature >= 60) {
        landArt = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (currentTemperature >= 50) {
        landArt = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    } else {
        landArt = "🌲";
    }
    landArtContainer.textContent = landArt;
};

// temperature block functions

const updateTemperatureColors = (currentTemperature) => {
    const temperatureValueContainer = document.getElementById("temperature-value");
    let color = "black";
    if (currentTemperature >= 80) {
        color = "red";
    } else if (currentTemperature >= 70) {
        color = "orange";
    } else if (currentTemperature >= 60) {
        color = "yellow";
    } else if (currentTemperature >= 50) {
        color = "green";
    } else {
        color = "teal";
    }
    temperatureValueContainer.classList = color;
};

const updateTemperature = temperatureValue => {
    const temperatureValueContainer = document.getElementById("temperature-value");
    temperatureValueContainer.textContent = temperatureValue;
    updateTemperatureColors(temperatureValue);
    // add garden to temp value since it's connected
    updateGarden(temperatureValue);
};

const increaseTemperature = () => {
    temperatureValue += 1;
    updateTemperature(temperatureValue);
};

const decreaseTemperature = () => {
    temperatureValue -= 1;
    updateTemperature(temperatureValue);
};

// city name block functions

const updateCityName = () => {
    const inputName = document.getElementById("city-name-bar").value;
    const headerCityName = document.getElementById("header-city-name");
    headerCityName.textContent = inputName;
    console.log("hello is anyone there")
};

const resetCityName = () => {
    const cityNameInput = document.getElementById("city-name-bar");
    cityNameInput.value = "Seattle";
    updateCityName();
};

// registerEventHandlers

const registerEventHandlers = () => {

    updateTemperature(temperatureValue);

    const upButton = document.getElementById("increase-temp-bttn");
    upButton.addEventListener("click", increaseTemperature);


    const downButton = document.getElementById("decrease-temp-bttn");
    downButton.addEventListener("click", decreaseTemperature);

    const skyDropdown = document.getElementById("sky-options");
    skyDropdown.addEventListener("change", updateSky);
    
    const cityNameInput = document.getElementById("city-name-bar");
    cityNameInput.addEventListener("keyup", updateCityName);

    const cityNameResetButton = document.getElementById("reset-button");
    cityNameResetButton.addEventListener("click", resetCityName);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
