const state = {
    currentTemp: parseInt(document.getElementById("temp_val").textContent)
} 

const updateCityName = () => {
    const inputName = document.getElementById("city_input").value;
    const headerCity = document.getElementById("city_name");
    headerCity.textContent = inputName;
}

const resetCityName = () => {
    const headerCity = document.getElementById("city_name");
    headerCity.textContent = "Seattle";
}

const selectSky = () => {
    const skyChoice = document.getElementById("sky_choice").value;
    let gardenBg = document.getElementById("garden_bg");
    let weather = document.getElementById("skyemoji")
    let color ="";
    let sky = "";
    if (skyChoice === "Rainy") {
        color = "rainy";
        sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else if (skyChoice === "Sunny") {
        color = "sunny";
        sky = "☁️ ☀️ ☁️ ☀️ ☁️ ☀️☁️";
    } else if (skyChoice === "Snowy") {
        color = "snowy";
        sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    } else if (skyChoice === "Cloudy") {
        color = "cloudy";
        sky = "☁️☁️ 🌤☁️ ☁️☁️ ☁️ 🌤 ☁️☁️";
    }
    gardenBg.classList = `${color}`;
    weather.textContent = sky;
}

const increaseTemp = () => {
    state.currentTemp += 1;
    const temp = document.getElementById("temp_val");
    temp.textContent = state.currentTemp;
    updateGarden(state.currentTemp)
}


const updateGarden = (currentTemp) => {
    const gardenLandscape = document.getElementById("landscape");
    let newLandscape = "🌿🌱🌻🌻🌻🌻🌱🌷🌷🌷🌷🌱🌿";
    if (currentTemp >= 80) {
        newLandscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (currentTemp >= 60 && currentTemp < 70) {
        newLandscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (currentTemp <= 59) {
        newLandscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
    gardenLandscape.textContent = newLandscape;
}


const decreaseTemp = () => {
    state.currentTemp -= 1;
    const temp = document.getElementById("temp_val");
    temp.textContent = state.currentTemp;
    updateGarden(state.currentTemp);
}

// const update = (state.currentTemp) => {
//     if (state.currentTemp > 90) {
//         console.log("it works");
//     }
// }


const registerEventHandlers = () => {
    updateCityName();
    const cityName = document.getElementById("city_input");
    cityName.addEventListener("input", updateCityName);

    const reset = document.getElementById("city_reset");
    reset.addEventListener("click", resetCityName);

    const changeSky = document.getElementById("sky_choice");
    changeSky.addEventListener("change", selectSky);

    const increaseBtn = document.getElementById("increase");
    increaseBtn.addEventListener("click", increaseTemp, updateGarden);

    const decreaseBtn = document.getElementById("decrease");
    decreaseBtn.addEventListener("click", decreaseTemp);

  };
  
document.addEventListener("DOMContentLoaded", registerEventHandlers);