const state = {
    temperature: 45,
    city: "Seattle",
    cityButton: "Submit",
    tempClasses: "box coldWeather"
}

const changeTempBackground = () => {
    const temperatureBox = document.querySelector("#temperature")
    if (state.temperature >=80) {
        state.tempClasses = `box tooHot`;
    } else if (state.temperature >= 70 && state.temperature <= 79) {
        state.tempClasses = `box notTooHot`;
    } else if (state.temperature >= 60 && state.temperature <= 69){
        state.tempClasses = `box quiteCool`;
    } else if (state.temperature >= 50 && state.temperature <= 59){
        state.tempClasses = `box jacketWeather`;
    }
    temperatureBox.className = `${state.tempClasses}`
}

const updateTemperature = () => {
    state.temperature += 1;
    changeTempBackground();
    const temperatureElement = document.querySelector("#currentTemp")
    temperatureElement.textContent = `${state.temperature}`;

}

const downTemperature = () => {
    state.temperature -= 1;
    changeTempBackground();
    const temperatureElement = document.querySelector("#currentTemp")
    temperatureElement.textContent = `${state.temperature}`
}

const updateCity = () => {
    const cityButtonElement = document.querySelector("#submitCity")
    if (state.city === "Seattle") {
        const userCity = document.querySelector("#userCity").value;
        state.city=`${userCity}`;
        state.cityButton = "Reset"
    } else {
        state.cityButton = "Submit";
        state.city = "Seattle"
    }
    cityButtonElement.textContent = `${state.cityButton}`
    const cityElement = document.querySelector("#defaultCity");
    cityElement.textContent = `How is the weather today in ${state.city}?`;
}

const registerEventHandlers = () => {
    const upTemperatureButton = document.querySelector("#upTemperature");
    upTemperatureButton.addEventListener("click", updateTemperature)
    const downTemperatureButton = document.querySelector("#downTemperature");
    downTemperatureButton.addEventListener('click', downTemperature)
    const submitCityButton = document.querySelector("#submitCity");
    submitCityButton.addEventListener('click', updateCity)
    
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);