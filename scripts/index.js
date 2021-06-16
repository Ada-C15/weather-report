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
    const inputText = document.getElementById("city_input");
    headerCity.textContent = "Seattle";
    inputText.value = "Seattle"
}

const selectSky = () => {
    const skyChoice = document.getElementById("sky_choice").value;
    let gardenBg = document.getElementById("garden_bg");
    let weather = document.getElementById("skyemoji")
    let color ="";
    let sky = "";
    if (skyChoice === "Rainy") {
        color = "rainy";
        sky = "🌧🌈⛈🌧💧⛈🌦🌧💧🌧🌈🌧";
    } else if (skyChoice === "Sunny") {
        color = "sunny";
        sky = "☁️ ☀️ ☁️ ☀️ ☁️ ☀️ ☁️ ☀️ ☁️";
    } else if (skyChoice === "Snowy") {
        color = "snowy";
        sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨";
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
    updateGardenTemp(state.currentTemp)
}

const decreaseTemp = () => {
    state.currentTemp -= 1;
    const temp = document.getElementById("temp_val");
    temp.textContent = state.currentTemp;
    updateGardenTemp(state.currentTemp);
}

const updateGardenTemp = (currentTemp) => {
    const gardenLandscape = document.getElementById("landscape");
    const tempVal = document.getElementById("temp_val");
    let newLandscape = "🌱🌻🌻🌻🌻🌱🌷🌷🌷🌷🌱";
    let fontColor = ""
    if (currentTemp >= 80) {
        newLandscape = "🌵🏜🦂🌵 🐍 🦂 🐍 🌵🏜🦂🌵";
        fontColor = "red";
    } else if (currentTemp >= 70) {
        fontColor = "orange";
    }
    else if (currentTemp >= 60 && currentTemp < 70) {
        newLandscape = "🌾🍃🍃🍃🪨 🛤 🪨🍃🍃🍃🌾";
        fontColor = "yellow";
    } else if (currentTemp >= 50 && currentTemp <= 59) {
        newLandscape = "🌲🌲🍂🌲🍂🍁🌲🍁🌲🍁🌲🍂🌲";
        fontColor = "green";
    } else if (currentTemp <= 49) {
        newLandscape = "⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️";
        fontColor = "teal";
    }
    gardenLandscape.textContent = newLandscape;
    tempVal.classList = `${fontColor}`
}

const registerEventHandlers = () => {
    updateCityName();
    const cityName = document.getElementById("city_input");
    cityName.addEventListener("input", updateCityName);

    const reset = document.getElementById("city_reset");
    reset.addEventListener("click", resetCityName);

    const changeSky = document.getElementById("sky_choice");
    changeSky.addEventListener("change", selectSky);

    const increaseBtn = document.getElementById("increase");
    increaseBtn.addEventListener("click", increaseTemp);

    const decreaseBtn = document.getElementById("decrease");
    decreaseBtn.addEventListener("click", decreaseTemp);

  };
  
document.addEventListener("DOMContentLoaded", registerEventHandlers);