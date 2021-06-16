const state = {
    currentTemp: 70,
    sky: 'Sunny'
};

const setTemperatureColor = (temp) => {
    const temperatureText = document.getElementById("temperatureText");
    if (temp >= 100) {
        temperatureText.style.color = "darkred";
    } else if (temp >= 80 && temp < 100) {
        temperatureText.style.color = "red";
    } else if (temp >= 70 && temp < 80) {
        temperatureText.style.color = "orange";
    } else if (temp >= 60 && temp < 70) {
        temperatureText.style.color = "yellow";
    } else if (temp >= 50 && temp < 60) {
        temperatureText.style.color = "green";
    } else if (temp > 32 && temp < 50) {
        temperatureText.style.color = "teal";
    } else if (temp <= 32) {
        temperatureText.style.color = "blue";
    }
};

const setLandscapeImage = (temp) => {
    const landscapeImage = document.getElementById("landscapeImage");
    if (temp >= 100) {
        landscapeImage.src='./images/scorched-landscape.jpg';
    } else if (temp < 100 && temp >= 80) {
        landscapeImage.src='./images/desert-landscape.jpg';
    } else if (temp < 80 && temp >= 70) {
        landscapeImage.src='./images/grassy-landscape.jpg';
    } else if (temp < 70 && temp >= 55) {
        landscapeImage.src='./images/flower-landscape.jpg';
    } else if (temp < 55 && temp >= 40) {
        landscapeImage.src='./images/fall-landscape.jpg';
    } else {
        landscapeImage.src='./images/snow-landscape.jpg';
    }
};

const increaseTemperature = () => {
    state.currentTemp += 1;
    const temperatureText = document.getElementById("temperatureText");
    temperatureText.textContent = `${state.currentTemp}`;
    setTemperatureColor(state.currentTemp);
    setLandscapeImage(state.currentTemp);
};

const decreaseTemperature = () => {
    state.currentTemp -= 1;
    const temperatureText = document.getElementById("temperatureText");
    temperatureText.textContent = `${state.currentTemp}`;
    setTemperatureColor(state.currentTemp);
    setLandscapeImage(state.currentTemp);
};

const setSkyImage = (sky) => {
    const skyImage = document.getElementById("skyImage");
    if (sky == "Sunny") {
        skyImage.src='./images/sunny-sky.jpg';
    } else if (sky == "Cloudy") {
        skyImage.src='./images/cloudy-sky.jpg';
    } else if (sky == 'Rain') {
        skyImage.src='./images/rainy-sky.jpg';
    } else if (sky == 'Snow') {
        skyImage.src='./images/snowy-sky.jpg';
    } else if (sky == 'Storm') {
        skyImage.src='./images/storm-sky.jpg';
    }
}

const setSky = () => {
    const skyInput = document.getElementById("skySelect").value;
    setSkyImage(skyInput);
    state.sky = skyInput;
}


////////// register event handlers ///////////

const increaseTempButton = document.getElementById("increaseTemp");
const decreaseTempButton = document.getElementById("decreaseTemp");

increaseTempButton.addEventListener("click", increaseTemperature);
decreaseTempButton.addEventListener("click", decreaseTemperature);

const skySelection = document.getElementById("skySelect");
skySelection.addEventListener("change", setSky);

// const registerEventHandlers = () => {
//     const increaseTempButton = document.getElementById("increaseTemp");
//     const decreaseTempButton = document.getElementById("decreaseTemp");
    
//     increaseTempButton.addEventListener("click", increaseTemperature);
//     decreaseTempButton.addEventListener("click", decreaseTemperature);
// };

// document.addEventListener("DOMContentLoaded", registerEventHandlers);