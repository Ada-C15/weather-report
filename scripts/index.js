let currentTemp = 65;

const updateTempColor = currentTemp => {
    const tempContainer = document.getElementById("currentTemp");
    let color = "green";
    if (currentTemp >= 80) {
        color = "red";
    } else if (currentTemp >= 70) {
        color = "orange";
    } else if (currentTemp >= 60) {
        color = "yellow";
    } else if (currentTemp >= 50) {
        color = "green";
    } else if (currentTemp < 50) {
        color = "teal";
    }
    tempContainer.classList = color;
};

const updateTemp = currentTemp => {
    const tempContainer = document.getElementById("currentTemp");
    tempContainer.textContent = currentTemp;
    updateTempColor(currentTemp);
    updateLandscape(currentTemp);
};

const increaseTemp = () => {
    currentTemp += 1;
    updateTemp(currentTemp);
};

const decreaseTemp = () => {
    currentTemp -= 1;
    updateTemp(currentTemp);
};

const updateSky = () => {
    const skyOption = document.getElementById("sky-options").value;
    const skyContainer = document.getElementById("sky");
    let sky = "";
    if (skyOption === "Sunny") {
        sky = "☁️☁️☁️☁️☁️☀️☁️☁️☁️☁️☁️";
        skyColor = "sunny";
    } else if (skyOption === "Cloudy") {
        sky = "☁️☁️☁️☁️☁️⛅☁️☁️☁️☁️☁️";
        skyColor = "cloudy";
    } else if (skyOption === "Rainy") {
        sky = "🌧🌧🌧🌧🌧🌦🌧🌧🌧🌧🌧";
        skyColor = "rainy";
    } else if (skyOption === "Snowy") {
        sky = "🌨❄️🌨❄️🌨❄️🌨❄️🌨❄️🌨";
        skyColor = "snowy";
    }
    skyContainer.textContent = sky;
};

const updateLandscape = (currentTemp) => {
    const groundContainer = document.getElementById("ground");
    let ground = "";
    if (currentTemp >= 80) {
        ground = "🌵🐍🦂🌵🐍🦂🌵🐍🦂🌵🐍";
    } else if (currentTemp >= 70) {
        ground = "🌸🌿🌼🌿🌸🌿🌼🌿🌸🌿🌼";
    } else if (currentTemp >= 60) {
        ground = "🌾🍃🌾🍃🌾🍃🌾🍃🌾🍃🌾";
    } else if (currentTemp >= 50){
        ground = "🍂🍁🍂🍁🍂🍁🍂🍁🍂🍁🍂"
    } else if (currentTemp < 50){
        ground = "🌲🌲⛄️🌲🌲⛄️🌲🌲⛄️🌲🌲"
    }
    groundContainer.textContent = ground;
};

const updateCity = () => {
    const inputCity = document.getElementById("cityInput").value;
    const headerCity = document.getElementById("headerCity");
    headerCity.textContent = inputCity;
};

const resetCity = () => {
    const cityNameInput = document.getElementById("cityInput");
    cityNameInput.value = "Neverland";
    updateCity();
};

const registerEventHandlers = () => {
    const increaseTempButton = document.getElementById("increase-temp");
    increaseTempButton.addEventListener("click", increaseTemp);

    const decreaseTempButton = document.getElementById("decrease-temp");
    decreaseTempButton.addEventListener("click", decreaseTemp);

    const skyOption = document.getElementById("sky-options");
    skyOption.addEventListener("change", updateSky);

    const inputCity = document.getElementById("cityInput");
    inputCity.addEventListener("input", updateCity);

    const resetCityButton = document.getElementById("reset-button");
    resetCityButton.addEventListener("click", resetCity);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);