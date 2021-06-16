const state = {
    tempCount: 70
};


const updateTemp = tempValue => {
    const tempCountContainer = document.getElementById("tempValue");
    tempCountContainer.textContent = tempValue;
}
// Wave 2 - Increase Temp Behavior
const addNum = () => {
    state.tempCount += 1;
    updateTemp(tempValue);
};
// Wave 2- Decrease Temp Behavior
const subNum = () => {
    state.tempCount -= 1;
    updateTemp(tempValue);






// Wave 2 - Change Color of Temp
const tempRanges = () => {
    if (state.tempCount <= 49){
        document.getElementById("tempValue").style.color = "#008080";
    } else if (state.tempCount >= 50 && state.tempCount <= 59){
        document.getElementById("tempValue").style.color = "#00FF00";
    } else if (state.tempCount >= 60 && state.tempCount <= 69){
        document.getElementById("tempValue").style.color = "#FFF933";
    } else if (state.tempCount >= 70 && state.tempCount <= 79){
        document.getElementById("tempValue").style.color = "#FF5A33";
    } else (state.tempCount >= 80);{
        document.getElementById("tempValue").style.color = "#F8422D";
    }

}

// Wave 2 - Temperature Ranges Change Landscape
const tempLandscapeRanges = () => {
    if (state.tempCount <= 59){
        document.getElementById("landscape")= "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else if (state.tempCount >= 60 && state.tempCount <= 69){
        document.getElementById("landscape") = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (state.tempCount >= 70 && state.tempCount <= 79){
        document.getElementById("landscape") = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else (state.tempCount >= 80);{
        document.getElementById("landscape") = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    }


}

// Wave 3 - Selecting the Sky

//selectElement.addEventListener('change', (event) => {
const updateSky = () => {
    const chosenSky = document.getElementById("skySelect").value;
    const skyContainer = document.getElementById("sky");
    if (chosenSky === "Sunny"){
        skyContainer  =  "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    }else if (chosenSky === "Cloudy"){ 
        skyContainer = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    }else if (chosenSky === "Rainy"){
        skyContainer = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    }else if (chosenSky === "Snowy"){
        skyContainer = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
}
}




// Wave 4 --  Naming the City
const updateCityName = () => {
    const cityName = document.getElementById("cityNameInput").value;
    const nameContainer = document.getElementById("cityName")
    nameContainer.textContent = cityName;
}



// Wave 5 - Resetting the City name 
const resetCity = (event) => {
    const resetCityContainer = document.querySelector("addRestButton")
    resetCityContainer.textContent = 'Sunny Seattle';
    };
    
    }



const registerEventHandlers = () => {
    updateTemp(tempValue);

    // Wave 2 - Increase Temp
    const adduparrow = document.querySelector("adduparrow");
    adduparrow.addEventListener("click", addNum);
    };
    
    // Wave 2 - Decrease Temp 
    const adddownarrow = document.getElementById("adddownarrow");
    adddownarrow.addEventListener("click", subNum);
//const tempButton = document.querySelector("#adddownarrow");
//tempButton.addEventListener("click", subNum);
//};

    // Wave 4 - Naming the City
    updateCityName();
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.addEventListener("input", updateCityName);


    // Wave 5 - Resetting the City Name
    const cityNameResetButton = document.getElementById("addResetButton");
    cityNameResetButton.addEventListener("click", resetCity);


    // Wave 3 - Selecting the Sky
    updateSky();
    const skySelect = document.getElementById("skySelect");
    skySelect.addEventListener("change", updateSky);

    

document.addEventListener("DOMContentLoaded", registerEventHandlers);