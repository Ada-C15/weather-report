// TEMP  
const changeTemp = (temp) => {
    let tempColor = "yellow"
    let garden = "👙🌻🌞🩴🏖👙🌻🌞🩴🏖"
    if (temp > 85) {
        tempColor = "red";
        garden = "👙🌻🌞🩴🏖👙🌻🌞🩴🏖";
    } else if (temp > 75) {
        tempColor = "orange";
        garden = "⛲️⛵️🌤🌺🌳⛲️⛵️🌤🌺🌳"; 
    } else if (temp > 60){
        tempColor = "yellow";
        garden = "🌳🌲🌷☁️💨🌳🌲🌷☁️💨";
    } else if (temp > 50){
        tempColor = "green";
        garden = "☁️🌫🍂🌲🍃☁️🌫🍂🌲🍃";
    } else if (temp < 50){
        tempColor = "blue";
        garden = "🌬🍁❄️☃️🧥🌬🍁❄️☃️🧥";
    }
    
    const newGarden = document.querySelector("#garden-landscape");
    newGarden.textContent = garden
    return tempColor
}

const increaseTemp = () => {
    const newTemp = document.querySelector("#temp");
    const newTempValue = parseFloat(newTemp.textContent) + 1;
    tempColor = changeTemp(newTempValue);
    newTemp.className = tempColor;
    newTemp.textContent = String(newTempValue);
};

const decreaseTemp = () => {
    const newTemp = document.querySelector("#temp");
    const newTempValue = parseFloat(newTemp.textContent) - 1;
    tempColor = changeTemp(newTempValue);
    newTemp.className = tempColor;
    newTemp.textContent = String(newTempValue);
    
};


// SKY 
const skyView = (option) => {
    let currentSky =  "☀️☀️☀️☀️☀️☀️"
    if (option == "sunny") {
        currentSky = "☀️☀️☀️☀️☀️☀️";
    } else if (option=="cloudy") {
        currentSky = "☁️☁️☁️☁️☁️";
    } else if (option=="rainy") {
        currentSky = "🌧🌧🌧🌧🌧";
    } else if (option=="snowy") {
        currentSky = "🌨❄️🌨❄️🌨❄️";
    }
    const changeSky = document.querySelector("#garden-sky");
    changeSky.textContent = currentSky
}

const selectSky = () => {
    const sky_selection = document.querySelector("#sky-dropdown")
    skyView(sky_selection.value)
}


// CITY 
const changeCity = (event) => {
    let inputCity = document.querySelector("#city-name").value;
    let mainHeading = document.getElementById("default-city");
    if (!inputCity == "") {
        mainHeading.innerHTML = `Weather Report for: ${inputCity}`;
        inputCity.value = "";
    }
};

const resetCity = (event) => {
    let mainHeading = document.getElementById("default-city");
    mainHeading.innerHTML = "Weather Report for Seattle";
};


// EVENT HANDLERS
const registerEventHandlers = () => {
    const upButton = document.querySelector("#tempUpButton");
    upButton.addEventListener("click", increaseTemp);

    const downButton = document.querySelector("#tempDownButton");
    downButton.addEventListener("click", decreaseTemp);

    const skySelector = document.querySelector("#sky-dropdown")
    console.log(skySelector)
    skySelector.addEventListener("change", selectSky)

    const updateCity = document.querySelector("#change-city")
    updateCity.addEventListener("click", changeCity);

    const resetCityName = document.querySelector("#reset-city")
    resetCityName.addEventListener("click", resetCity);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);






