const state = {
    temperature: 45,
    city: "Seattle",
    cityButton: "Submit"
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

const updateCity = () => {
    const userCity = document.querySelector("#userCity").value;
    state.city=`${userCity}`;
    const cityElement = document.querySelector("#defaultCity");
    cityElement.textContent = `How is the weather today in ${state.city}?`;
    state.cityButton = "Reset"
    const cityButtonElement = document.querySelector("#submitCity")
    cityButtonElement.textContent = `${state.cityButton}`
}



const registerEventHandlers = () => {
    const upTemperatureButton = document.querySelector("#upTemperature");
    upTemperatureButton.addEventListener("click", updateTemperature)
    const downTemperatureButton = document.querySelector("#downTemperature");
    downTemperatureButton.addEventListener('click', downTemperature);
    const submitCityButton = document.querySelector("#submitCity");
    submitCityButton.addEventListener('click', updateCity)

}

document.addEventListener("DOMContentLoaded", registerEventHandlers);