const state = {
    temperature: parseFloat(document.querySelector("#temperature").textContent)
};

/////////// TEMP FUNCTIONS /////////////
const increaseTemp = () => {
    const tempElement = document.querySelector("#temperature")
    state.temperature += 1
    tempElement.textContent = state.temperature 
    pickSeason(state.temperature)
};

const decreaseTemp = () => {
    const tempElement = document.querySelector("#temperature")
    state.temperature -= 1
    tempElement.textContent = state.temperature
    pickSeason(state.temperature) 
};

const pickSeason = (temp) => {
    text = document.querySelector("#temperature")
    if (temp <= 45) {    
        populateGardenTemp("❄️⛸️☃️☃️❄️⛸️⛸️☃️☃️❄️⛸️⛸️☃️☃️⛸️❄️")
        text.style.color = "#69a4ed"
    }
    else if (temp > 45 && temp < 70) {    
        populateGardenTemp("🌱🌻🐝🍁🍃🍃🌻🌱🌻🐝🍁🍃🍃🌻")
        text.style.color = "#ebcf12"
    } 
    else if (temp >= 70 && temp < 85) {    
        populateGardenTemp("☀️🏖️🍦🍉☀️🏖️🍦🍉☀️🏖️🍦🍉☀️🏖️🍦🍉")
        text.style.color = "orange"
    } 
    else if (temp >= 85) {    
        populateGardenTemp("🥵🌵🌵🌵🌵🥵🥵🌵🌵🌵🌵🥵🥵🌵🌵🌵")
        text.style.color = "red"
    };
};

const populateGardenTemp = (temp) => {
    const gardenTemp = document.createElement("span");
    const gardenTempContainer = document.querySelector("#gardenTempContainer");
    gardenTempContainer.replaceChildren()
    gardenTemp.textContent = temp;
    gardenTempContainer.appendChild(gardenTemp);
}

///////////// SKY FUNCTIONS ////////////
const populateSkyTemp = () => {
    const gardenSky = document.createElement("span");
    const gardenSkyContainer = document.querySelector("#gardenSkyContainer");
    gardenSkyContainer.replaceChildren()
    const selection = document.querySelector("#skyType").value;
    // const selection = document.querySelector(".skyType select option:checked");
    // const selection = document.querySelector(".skyType select").selectIndex;
    
    if (selection === "Sunny") {    
        gardenSky.textContent = "☀️☀️☀️☀️☀️☀️☀️🌞🌞🌞🌞☀️☀️☀️☀️☀️☀️☀️"
    }
    else if (selection === "Cloudy") {    
        gardenSky.textContent = "☁️⛅⛅☁️☁️☁️☁️☁️☁️⛅⛅☁️☁️☁️☁️☁️⛅⛅☁️"
    }
    else if (selection === "Rainy") {    
        gardenSky.textContent = "🌧️🌧️☔☔🌧️🌧️🌧️🌧️☔☔🌧️🌧️🌧️🌧️☔☔🌧️🌧️🌧"
    }
    else if (selection === "Snowy") {    
        gardenSky.textContent = "❄️❄️❄️☃️☃️❄️❄️❄️☃️❄️❄️❄️☃️☃️❄️❄️❄️"
    };
    // gardenSky.textContent = "WEATHER!";
    gardenSkyContainer.appendChild(gardenSky);
};


///////////// CITY FUNCTIONS ////////////

//////to disply the city name in one go ////////
// const displayCity = (event) => {
//     event.preventDefault();
//     const cityDisplay = document.createElement("div");
//     const cityContainer = document.querySelector("#cityContainer");
//     cityContainer.replaceChildren()
//     const enteredCity = document.querySelector("#city").value;
//     cityDisplay.textContent = enteredCity;
//     cityContainer.appendChild(cityDisplay);
// }

//////to display the city one letter at a time///////
const displayCity = () => {
    const cityDisplay = document.createElement("span");
    const cityContainer = document.querySelector("#cityContainer");
    const enteredLetter = document.querySelector("#city").value;
    cityDisplay.textContent = enteredLetter;
    cityContainer.replaceChildren(cityDisplay);
}

const resetCity = (event) => {
    event.preventDefault();
    const cityContainer = document.querySelector("#cityContainer");
    cityContainer.replaceChildren("")
}


const registerEventHandlers = (event) => {
    const upButton = document.querySelector("#increaseTempButton");
    upButton.addEventListener("click", increaseTemp);

    const downButton = document.querySelector("#decreaseTempButton");
    downButton.addEventListener("click", decreaseTemp);

    const skySelect = document.querySelector("#skyType");
    skySelect.addEventListener("change", populateSkyTemp);

    //////to disply the city name in one go ////////
    // const showCity = document.querySelector("#cityInput");
    // showCity.addEventListener("submit", displayCity);     
    
    //////to display the city one letter at a time///////
    const showCity = document.querySelector("#cityInput");
    showCity.addEventListener("keyup", displayCity); 

    const clearCity = document.querySelector("#cityInput");
    clearCity.addEventListener("submit", resetCity); 
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);