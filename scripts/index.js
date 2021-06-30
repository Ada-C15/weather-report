// setting the default variable to 70 
// how would I keep the degree ?
const state = {
    tempCount: 70,
};

const increaseTemp = (event) => {
    state.tempCount += 1
    // const count = document.querySelector("#tempCount");
    // count.textContent = `Temperature: ${state.tempCount}`;
    const count = document.querySelector("#num");
    count.textContent = state.tempCount;

    if (state.tempCount <= 49) {
        freezingDay();
    } else if ((50 <= state.tempCount) && (state.tempCount <= 59)) {
        coldDay();
    } else if ((60 <= state.tempCount) && (state.tempCount <= 69))  {
        coolDay();
    } else if ((70 <= state.tempCount) && (state.tempCount <= 79)) {
        warmDay();
    } else if (state.tempCount >= 80) {
        hotDay();
    }
};

const decreaseTemp = (event) => {
    state.tempCount -= 1;
    const count = document.querySelector("#num");
    count.textContent = state.tempCount;

    if (state.tempCount <= 49) {
        freezingDay();
    } else if ((50 <= state.tempCount) && (state.tempCount <= 59)) {
        coldDay();
    } else if ((60 <= state.tempCount) && (state.tempCount <= 69))  {
        coolDay();
    } else if ((70 <= state.tempCount) && (state.tempCount <= 79)) {
        warmDay();
    } else if (state.tempCount >= 80) {
        hotDay();
    }
};


// these colors will change with the temperature 
//// Wave 2 - Change Color of Temp
//const tempRanges = (tempCount) => {
//    const tempColorContainer = document.querySelector("#tempValue");
//    if (tempCount <= 49){
//        document.getElementById("tempValue").style.color = "#008080";
//    } else if (tempCount >= 50 && tempCount <= 59){
//        document.getElementById("tempValue").style.color = "#00FF00";
//    } else if (tempCount >= 60 && tempCount <= 69){
//        document.getElementById("tempValue").style.color = "#FFF933";
//    } else if (tempCount >= 70 && tempCount<= 79){
//        document.getElementById("tempValue").style.color = "#FF5A33";
//    } else (tempCount >= 80);{
//        document.getElementById("tempValue").style.color = "#F8422D";
//    }

//}

// the background will change with the temperature
const freezingDay = (event) => {
    const gardenContainer = document.querySelector("#gardenContainer");
    gardenContainer.textContent = "🧊🌨️🧊🧊🌨️🧊🧊🌨️🧊🧊🌨️🧊🧊🌨️🧊";
};

const coldDay = (event) => {
    const gardenContainer = document.querySelector("#gardenContainer");
    gardenContainer.textContent = "🌲⛄️🍂🌲⛄️🍂🌲⛄️🍂🌲⛄️🍂🌲⛄️🍂🌲⛄️🍂🌲⛄️🍂";
};

const coolDay = (event) => {
    const gardenContainer = document.querySelector("#gardenContainer");
    gardenContainer.textContent = "⛅🌸🌱⛅🌸🌱⛅🌸🌱⛅🌸🌱⛅🌸🌱🌱⛅🌸🌱🌱⛅🌸🌱🌱";
};

const warmDay = (event) => {
    const gardenContainer = document.querySelector("#gardenContainer");
    gardenContainer.textContent = "🌻🌷🌼🌻🌷🌼🌻🌷🌼🌻🌷🌼🌻🌷🌼🌻🌷🌼🌻🌷🌼";
};

const hotDay = (event) => {
    const gardenContainer = document.querySelector("#gardenContainer");
    gardenContainer.textContent = "🌞🌴🌞🌴🌞🌴🌞🌴🌞🌴🌞🌴🌞🌴🌞🌴🌞🌴🌞🌴";
};

// this will control the sky that shows up as the user selects their sky
const selectSky = (event) => {
    const result = document.querySelector('#result');

    if (event.target.value == "snowy") {
        result.textContent = "🌨❄️☃️❄️☃️🌨❄️☃️❄️☃️🌨❄️☃️❄️☃️🌨❄️☃️❄️☃️🌨❄️☃️❄️☃️";
    } else if (event.target.value == "rainy") {
        result.textContent = "⛈☔️⛈☔️⛈☔️⛈☔️⛈☔️⛈☔️⛈☔️⛈☔️⛈☔️⛈☔️⛈☔️⛈☔️";
    } else if (event.target.value == "cloudy") {
        result.textContent = "☁️ 🌫☁️ 🌫☁️ 🌫☁️ 🌫☁️ 🌫☁️ 🌫☁️ 🌫☁️ 🌫";
    } else if (event.target.value == "sunny") {
        result.textContent = "☀️ 🌤 ☀️🌤☀️ 🌤 ☀️🌤☀️ 🌤 ☀️🌤☀️ 🌤 ☀️🌤☀️ 🌤 ☀️ ";
    };
};

// display city name
const updateCityName = (event) => {
    const cityName = document.querySelector('#city');
    cityName.textContent = event.target.value;
};

//// Wave 5 - Resetting the City name 
const resetCity = (event) => {
    const cityName = document.querySelector("#city");
    cityName.textContent = "Seattle";
};

// one place to register all our event handlers for the whole page
const registerEventHandlers= (event) => {

    const increaseButton = document.querySelector("#increaseTempButton");
    increaseButton.addEventListener("click", increaseTemp);

    const decreaseButton = document.querySelector("#decreaseTempButton");
    decreaseButton.addEventListener("click", decreaseTemp);

    const resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", resetCity);
    
    const textInput = document.querySelector("#name");
    textInput.addEventListener("input", updateCityName);

    const skySelection= document.querySelector("#skies");
    skySelection.addEventListener("change", selectSky);

};


// registering all the event handlers and exporting them  
document.addEventListener("DOMContentLoaded", registerEventHandlers);