// default variable for temperature--used as parameter in several functions
let currentTemp = 67;
let isCelsius = false;

// helper function to be used when increasing/decreasing temperature
// currentTemp "shadows" currentTemp global variable
const updateTemperature = currentTemp => {
    const tempContainer = document.getElementById("temp-integer");
    tempContainer.textContent = currentTemp;
    changeTempColor(currentTemp);
    changeLandscape(currentTemp);
};

// converts temp to celsius or fahrenheit
// Math.floor creates a slight issue where temp continues to decrease when converted
const convertTemp = () => {
    const tempConvertBtn = document.getElementById("temp-converter-button");
    if (isCelsius === true) {
        currentTemp = Math.floor((currentTemp * 9/5) + 32);
        isCelsius = false;
        tempConvertBtn.textContent = "Celsius"
        updateTemperature(currentTemp);
    }
    else if (isCelsius === false) {
        currentTemp = Math.floor((currentTemp - 32) * 5/9);
        isCelsius = true;
        tempConvertBtn.textContent = "Fahrenheit"
        updateTemperature(currentTemp);
    }
};

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
// the logic here could be greatly improved if I made one temp variable that is
// the "true" temp in the background, and one temp variable that is "visible"
// to the user based on how they've converted the temp
// not sure exactly how I would implement this, though!
const changeTempColor = currentTemp => {
    const tempContent = document.getElementById("temp-content");
    let color = "yellow";
    if (currentTemp > 80) {
        color = "red";
    } else if ((currentTemp >= 70 && isCelsius === false) ||
    (currentTemp >= 21 && isCelsius === true)) {
        color = "orange";
    } else if ((currentTemp >= 60 && isCelsius === false) ||
    (currentTemp >= 15 && isCelsius === true)) {
        color = "yellow";
    } else if ((currentTemp >= 50 && isCelsius === false) ||
    (currentTemp >= 10 && isCelsius === true)) {
        color = "green";
    } else if ((currentTemp < 50 && isCelsius === false) ||
    (currentTemp < 10 && isCelsius === true)) {
        color = "teal";
    }
    tempContent.classList = color;
};

// changes landscape emojis based on the current temperature range
// logic could also be improved here in a similar way to the previous function
const changeLandscape = currentTemp => {
    const landscapeContainer = document.getElementById("landscape");
    let landscape = "";
    if (currentTemp === 99) {
        //Kim and her 99 red baloons in 99 degree Highland Park
        landscape = "🎈🎈🎈🎈🎈🎈👩🏻🎈🎈🎈🎈🎈🎈"
    } else if ((currentTemp >= 80 && isCelsius === false) ||
    (currentTemp >= 26 && isCelsius === true)) {
        landscape = "🌵🌋🐍🌋🦂🌵🐕🌵🐍🌵🌋🏜🦂"
    } else if ((currentTemp >= 70 && isCelsius === false) ||
    (currentTemp >= 21 && isCelsius === true)) {
        landscape = "🌸🌿🌼🌷🌸🌻🐕☘️🌱🌻🌷🌸"
    } else if ((currentTemp >= 60 && isCelsius === false) ||
    (currentTemp >= 15 && isCelsius === true)) {
        landscape = "🍃🌾🌾🍃🪨🍃🪨🐕🪨🌾🌾🍃🪨"
    } else if ((currentTemp >= 50 && isCelsius === false) ||
    (currentTemp >= 10 && isCelsius === true)) {
        landscape = "🍂🌲🌲🍁🌲🍂🐕🍁🌲🌲🍂🌲🍁"
    } else if ((currentTemp < 50 && isCelsius === false) ||
    (currentTemp < 10 && isCelsius === true)) {
        landscape = "❄️☃️🏔⛄️🏔❄️🐕🏔❄️☃️🏔⛄️❄️❄️"
    }
    landscapeContainer.textContent = landscape;
};

// changes sky emojis to match the changed input in the dropdown menu
const changeSky = () => {
    const skyDropdown = document.getElementById("sky-dropdown").value;
    const skyForecast = document.getElementById("sky");
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

    const tempConvertBtn = document.getElementById("temp-converter-button");
    tempConvertBtn.addEventListener("click", convertTemp);

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
