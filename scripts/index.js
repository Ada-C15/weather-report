const state = {
    currentTemp: 65,
    // defaultSky: sunny,
    // defaultLocation: "Unceded Duwamish Lands"
};

const skyImages = {
    sunny: ["https://media.giphy.com/media/lyVNcb1n5Ob0Q/giphy.gif", "sunny alt"],
    cloudy: ["https://media.giphy.com/media/lOkbL3MJnEtHi/giphy.gif", "cloudy alt"],
    rainy: ["https://media.giphy.com/media/vLi3T5m3RH45y/giphy.gif", "rainy alt"],
    snowy: ["https://media.giphy.com/media/Fh3ezinVpi4yk/giphy.gif", "snowy, alt"]
};

const addTemp = (event) => {
    state.currentTemp += 1;
    const temperatureCountContainer = document.querySelector("#temperatureCount")
    temperatureCountContainer.textContent = `Temperature ${state.currentTemp}℉`;
};
const subtractTemp = (event) => {
    state.currentTemp -= 1;
    const temperatureCountContainer = document.querySelector("#temperatureCount")
    temperatureCountContainer.textContent = `Temperature ${state.currentTemp}℉`;
};
const changeLandscape = (event) => {
    let option = document.querySelector('#sky');
    let optionValue = option.value;
    var x = document.createElement("IMG");
    x.setAttribute("src", skyImages[optionValue][0]);
    x.setAttribute("alt", skyImages[optionValue][1]);
    skyImageContainer.appendChild(x);
};

const registerEventHandlers = (event) => {
    const addTemperatureButton = document.querySelector("#addTemperatureButton");
    addTemperatureButton.addEventListener("click", addTemp);

    const subtractTemperatureButton = document.querySelector("#subtractTemperatureButton");
    subtractTemperatureButton.addEventListener("click", subtractTemp);

    const landscapeOptions = document.querySelector("#sky");
    landscapeOptions.addEventListener("change", changeLandscape);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);