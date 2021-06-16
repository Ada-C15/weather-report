const state = {
    currentTemp: 60,
};


const setTemperatureColor = (temp) => {
    const temperatureText = document.getElementById("temperatureText");
    if (temp >= 100) {
        temperatureText.style.color = "darkred";
    } else if (temp >= 80 && temp < 100) {
        temperatureText.style.color = "red";
    } else if (temp >= 70 && temp < 80) {
        temperatureText.style.color = "orange";
    } else if (temp >= 60 && temp < 70) {
        temperatureText.style.color = "yellow";
    } else if (temp >= 50 && temp < 60) {
        temperatureText.style.color = "green";
    } else if (temp > 32 && temp < 50) {
        temperatureText.style.color = "teal";
    } else if (temp <= 32) {
        temperatureText.style.color = "blue";
    }
};

const setLandscapeImage = (temp) => {
    const landscapeImage = document.getElementById("landscapeImage");
    if (temp >= 100) {
        landscapeImage.src='scorched-landscape.jpg';
    } else if (temp < 100 && temp >= 80) {
        landscapeImage.src='desert-landscape.jpg';
    } else if (temp < 80 && temp >= 70) {
        landscapeImage.src='grassy-landscape.jpg';
    } else if (temp < 70 && temp >= 55) {
        landscapeImage.src='flower-landscape.jpg';
    } else if (temp < 55 && temp >= 40) {
        landscapeImage.src='fall-landscape.jpg';
    } else {
        landscapeImage.src='snow-landscape.jpg';
    }
};

const increaseTemperature = () => {
    state.currentTemp++;
    const temperatureText = document.getElementById("temperatureText");
    temperatureText.textContent = `${state.currentTemp}`;
    setTemperatureColor(state.currentTemp);
    setLandscapeImage(state.currentTemp);
};

const decreaseTemperature = () => {
    state.currentTemp--;
    setTemperatureColor(state.currentTemp);
    setLandscapeImage(state.currentTemp);
};

const registerEventHandlers = () => {
    const increaseTempButton = document.querySelector("#increaseTemp");
    const decreaseTempButton = document.querySelector("#decreaseTemp");
    
    increaseTempButton.addEventListener("click", increaseTemperature);
    decreaseTempButton.addEventListener("click", decreaseTemperature);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);