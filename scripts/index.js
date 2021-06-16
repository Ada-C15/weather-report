const state = {
    temperature: parseFloat(document.querySelector("#temperature").textContent)
};

//   const addCrab = (event) => {
//     const newCrab = document.createElement("span");
//     const crabContainer = document.querySelector("#crabContainer");
//     newCrab.textContent = "🦀";
//     crabContainer.appendChild(newCrab);

//     // Crab Count Behavior
//     state.crabCount += 1;
//     const crabCountContainer = document.querySelector("#crabCount")
//     crabCountContainer.textContent = `Crab Count: ${state.crabCount}`;
//   };

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
    if (temp <= 45) {    
        populateGardenTemp("❄️⛸️☃️☃️❄️⛸️⛸️☃️☃️❄️⛸️⛸️☃️☃️⛸️❄️")
    }
    else if (temp > 45 && temp < 70) {    
        populateGardenTemp("🌱🌻🐝🍁🍃🍃🌻🌱🌻🐝🍁🍃🍃🌻")
    } 
    else if (temp >= 70 && temp < 85) {    
        populateGardenTemp("☀️🏖️🍦🍉☀️🏖️🍦🍉☀️🏖️🍦🍉☀️🏖️🍦🍉")
    } 
    else if (temp >= 85) {    
        populateGardenTemp("🥵🌵🌵🌵🌵🥵🥵🌵🌵🌵🌵🥵🥵🌵🌵🌵")
    };
};

const populateGardenTemp = (temp) => {
    const gardenTemp = document.createElement("span");
    const gardenTempContainer = document.querySelector("#gardenTempContainer");
    gardenTempContainer.replaceChildren()
    gardenTemp.textContent = temp;
    gardenTempContainer.appendChild(gardenTemp);
}

///////////// SKY FUNCTION ////////////
const sky = document.querySelector("#skyType").selectedIndex


// document.querySelector(".quantityDropdown select").selectedIndex
// quantity = document.querySelector(".quantityDropdown select").value;
// var quantity = document.querySelector(".quantityDropdown select option:checked");
// var quantity = document.querySelector(".quantityDropdown select")[document.querySelector(".quantityDropdown select").selectedIndex].innerHTML;


const populateSkyTemp = () => {
    const gardenSky = document.createElement("span");
    const gardenSkyContainer = document.querySelector("#gardenSkyContainer");
    gardenSkyContainer.replaceChildren()
    // const selection = document.querySelector(".skyType select option:checked");
    // const selection = document.querySelector(".skyType select").selectIndex;
    const selection = document.querySelector("#skyType").value;

    if (selection === "Sunny") {    
        gardenSky.textContent = "☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️🌞🌞🌞🌞☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️"
    }
    else if (selection === "Cloudy") {    
        gardenSky.textContent = "☁️☁️☁️☁️☁️⛅⛅☁️☁️☁️☁️☁️☁️⛅⛅☁️☁️☁️☁️☁️☁️☁️⛅⛅☁️☁️☁️☁️☁️☁️"
    }
    else if (selection === "Rainy") {    
        gardenSky.textContent = "🌧️🌧️🌧️🌧️🌧️🌧️🌧️☔☔🌧️🌧️🌧️🌧️🌧️🌧️🌧️☔☔🌧️🌧️🌧️🌧️🌧️🌧️🌧️☔☔🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️"
    }
    else if (selection === "Snowy") {    
        gardenSky.textContent = "❄️❄️❄️❄️❄️❄️❄️☃️☃️❄️❄️❄️❄️❄️❄️❄️☃️☃️❄️❄️❄️❄️❄️❄️❄️❄️☃️☃️❄️❄️❄️❄️❄️❄️❄️❄️❄❄️"
    };
    // gardenSky.textContent = "WEATHER!";
    gardenSkyContainer.appendChild(gardenSky);
};

const registerEventHandlers = (event) => {
    const upButton = document.querySelector("#increaseTempButton");
    upButton.addEventListener("click", increaseTemp);

    const downButton = document.querySelector("#decreaseTempButton");
    downButton.addEventListener("click", decreaseTemp);

    const skySelect = document.querySelector("#skyType");
    skySelect.addEventListener("change", populateSkyTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);