const state = {
    temp_number: 67,
    airspace: "sunny",
    current_city: "Seattle",
};

const tempUpButton = document.querySelector("#up");
const tempDownButton = document.querySelector("#down");
const temperature = document.querySelector("#temp_number");
const landscape = document.querySelector("#ground");
const airspace = document.querySelector("#sky");
const skyElement = document.querySelector("#sky_options");
let current_city = document.querySelector("#display");
const input = document.querySelector("#city");
const resetCityButton = document.querySelector("#reset");


const temperatureUp = () => {
    state.temp_number += 1;
    temperature.textContent = `${state.temp_number}`;
};


const temperatureDown = () => {
    state.temp_number -= 1;
    temperature.textContent = `${state.temp_number}`;
};


const tempChangeColor = () => {
    if (state.temp_number > 79) {
        temperature.className = "red";
    }
    else if (state.temp_number > 69) {
        temperature.className = "orange";
    }
    else if (state.temp_number > 59) {
        temperature.className = "yellow";
    }
    else if (state.temp_number > 49) {
        temperature.className = "green";
    }
    else if (state.temp_number > 48) {
        temperature.className = "teal";
    }
};


const tempChangeGround = () => {
    if (state.temp_number > 79) {
        landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"; 
    }
    else if (state.temp_number > 69) {
        landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"; 
    }
    else if (state.temp_number > 59) {
        landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"; 
    }
    else if (state.temp_number > 49) {
        landscape.textContent = "🌲🍂🍂🌲🍁🍂🍂🍂🍁🌲🍂🍂🌲"; 
    }
    else if (state.temp_number > 48) {
        landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"; 
    }
};

const snapBack = document.querySelector(".snapshot")
const tempChangeSky = (skyElement) => {
    state.airspace = skyElement.target.value;
    if (state.airspace === "sunny") {
        airspace.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"; 
        snapBack.className = "day_sunny";
    }
    else if (state.airspace === "cloudy") {
        airspace.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"; 
        snapBack.className = "day_cloudy";
    }
    else if (state.airspace === "rainy") {
        airspace.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
        snapBack.className = "day_rainy";
    }
    else if (state.airspace === "snowy") {
        airspace.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
        snapBack.className = "day_snowy";
    }
};


const changeCity = (input) => {
    state.current_city = input.target.value;
    current_city.textContent = `🏙 ${state.current_city} 🏙`;
};


const resetButton = () => {
    state.current_city = "Seattle";
    current_city.textContent = `🏙 ${state.current_city} 🏙`;
    input.value = "";
};


const registerEventHandlers = () => {
    tempUpButton.addEventListener("click", temperatureUp);
    tempUpButton.addEventListener("click", tempChangeColor);
    tempUpButton.addEventListener("click", tempChangeGround);

    tempDownButton.addEventListener("click", temperatureDown);
    tempDownButton.addEventListener("click", tempChangeColor);
    tempDownButton.addEventListener("click", tempChangeGround);

    skyElement.addEventListener("change", tempChangeSky);

    input.addEventListener("input", changeCity);

    resetCityButton.addEventListener("click", resetButton);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);