const state = {
    temperature: 75,
};

const changeColorandLandscape = () => {
    const thermostat = document.querySelector("#temperature");
    const landscape = document.querySelector("#landscape");

    if (state.temperature > 80) {
        thermostat.style.color = "red"
        landscape.src = "styles/desert.png";
    } else if (state.temperature > 70) {
        thermostat.style.color = "orange"
        landscape.src = "styles/flowers.png";;
    } else if (state.temperature > 60) {
        thermostat.style.color = "yellow"
        landscape.src = "styles/grass.png";
    } else if (state.temperature > 50) {
        thermostat.style.color = "green"
        landscape.src = "styles/snow.png";;
    } else if (state.temperature > 40) {
        thermostat.style.color = "teal"
    }
}

const increaseTemperature = () => {
    state.temperature += 1;
    const temperature = document.querySelector("#temperature");
    temperature.textContent = `${state.temperature}`;
    changeColorandLandscape()
}

const decreaseTemperature = () => {
    state.temperature -= 1;
    const temperature = document.querySelector("#temperature");
    temperature.textContent = `${state.temperature}`;
    changeColorandLandscape()
}

// const updateLocation = () => {
//     const newLocation = document.querySelector("#location");
//     newLocation.textContent = 
//     // const newLocation = document.querySelector("#location");
//     // newLocation.textContent = `${state.temperature}`;
//     console.log("HI")
}

const registerEventHandlers = () => {
    const upButton = document.querySelector("#upButton");
    upButton.addEventListener("click", increaseTemperature);
    const downButton = document.querySelector("#downButton");
    downButton.addEventListener("click", decreaseTemperature);
    const updateLocationButton = document.querySelector("#setLocation");
    updateLocationButton.addEventListener("click", updateLocation)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

