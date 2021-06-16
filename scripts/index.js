const state = {
    temp: 65,
    // use these to change background color incrementally?
    // red: 255,
    // green: 247,
    // blue: 0
    // color: rgb(255, 247, 0)
    sky: "sunny"
};

// TEMPERATURE FUNCTIONALITY//
const tempUp = (event) => {
    state.temp += 1;
    const count = document.querySelector("#tempDisplay");
    count.textContent = `${state.temp}`;
    checkTemp();
    // Add something here that changes background color to slightly more red each click
};

const tempDown = (event) => {
    state.temp -= 1;
    const count = document.querySelector("#tempDisplay");
    count.textContent = `${state.temp}`;
    checkTemp();
};

const checkTemp = (event) => {
    if (state.temp === 105) {
        extremeTemp();
    }
    // use temp = x so program doesnt have to change it each time
    if (state.temp === 90 || state.temp === 104) {
        hotTemp();
    }
    if (state.temp === 75 || state.temp === 89) {
        warmTemp();
    }
    if (state.temp === 60 || state.temp === 74) {
        mildTemp();
    }
    if (state.temp === 45 || state.temp === 59) {
        coolTemp();
    }
    if (state.temp === 30 || state.temp === 44) {
        coldTemp();
    }
    if (state.temp === 29) {
        freezingTemp();
    }
}

const textColor = function(selector, color) {
    document.querySelector(selector).style.color = color;
}

const backgroundColor = function(selector, color) {
    document.querySelector(selector).style.backgroundColor = color;
}

const extremeTemp = (event) => {
    textColor("#tempDisplay", "black");
    textColor("#landscape h3", "white");
    textColor("#groundDisplay", "white");
    backgroundColor("#landscape", "black");
    const count = document.querySelector("#groundDisplay")
    count.textContent = "🌵____🌵_______🌵_🌡__🌵__🌵";
};

const hotTemp = (event) => {
    textColor("#tempDisplay", "red");
    textColor("#landscape h3", "black");
    textColor("#groundDisplay", "black");
    backgroundColor("#landscape", "rgb(255, 0, 0, 0.5)");
    const count = document.querySelector("#groundDisplay");
    count.textContent = "🌵_🐍__🌵_🦂__🦂__🌵_🐍__🌵__🌵";
};

const warmTemp = (event) => {
    textColor("#tempDisplay", "rgb(255, 162, 0)");
    textColor("#landscape h3", "black");
    textColor("#groundDisplay", "black");
    backgroundColor("#landscape", "rgb(255, 162, 0, 0.5)");
    const count = document.querySelector("#groundDisplay");
    count.textContent = "🌴_🌸__🌴_⛱__⛱__🌴_⛱__🌴__🌴";
};

const mildTemp = (event) => {
    textColor("#tempDisplay", "rgb(255, 247, 0)");
    textColor("#landscape h3", "black");
    textColor("#groundDisplay", "black");
    backgroundColor("#landscape", "rgb(255, 247, 0, 0.5)");
    const count = document.querySelector("#groundDisplay");
    count.textContent = "🌳_🌿__🌳_🌿__🌿__🌳_🌿__🌳__🌳";
};

const coolTemp = (event) => {
    textColor("#tempDisplay", "rgb(73, 150, 26)");
    textColor("#landscape h3", "black");
    textColor("#groundDisplay", "black");
    backgroundColor("#landscape", "rgb(73, 150, 26, 0.5)");
    const count = document.querySelector("#groundDisplay");
    count.textContent = "🌳_🌲__🌳_🌲__🌲__🌳_🌲__🌳__🌳";
};

const coldTemp = (event) => {
    textColor("#tempDisplay", "rgb(0, 94, 255)");
    textColor("#landscape h3", "black");
    textColor("#groundDisplay", "black");
    backgroundColor("#landscape", "rgb(0, 94, 255, 0.5)");
    const count = document.querySelector("#groundDisplay");
    count.textContent = "🌲_🏔__🌲_🏔__🏔__🌲_🏔__🌲__🌲";
};

const freezingTemp = (event) => {
    textColor("#tempDisplay", "rgb(0, 251, 255)");
    textColor("#landscape h3", "black");
    textColor("#groundDisplay", "white");
    backgroundColor("#landscape", "rgb(0, 251, 255, 0.5)");
    const count = document.querySelector("#groundDisplay");
    count.textContent = "🌲_☃️__🌲_🏔__☃️__🌲_🏔__🌲__🌲";
};

// SKY FUNCTIONALITY //
const selectSky = (event) => {
    state.sky = event.target.value;
    skyDisplays = {
        "sunny": "☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️",
        "partlyCloudy": "⛅🌤️⛅⛅🌤️⛅🌤️🌤️⛅⛅🌤️🌤️🌤️⛅⛅🌤️",
        "cloudy": "☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️",
        "rainy": "🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️",
        "thunder": "🌩️⚡⛈️🌩⚡⛈️🌩️⚡⚡🌩️⛈️⚡⛈️🌩️⚡⛈️",
        "snowy": "🌨️❄️❄️❄️🌨️🌨️❄️🌨️🌨️❄️🌨️❄️❄️🌨️🌨️🌨️"
    }
    const skyDisplay = document.querySelector("#skyDisplay");
    skyDisplay.textContent = `${skyDisplays[state.sky]}`;
};

// REGISTER EVENT HANDLERS //
const registerEventHandlers = (event) => {
    const tempUpButton = document.querySelector("#tempUp");
    tempUpButton.addEventListener("click", tempUp);

    const tempDownButton = document.querySelector("#tempDown");
    tempDownButton.addEventListener("click", tempDown);

    const skyDisplay = document.querySelector("#skyChoices");
    skyDisplay.addEventListener("change", selectSky)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);