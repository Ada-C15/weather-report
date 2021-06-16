let tempValue = 70;

const updateTemp = tempValue => {
    const tempValueElement = document.getElementById("tempValue");
    tempValueElement.textContent = tempValue;
    updateTempColors(tempValue);
    updateLandscape(tempValue);
};

const updateTempColors = (currTemp) => {
    const tempValueElement = document.getElementById("tempValue");
    let color = "teal";
    if (currTemp >= 80) {
        color = "red";
    } else if (currTemp >= 70) {
        color = "orange";
    } else if (currTemp >= 60) {
        color = "yellow";
    } else if (currTemp >= 50) {
        color = "green";
    }
    tempValueElement.classList = color;
};

const increaseTemp = () => {
    tempValue++;
    updateTemp(tempValue);
};

const decreaseTemp = () => {
    tempValue--;
    updateTemp(tempValue);
};

const updateSky = () => {
    const inputSky = document.getElementById("skySelection").value;
    const sky = document.getElementById("sky");
    let skyDisplay = "";
    let skyColor = "";
    if (inputSky === "Cloudy") {
        skyDisplay = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
        skyColor = "cloudy";
    } else if (inputSky === "Sunny") {
        skyDisplay = "☁️     ☁️   ☁️ ☀️ ☁️  ☁️";
        skyColor = "sunny";
    } else if (inputSky === "Rainy") {
        skyDisplay = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
        skyColor = "rainy";
    } else if (inputSky === "Snowy") {
        skyDisplay = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
        skyColor = "snowy";
    }
    sky.textContent = skyDisplay;
    const gardenBox = document.getElementsByClassName("gardenBox")[0];
    gardenBox.classList = `gardenBox ${skyColor}`;
};

const updateCity = () => {
    const cityName = document.getElementById("cityName").value;
    const cityNameHeader = document.getElementById("cityNameHeader");
    cityNameHeader.textContent = cityName;
};

const resetCity = () => {
    const cityName = document.getElementById("cityName");
    const cityNameHeader = document.getElementById("cityNameHeader");
    cityName.value = "Seattle";
    cityNameHeader.textContent = cityName;
};

const updateLandscape = (currTemp) => {
    const landscape = document.getElementById("landscape");
    let landscapeDisplay = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    if (currTemp >= 80) {
        landscapeDisplay = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (currTemp >= 70) {
        landscapeDisplay = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (currTemp >= 60) {
        landscapeDisplay = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    }
    landscape.textContent = landscapeDisplay;
};

const registerEventHandlers = () => {
    updateTemp(tempValue);
    const increaseTempButton = document.getElementById("increaseTempButton");
    increaseTempButton.addEventListener("click", increaseTemp);
    const decreaseTempButton = document.getElementById("decreaseTempButton");
    decreaseTempButton.addEventListener("click", decreaseTemp);

    updateSky();
    const skySelection = document.getElementById("skySelection");
    skySelection.addEventListener("change", updateSky);

    updateCity();
    const cityName = document.getElementById("cityName");
    cityName.addEventListener("input", updateCity);
    const cityResetButton = document.getElementById("cityResetButton");
    cityResetButton.addEventListener("click", resetCity);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);


