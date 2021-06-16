// ---------------------** TEMPERATURE SECTION **----------------------
// ---------------------**       WAVE 1        **----------------------
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
    incTempButton.addEventListener('click', increaseTemperature);
    const decTempButton = document.querySelector("#decreaseTemp");
    decTempButton.addEventListener('click', decreaseTemperature);
    const skySelection = document.querySelector("#skySelect");
    skySelection.addEventListener('change', updateGarden);
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


// ----------------------** SKY SELECTION **------------------------
// ----------------------**     WAVE 2    **------------------------

const updateGarden = () => {
    console.log("Testing");
    const skySelect = document.querySelector("#skySelect");
    const skyDisplay = document.querySelector("#skyDisplay");
    switch (skySelect.selectedIndex){
        case 0:  //Sunny
            skyDisplay.textContent = "☁️ ☀️ ☁️ ☀️ ☁️ ☀️ ☁️";
            break;
        case 1: //Cloudy
            skyDisplay.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
            break;
        case 2: //Rainy
            skyDisplay.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
            break;
        case 3: //Snowy
            skyDisplay.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
            break;
        default:
            skyDisplay.textContent = "☁️ ☀️ ☁️ ☀️ ☁️ ☀️ ☁️";
            break;
    }
}



