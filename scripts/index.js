// let tempValue = 65;

const state = {
    currentTemp: 65,
    currentSky: "Sunny"
};

const updateTemp = () => {
    const tempValueContainer = document.querySelector("#tempValue");
    tempValueContainer.textContent = state.currentTemp;
};

const increaseTemp = () => {
    state.currentTemp += 1;
    updateTemp();
    updateTempColor();
    updateLandscape();
};

const decreaseTemp = () => {
    state.currentTemp -= 1;
    updateTemp();
    updateTempColor();
    updateLandscape();
};

const updateTempColor = () => {
    const tempValueContainer = document.querySelector("#tempValue")
    let color = "yellow";
    if (state.currentTemp >= 80) {
        color = "red";
    } else if (state.currentTemp >= 70) {
        color = "orange";
    } else if (state.currentTemp >= 60) {
        color = "yellow";
    } else if (state.currentTemp >= 50) {
        color = "green";
    } else {
        color = "blue";
    };
    tempValueContainer.classList = color;
}

// potentially combine this in with updateTempColor
const updateLandscape = () => {
    const landscapeContainer = document.querySelector("#landscapeContainer");
    let landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    if (state.currentTemp >= 80) {
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.currentTemp >= 70) {
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (state.currentTemp >= 60) {
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (state.currentTemp >= 50) {
        landscape = "💚🐸💚🐸💚🐸💚🐸💚🐸💚🐸";
    } else {
        landscape = "❄️💙❄️💙❄️💙❄️💙❄️💙❄️💙❄️💙";
    };
    landscapeContainer.textContent = landscape;
    
}

const updateSky = () => {
    const skyContainer = document.querySelector("#skyContainer");
    const skySelection = document.querySelector("#skySelection").value;
    state.currentSky = skySelection;
    let sky = "☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️";
    if (state.currentSky === 'sunny') {
        sky = "☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️";
    } else if (state.currentSky === 'cloudy') {
        sky = "☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️";
    } else if (state.currentSky === 'rainy') {
        sky = "🌧💧🌧💧🌧💧🌧💧🌧💧🌧💧";
    } else {
        sky = "❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️";
    };
    skyContainer.textContent = sky;
};


const registerEventHandlers = () => {
    const increaseTempControl = document.querySelector("#increase_temp");
    increaseTempControl.addEventListener('click', increaseTemp);

    const decreaseTempControl = document.querySelector("#decrease_temp");
    decreaseTempControl.addEventListener('click', decreaseTemp);

    const changeSky = document.querySelector("#skySelection");
    changeSky.addEventListener('change', updateSky);

}

document.addEventListener("DOMContentLoaded", registerEventHandlers);

