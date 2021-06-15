// ---------------------** TEMPERATURE SECTION **----------------------
const state = {
    currentTemp: 70
};

const registerEventHandlers = () => {
    const incTempButton = document.querySelector("#increaseTemp");
    const decTempButton = document.querySelector("#decreaseTemp");
    incTempButton.addEventListener('click', increaseTemperature);
    decTempButton.addEventListener('click', decreaseTemperature);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);


const increaseTemperature = () => {
    state.currentTemp += 1;
    const tempValueElement = document.querySelector("#tempValue");
    tempValueElement.textContent = `${state.currentTemp}`;
};

const decreaseTemperature = () => {
    state.currentTemp -= 1;
    const tempValueElement = document.querySelector("#tempValue");
    tempValueElement.textContent = `${state.currentTemp}`;
};