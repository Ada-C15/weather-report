const state = {
    temp_number: 67,
    airspace: "sunny"
};


const temperature = document.querySelector("#temp_number");
const landscape = document.querySelector("#ground");
const airspace = document.querySelector("#sky");

const temperatureUp = () => {
    state.temp_number += 1;
    temperature.textContent = `${state.temp_number}`;
};
//tempUpButton.addEventListener("click", temperatureUp);
const temperatureDown = () => {
    state.temp_number -= 1;
    temperature.textContent = `${state.temp_number}`;
};
//tempDownButton.addEventListener("click", temperatureDown);

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


const skyElement = document.querySelector("#sky_options");
const tempChangeSky = (event) => {
    state.airspace = event.target.value;

    if (state.airspace === "sunny") {
        airspace.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"; 
    }
    else if (state.airspace === "cloudy") {
        airspace.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"; 
    }
    else if (state.airspace === "rainy") {
        airspace.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"; 
    }
    else if (state.airspace === "snowy") {
        airspace.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"; 
    }
};

const 

const registerEventHandlers = () => {
    const tempUpButton = document.querySelector("#up");
    tempUpButton.addEventListener("click", temperatureUp);
    tempUpButton.addEventListener("click", tempChangeColor);
    tempUpButton.addEventListener("click", tempChangeGround);

    const tempDownButton = document.querySelector("#down");
    tempDownButton.addEventListener("click", temperatureDown);
    tempDownButton.addEventListener("click", tempChangeColor);
    tempDownButton.addEventListener("click", tempChangeGround);

    skyElement.addEventListener("change", tempChangeSky);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);