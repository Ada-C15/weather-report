const state = {
    temperature: 75,
    location: " ",
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


// const updateSky = () => {
//     const sky = document.querySelector("#display");
//     if (rain) {
//         sky.src = "styles/rain.gif";
//     }else if (sunny) {
//         sky.src = "styles/sunny.gif";
//     }else if (overcast) {
//         sky.src = "styles/overcase.gif";
//     }else if (nightsky) {
//         sky.src = "styles/nightsky.gif";
//     }else if (dawn) {
//         sky.src = "styles/dawn.gif";
//     }
// }

const updateLocation = () => {
    let userInput = document.getElementById("searchTxt").value;
    state.location = userInput;
    const newLocation = document.querySelector("#location");
    newLocation.innerHTML = `${state.location}`;
}

const registerEventHandlers = () => {
    const upButton = document.querySelector("#upButton");
    upButton.addEventListener("click", increaseTemperature);
    const downButton = document.querySelector("#downButton");
    downButton.addEventListener("click", decreaseTemperature);
    const updateLocationButton = document.querySelector("#enter");
    updateLocationButton.addEventListener("click", updateLocation)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

