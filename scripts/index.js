const state = {
    temp: 65,
    tempRange: "mild",
    sky: "sunny",
    city: "Seattle"
};

// TEMPERATURE FUNCTIONALITY//
const tempUp = (event) => {
    state.temp += 1;
    const count = document.querySelector("#tempDisplay");
    count.textContent = `${state.temp}`;
    checkTemp();
};

const tempDown = (event) => {
    state.temp -= 1;
    const count = document.querySelector("#tempDisplay");
    count.textContent = `${state.temp}`;
    checkTemp();
};

const checkTemp = (event) => {
    if (state.temp === 105) {
        state.tempRange = "extreme"
        textColor("#tempDisplay", "black");
    } else if (state.temp === 90 || state.temp === 104) {
        state.tempRange = "hot"
        textColor("#tempDisplay", "red");
    } else if (state.temp === 75 || state.temp === 89) {
        state.tempRange = "warm"
        textColor("#tempDisplay", "rgb(255, 162, 0)");
    } else if (state.temp === 60 || state.temp === 74) {
        state.tempRange = "mild"
        textColor("#tempDisplay", "rgb(255, 247, 0)");
    } else if (state.temp === 45 || state.temp === 59) {
        state.tempRange = "cool"
        textColor("#tempDisplay", "rgb(73, 150, 26)");
    } else if (state.temp === 30 || state.temp === 44) {
        state.tempRange = "cold"
        textColor("#tempDisplay", "rgb(0, 94, 255)");
    } else if (state.temp === 29) {
        state.tempRange = "freezing"
        textColor("#tempDisplay", "rgb(0, 251, 255)");
    }
    const landscape = document.querySelector("#landscape");
    landscape.className = state.tempRange;
}

const textColor = function(selector, color) {
    document.querySelector(selector).style.color = color;
}

// const backgroundColor = function(selector, color) {
//     document.querySelector(selector).style.backgroundColor = color;
// }

const selectSky = (event) => {
    state.sky = event.target.value;
    const body = document.querySelector("body");
    body.className = state.sky
};


// CITY FUNCTIONALITY //
const selectCity = (event) => {
    state.city = event.target.value;
    const city = document.querySelector("#cityDisplay");
    city.textContent = `City: ${state.city}`;
};

const resetCity = (event) => {
    document.querySelector("#cityChoice").value = "Seattle";
    const city = document.querySelector("#cityDisplay");
    city.textContent = "For the city of: Seattle";
};

// REGISTER EVENT HANDLERS //
const registerEventHandlers = (event) => {
    const tempUpButton = document.querySelector("#tempUp");
    tempUpButton.addEventListener("click", tempUp);

    const tempDownButton = document.querySelector("#tempDown");
    tempDownButton.addEventListener("click", tempDown);

    const skyDisplay = document.querySelector("#skyChoices");
    skyDisplay.addEventListener("change", selectSky)

    const cityInput = document.querySelector("#cityChoice");
    cityInput.addEventListener("change", selectCity)

    const resetCityButton = document.querySelector("#reset");
    resetCityButton.addEventListener("click", resetCity);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);