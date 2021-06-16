const state = {
    temperatureDegrees: 68
};

// increase temperature function 
const increaseTemperature = (event) => {
    state.temperatureDegrees += 1;
    const temperatureDegreesContainer = document.querySelector("#temperatureDegrees");
    temperatureDegreesContainer.textContent = `Temperature Degrees: ${state.temperatureDegrees}`;
    changeTemperatureTextColor()
};

// decrease temperature function
const decreaseTemperature = (event) => {
    state.temperatureDegrees -= 1;
    const temperatureDegreesContainer = document.querySelector("#temperatureDegrees");
    temperatureDegreesContainer.textContent = `Temperature Degrees: ${state.temperatureDegrees}`;
    changeTemperatureTextColor()
};

// reset temperature function 
const resetTemperature = (event) => {
    state.temperatureDegrees = 68;
    const temperatureDegreesContainer = document.querySelector("#temperatureDegrees");
    temperatureDegreesContainer.textContent = `Temperature Degrees: ${state.temperatureDegrees}`;
    changeTemperatureTextColor()
};

// change temperature text color
const changeTemperatureTextColor = (event) => {
    // console.log(state.tempCount)
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