let tempValue = 65;

const nightBackground = () => {
    let body = document.body;
    body.classList.toggle("night");
};

const updateSky = () => {
    const inputSky = document.getElementById("skyOptions").value;
    const skyContainer = document.getElementById("sky");
    let sky = "";
    let skyColor = "";
    if (inputSky === "Cloudy") {
        sky = "☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️";
        skyColor = "cloudy";
    } else if (inputSky === "Sunny") {
        sky = "✨🌈✨🌞✨🌈✨";
        skyColor = "sunny";
    } else if (inputSky === "Rainy") {
        sky = "🌧🌧🌧🌧🌧🌦🌧🌧🌧🌧";
        skyColor = "rainy";
    } else if (inputSky === "Snowy") {
        sky = "🌨🌨🌨🌨🌨🌨🌨🌨🌨";
        skyColor = "snowy";
    } else if (inputSky === "Fog") {
        sky = "🌫🌫🌫🌫🌫🌫🌫";
        skyColor = "fog";
    } else if (inputSky === "Windy") {
        sky = "🌬💨💨💨🌞💨💨🌬💨";
        skyColor = "windy";
    }
    
    skyContainer.textContent = sky;
    const groundContent = document.getElementById("groundContent");
    groundContent.classList = `ground__content ${skyColor}`;
};

const updateCityName = () => {
    const inputName = document.getElementById("newCityInput").value;
    const headerCityName = document.getElementById("headerCityName");
    headerCityName.textContent = inputName;
};

const resetCityName = () => {
    const cityNameInput = document.getElementById("newCityInput");
    cityNameInput.value = "Seattle";
    updateCityName();
};

const updateTemperatureFormat = (currentTemp) => {
    const tempValueContainer = document.getElementById("tempValue");
    let color = "cold";
    if (currentTemp >= 80) {
        color = "hot";
    } else if (currentTemp >= 70) {
        color = "warm";
    } else if (currentTemp >= 60) {
        color = "comfortable";
    } else if (currentTemp >= 50) {
        color = "cool";
    }
    tempValueContainer.classList = color;
}

const updateOutsideWeather = (currentTemp) => {
    const groundContainer = document.getElementById("ground");
    let ground = "☃️❄️🌲🧊☕️🧊🌲❄️☃️";
    if (currentTemp >= 80) {
        ground = "🏖🧋🧉🍓🍉🍧🍨🧉🧋🏖";
    } else if (currentTemp >= 70) {
        ground = "🌸🌷🌼🍣🍹🥙🌼🌷🌸";
    } else if (currentTemp >= 60) {
        ground = "🍃🌳🌿🥧🫕🥘🌿🌳🍃";
    } else if (currentTemp >= 50){
        ground = "🍂🍁🍎🌽🍵🌽🍎🍁🍂"
    }
    groundContainer.textContent = ground;
}

const updateTemp = tempValue => {
    const tempValueContainer = document.getElementById("tempValue");
    tempValueContainer.textContent = tempValue;
    updateTemperatureFormat(tempValue);
    updateOutsideWeather(tempValue);
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

    const nightButton = document.getElementById("night");
    nightButton.addEventListener("click", nightBackground);
    
    updateTemp(tempValue);
    const increaseTempControl = document.getElementById("increaseTempControl");
    increaseTempControl.addEventListener("click", increaseTemp);
    
    const decreaseTempControl = document.getElementById("decreaseTempControl");
    decreaseTempControl.addEventListener("click", decreaseTemp);

    updateCityName();
    const cityNameInput = document.getElementById("newCityInput");
    cityNameInput.addEventListener("input", updateCityName);
    
    const cityNameResetBtn = document.getElementById("newCityReset");
    cityNameResetBtn.addEventListener("click", resetCityName);

    
    updateSky();
    const skySelect = document.getElementById("skyOptions");
    skySelect.addEventListener("change", updateSky);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
