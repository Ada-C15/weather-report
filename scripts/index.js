// let tempValue = 65;

const state = {
    currentTemp: 65
};

const updateTemp = () => {
    const tempValueContainer = document.querySelector("#tempValue");
    tempValueContainer.textContent = state.currentTemp;
};

const increaseTemp = () => {
    state.currentTemp += 1;
    updateTemp();
    updateTempColor();
};

const decreaseTemp = () => {
    state.currentTemp -= 1;
    updateTemp();
    updateTempColor();
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


const registerEventHandlers = () => {
    const increaseTempControl = document.querySelector("#increase_temp");
    increaseTempControl.addEventListener('click', increaseTemp);

    const decreaseTempControl = document.querySelector("#decrease_temp");
    decreaseTempControl.addEventListener('click', decreaseTemp);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);

