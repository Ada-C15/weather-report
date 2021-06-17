const state = {
    temperatureDegrees: 68
};

// increase temperature function 
const increaseTemperature = (event) => {
    state.temperatureDegrees += 1;
    const temperatureDegreesContainer = document.querySelector("#temperatureDegrees");
    temperatureDegreesContainer.textContent = `Temperature Degrees: ${state.temperatureDegrees}`;
    changeTemperatureTextColor()
    changeLandscapeEmojis()
};

// decrease temperature function
const decreaseTemperature = (event) => {
    state.temperatureDegrees -= 1;
    const temperatureDegreesContainer = document.querySelector("#temperatureDegrees");
    temperatureDegreesContainer.textContent = `Temperature Degrees: ${state.temperatureDegrees}`;
    changeTemperatureTextColor()
    changeLandscapeEmojis()
};

// reset temperature function 
const resetTemperature = (event) => {
    state.temperatureDegrees = 68;
    const temperatureDegreesContainer = document.querySelector("#temperatureDegrees");
    temperatureDegreesContainer.textContent = `Temperature Degrees: ${state.temperatureDegrees}`;
    changeTemperatureTextColor()
    changeLandscapeEmojis()
};

// change temperature text color function
const changeTemperatureTextColor = (event) => {
    if (state.temperatureDegrees >= 70) {
        document.getElementById("temperatureDegrees").style.color = "red";
    } else if (state.temperatureDegrees <= 69 && state.temperatureDegrees >= 60) {
        document.getElementById("temperatureDegrees").style.color = "orange";
    } else if (state.temperatureDegrees <= 59 && state.temperatureDegrees >= 50) {
        document.getElementById("temperatureDegrees").style.color = "yellow";
    } else if (state.temperatureDegrees <= 49 && state.temperatureDegrees >= 40) {
        document.getElementById("temperatureDegrees").style.color = "green";
    } else if (state.temperatureDegrees <= 39) {
        document.getElementById("temperatureDegrees").style.color = "blue";
    }
};

// change landscape emojis function
const changeLandscapeEmojis = (event) => {
    if (state.temperatureDegrees >= 70) {
        document.getElementById("landscapeEmojis").textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.temperatureDegrees <= 69 && state.temperatureDegrees >= 60) {
        document.getElementById("landscapeEmojis").textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (state.temperatureDegrees <= 59 && state.temperatureDegrees >= 50) {
        document.getElementById("landscapeEmojis").textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (state.temperatureDegrees <= 49) {
        document.getElementById("landscapeEmojis").textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
}

// change sky emojis function
// {}

// change city function
// {}

// event handlers
const registerEventHandlers = (event) => {
    const increaseButton = document.querySelector("#addIncreaseTemperatureButton");
    increaseButton.addEventListener("click", increaseTemperature);

    const decreaseButton = document.querySelector("#addDecreaseTemperatureButton");
    decreaseButton.addEventListener("click", decreaseTemperature);

    const resetButton = document.querySelector("#addResetButton");
    resetButton.addEventListener("click", resetTemperature);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);