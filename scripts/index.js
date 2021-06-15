const state = {
    currentTemp: 65
};

const addTemp = (event) => {
    state.currentTemp += 1;
    const temperatureCountContainer = document.querySelector("#temperatureCount")
    temperatureCountContainer.textContent = `Temperature ${state.currentTemp}℉`;
};
const subtractTemp = (event) => {
    state.currentTemp -= 1;
    const temperatureCountContainer = document.querySelector("#temperatureCount")
    temperatureCountContainer.textContent = `Temperature ${state.currentTemp}℉`;
};

const registerEventHandlers = (event) => {
    const addTemperatureButton = document.querySelector("#addTemperatureButton");
    addTemperatureButton.addEventListener("click", addTemp);

    const subtractTemperatureButton = document.querySelector("#subtractTemperatureButton");
    subtractTemperatureButton.addEventListener("click", subtractTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);