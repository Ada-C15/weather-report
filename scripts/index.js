// ---------------------** TEMPERATURE SECTION **----------------------
const state = {
    currentTemp: 70
};

const tempValueColor = () => {
    if (state.currentTemp < 50){
        return ["#20567e", "🌲🌲⛄️🌲⛄️❄️🥶❄️🥶⛄️🥶❄️🌲"]; //Blue
    }
    else if (state.currentTemp >= 50 && state.currentTemp < 60){
        return ["#1c7c54", "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"]; //Green
    }
    else if (state.currentTemp >= 60 && state.currentTemp < 70){
        return ["#f09d51", "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"]; //Yellow
    }
    else if (state.currentTemp >=70 && state.currentTemp < 80){
        return ["#d8572a", "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"]; //Orange
    }
    else if (state.currentTemp >= 80) {
        return ["#c71f37", "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"]; //Red
    }
}

const registerEventHandlers = () => {
    const incTempButton = document.querySelector("#increaseTemp");
    const decTempButton = document.querySelector("#decreaseTemp");
    incTempButton.addEventListener('click', increaseTemperature);
    decTempButton.addEventListener('click', decreaseTemperature);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);


const increaseTemperature = () => {
    state.currentTemp += 1;
    const tempValueElement = document.querySelector("#tempValue");
    const gardenLandscape = document.querySelector("#landscape");
    let tempColor = tempValueColor();
    tempValueElement.style.color = tempColor[0];
    tempValueElement.textContent = `${state.currentTemp}`;
    gardenLandscape.textContent = tempColor[1];
};

const decreaseTemperature = () => {
    state.currentTemp -= 1;
    const tempValueElement = document.querySelector("#tempValue");
    const gardenLandscape = document.querySelector("#landscape");
    let tempColor = tempValueColor();
    tempValueElement.style.color = tempColor[0];
    tempValueElement.textContent = `${state.currentTemp}`;
    gardenLandscape.textContent = tempColor[1];
};