const state = {
    temperature: 75,
    location: "",
    sky: ""
};

const changeColorandLandscape = () => {
    const thermostat = document.querySelector("#temperature");
    const landscape = document.querySelector("#landscape");

    if (state.temperature > 80) {
        thermostat.style.color = "red"
        landscape.src = "styles/desert.png";
    } else if (state.temperature > 70) {
        thermostat.style.color = "orange"
        landscape.src = "styles/grass.png";;
    } else if (state.temperature > 60) {
        thermostat.style.color = "yellow"
        landscape.src = "styles/flowers.png";
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

const updateSkies = () => {
    let userSelect = document.querySelector("#skies");
    output = userSelect.value;
    state.sky = output
    console.log(state.sky)
    const sky = document.querySelector("#display");
    if (state.sky == "rainy") {
        sky.style.backgroundImage = "url(styles/rain.gif)";
    }else if (state.sky == "sunny") {
        sky.style.backgroundImage = "url(styles/sunny.gif)";
    }else if (state.sky == "cloudy") {
        sky.style.backgroundImage = "url(styles/cloudy.gif)";
    }else if (state.sky == "overcast") {
        sky.style.backgroundImage = "url(styles/overcast.gif)";
    }else if (state.sky == "nightsky") {
        sky.style.backgroundImage = "url(styles/night.gif)";
    }else if (state.sky == "dawn") {
        sky.style.backgroundImage = "url(styles/dawn.gif)";
    }else if (state.sky == "dusk") {
        sky.style.backgroundImage = "url(styles/dusk.gif)";
    }else if (state.sky == "cyberpunk") {
        sky.style.backgroundImage = "url(styles/cyberpunk.gif)";
    }
}

const updateLocation = () => {
    let userInput = document.getElementById("searchTxt").value;
    state.location = userInput;
    const newLocation = document.querySelector("#location");
    newLocation.innerHTML = `${state.location}`;
}

const registerEventHandlers = () => {
    const upButton = document.querySelector("#upButton");
    const downButton = document.querySelector("#downButton");
    const updateLocationButton = document.querySelector("#enter");
    const updateSky = document.querySelector("#skies");
    upButton.addEventListener("click", increaseTemperature);
    downButton.addEventListener("click", decreaseTemperature);
    updateLocationButton.addEventListener("click", updateLocation);
    updateSky.addEventListener("change", updateSkies)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

