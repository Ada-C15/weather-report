const state = {
    temperature: 45,
    city: "Seattle",
    cityButton: "Submit",
    tempClasses: "box coldWeather",
    landscape: "",
    sky: "",
    backgroundClass: "sunnyBackground"
}

const changeTempBackground = () => {
    const temperatureBox = document.querySelector("#temperature")
    const landscape = document.querySelector("#landscape")
    if (state.temperature >=80) {
        state.tempClasses = `box tooHot`;
        state.landscape = `🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂`;
    } else if (state.temperature >= 70 && state.temperature <= 79) {
        state.tempClasses = `box notTooHot`;
        state.landscape = `🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷`;
    } else if (state.temperature >= 60 && state.temperature <= 69){
        state.tempClasses = `box quiteCool`;
        state.landscape = `🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃`;
    } else if (state.temperature >= 50 && state.temperature <= 59){
        state.tempClasses = `box jacketWeather`;
        state.landscape = `🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲`;
    } else {
        state.tempClasses = `box coldWeather`;
        state.landscape = `⛄️🥶❄️⛄️🥶❄️⛄️🥶❄`
    }
    temperatureBox.className = `${state.tempClasses}`
    landscape.textContent = `${state.landscape}`
}

const updateSky = () => {
    const sky = document.querySelector("#skySelection").value;
    const skyDisplay = document.querySelector("#skyDisplay");
    const background = document.querySelector("body");
    if (sky === "rainy") {
        state.sky = `🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧`;
        state.backgroundClass = "rainyBackground"
    } else if (sky === "cloudy") {
        state.sky = `☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️`;
        state.backgroundClass = "cloudyBackground"
    } else if (sky === "snowy") {
        state.sky = `🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨`;
        state.backgroundClass = "snowyBackground"
    } else {
        state.sky = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
        state.backgroundClass = "sunnyBackground"
    }
    skyDisplay.textContent=`${state.sky}`
    background.className = state.backgroundClass


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
    const skySelector = document.querySelector("#skySelection");
    skySelector.addEventListener(`change`, updateSky)
    
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);