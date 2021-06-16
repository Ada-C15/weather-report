const state = {
    temperature: 75,
    location: "",
    sky: ""
};

const changeColorandLandscape = () => {
    const thermostat = document.querySelector("#temperature");
    const landscape = document.querySelector("#landscape");

    if (state.temperature > 80) {
        thermostat.className = "red"
        landscape.src = "assets/landscapes/desert.png";
    } else if (state.temperature > 70) {
        thermostat.className =  "orange"
        landscape.src = "assets/landscapes/grass.png";;
    } else if (state.temperature > 60) {
        thermostat.className  = "yellow"
        landscape.src = "assets/landscapes/flowers.png";
    } else if (state.temperature > 50) {
        thermostat.className  = "green"
        landscape.src = "assets/landscapes/snow.png";;
    } else if (state.temperature > 40) {
        thermostat.className = "blue"
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
        sky.style.backgroundImage = "url(assets/skies/rain.gif)";
    }else if (state.sky == "sunny") {
        sky.style.backgroundImage = "url(assets/skies/sunny.gif)";
    }else if (state.sky == "cloudy") {
        sky.style.backgroundImage = "url(assets/skies/cloudy.gif)";
    }else if (state.sky == "overcast") {
        sky.style.backgroundImage = "url(assets/skies/overcast.gif)";
    }else if (state.sky == "nightsky") {
        sky.style.backgroundImage = "url(assets/skies/night.gif)";
    }else if (state.sky == "dawn") {
        sky.style.backgroundImage = "url(assets/skies/dawn.gif)";
    }else if (state.sky == "dusk") {
        sky.style.backgroundImage = "url(assets/skies/dusk.gif)";
    }else if (state.sky == "cyberpunk") {
        sky.style.backgroundImage = "url(assets/skies/cyberpunk.gif)";
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

