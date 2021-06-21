let tempValue = 80;

const updateSky = () => {
    const changeSky = document.getElementById("skySelect").value;
    const skyContainer = document.getElementById("sky");
    let sky = "";
    let skyColor = "";
    if (changeSky === "Cloudy") {
        sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
        skyColor = "cloudy";
    } else if (changeSky === "Sunny") {
        sky = "☁️     ☁️   ☁️ ☀️ ☁️  ☁️";
        skyColor = "sunny";
    } else if (changeSky === "Rainy") {
        sky = "🌧🌈☔🐱🐶💧☔🐱🐶🌧⚡️⛈🌧";
        skyColor = "rainy";
    } else if (changeSky === "Snowy") {
        sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
        skyColor = "snowy";
    }
    skyContainer.textContent = sky;
    const gardenContent = document.getElementById("gardenContent");
    gardenContent.classList = `garden_content ${skyColor}`;
};

const updateCityName = () => {
    const inputName = document.getElementById("cityNameInput").value;
    const headerCityName = document.getElementById("headerCityName");
    headerCityName.textContent = inputName;
};

const resetCityName = () => {
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.value = "New York City";
    updateCityName();
};

const updateTempColors = (currentTemp) => {
    const tempValueContainer = document.getElementById("tempValue");
    let color = "teal";
    if ( currentTemp >= 80) {
        color = "red";
    } else if (currentTemp >= 70) {
        color = "orange";
    } else if (currentTemp >= 60) {
        color = "yellow";
    } else if (currentTemp >= 50) {
        color = "green";
    }
    tempValueContainer.classList = color;
}

const updateGarden = (currentTemp) => {
    const landscapeContainer = document.getElementById("landscape");
    let landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    if ( currentTemp >= 80) {
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (currentTemp >= 70) {
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (currentTemp >= 60) {
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    }
    landscapeContainer.textContent = landscape;
}

const updateTemp = tempValue => {
    const tempValueContainer = document.getElementById("tempValue");
    tempValueContainer.textContent = tempValue;
    updateTempColors(tempValue);
    updateGarden(tempValue);
}

const increaseTemp = () => {
    tempValue += 1;
    updateTemp(tempValue);
};

const decreaseTemp = () => {
    tempValue -= 1;
    updateTemp(tempValue);
};

const registerEventHandlers = () => {
    updateTemp(tempValue);

    const increaseTempControl = document.getElementById("increaseTempControl");
    increaseTempControl.addEventListener("click", increaseTemp);
    
    const decreaseTempControl = document.getElementById("decreaseTempControl");
    decreaseTempControl.addEventListener("click", decreaseTemp);

    updateCityName();
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.addEventListener("input", updateCityName);

    const cityNameResetBtn = document.getElementById("cityNameReset");
    cityNameResetBtn.addEventListener("click", resetCityName);

    updateSky();
    const skySelect = document.getElementById("skySelect");
    skySelect.addEventListener("change", updateSky);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

