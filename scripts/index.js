console.log("fingers crossed it's sunny")

let temperatureValue = 70;

const updateTemperatureColors = (currentTemperature) => {
    const temperatureValueContainer = document.getElementById("temperature-value");
    let color = "black";
    if (currentTemperature >= 80) {
        color = "red";
    } else if (currentTemperature >= 70) {
        color = "orange";
    } else if (currentTemperature >= 60) {
        color = "yellow";
    } else if (currentTemperature >= 50) {
        color = "green";
    } else {
        color = "teal";
    }
    temperatureValueContainer.classList = color;
};

const updateGarden = (currentTemperature) => {
    const landArtContainer = document.getElementById("land-art");
    let landArt = "🌲🌲🌲";
    if (currentTemperature >= 80) {
        landArt = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (currentTemperature >= 70) {
        landArt = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (currentTemperature >= 60) {
        landArt = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (currentTemperature >= 50) {
        landArt = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    } else {
        landArt = "🌲";
    }
    landArtContainer.textContent = landArt;
};

const updateTemperature = temperatureValue => {
    const temperatureValueContainer = document.getElementById("temperature-value");
    temperatureValueContainer.textContent = temperatureValue;
    updateTemperatureColors(temperatureValue);
    updateGarden(temperatureValue);
};

const increaseTemperature = () => {
    temperatureValue += 1;
    updateTemperature(temperatureValue);
};

const decreaseTemperature = () => {
    temperatureValue -= 1;
    updateTemperature(temperatureValue);
};

const registerEventHandlers = () => {
    //  temp up bttn

    updateTemperature(temperatureValue);

    const upButton = document.getElementById("increase-temp-bttn");
    upButton.addEventListener("click", increaseTemperature);

    //  temp down bttn
    const downButton = document.getElementById("decrease-temp-bttn");
    downButton.addEventListener("click", decreaseTemperature);

    //  sky landscape dropdown


    //  city name search bar
    //  city name reset
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
