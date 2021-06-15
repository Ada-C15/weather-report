const state = {
    temperature: 45,
}

const updateTemperature = () => {
    state.temperature += 1
    const temperatureElement = document.querySelector("#currentTemp")
    temperatureElement.textContent = `${state.temperature}`
}
const downTemperature = () => {
    state.temperature -= 1;
    const temperatureElement = document.querySelector("#currentTemp")
    temperatureElement.textContent = `${state.temperature}`

}

const registerEventHandlers = () => {
    const upTemperatureButton = document.querySelector("#upTemperature");
    upTemperatureButton.addEventListener("click", updateTemperature)
    const downTemperatureButton = document.querySelector("#downTemperature");
    downTemperatureButton.addEventListener('click', downTemperature)

}

document.addEventListener("DOMContentLoaded", registerEventHandlers);