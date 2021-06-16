// default variable for temperature--used as parameter in several functions
let currentTemp = 67;

// helper function to be used when increasing/decreasing temperature
const updateTemperature = currentTemp => {
    // is this because we need to grab the "temp-integer" from my HTML in order
    // to set it to currentTemp?
    const tempContainer = document.getElementById("temp-integer");
    tempContainer.textContent = currentTemp;
    changeTempColor(currentTemp);
    changeLandscape(currentTemp);
}

// why do these need to be separate funcitons from updateTemperature()?
// increases temperature by 1
const increaseTemperature = () => {
    currentTemp += 1;
    updateTemperature(currentTemp);
};

// decreases temperature by 1
const decreaseTemperature = () => {
    currentTemp -= 1;
    updateTemperature(currentTemp);
};

// changes the font color of the temperature based on how hot or cold it is
const changeTempColor = currentTemp => {
    const tempContent = document.getElementById("temp-content");
    let color = "yellow";
    if (currentTemp > 80) {
        color = "red";
    } else if (currentTemp >= 70) {
        color = "orange";
    } else if (currentTemp >= 60) {
        color = "yellow";
    } else if (currentTemp >= 50) {
        color = "green";
    } else if (currentTemp < 50) {
        color = "teal";
    }
    tempContent.classList = color;
}

// changes landscape emojis based on the current temperature range
const changeLandscape = currentTemp => {
    const landscapeContainer = document.getElementById("landscape");
    let landscape = "";
    if (currentTemp === 99) {
        //Kim and her 99 red baloons in 99 degree Highland Park
        landscape = "🎈🎈🎈🎈🎈🎈👩🏻🎈🎈🎈🎈🎈🎈"
    } else if (currentTemp >= 80) {
        landscape = "🌵🌋🐍🌋🦂🌵🌵🐍🌵🌋🏜🦂"
    } else if (currentTemp >= 70) {
        landscape = "🌸🌿🌼🌷🌸🌻🌿☘️🌱🌻🌷🌸"
    } else if (currentTemp >= 60) {
        landscape = "🍃🌾🌾🍃🪨🍃🪨🛤🪨🌾🌾🍃🪨"
    } else if (currentTemp >= 50) {
        landscape = "🍂🌲🌲🍁🌲🍂🌲🍁🌲🌲🍂🌲🍁"
    } else if (currentTemp < 50) {
        landscape = "❄️☃️🏔⛄️🏔❄️☃️🏔❄️☃️🏔⛄️❄️❄️"
    }
    landscapeContainer.textContent = landscape;
}

// changes sky emojis to match the changed input in the dropdown menu
const changeSky = () => {
    const skyDropdown = document.getElementById("sky-dropdown").value;
    const skyForecast = document.getElementById("sky");
    // could we forego this variable and just use skyForecast.textContent?
    let sky = "";
    if (skyDropdown === "Sunny") {
        sky = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
    } else if (skyDropdown === "Cloudy") {
        sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️"
    } else if (skyDropdown === "Rainy") {
        sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
    } else if (skyDropdown === "Snowy") {
        sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    }
    skyForecast.textContent = sky;
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

// event handler registration
// these are only for things that "happen" on the page
// we are telling JS to listen for a certain event to happen to a certain item,
// and then what to do with that item
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
