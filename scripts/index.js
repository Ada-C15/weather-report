let tempTrack = 0
const resetDefaultCityName = "Seattle"
const incrementTemp = () => {
    // const newTemp = document.createElement("span");
    const tempContainor = document.querySelector("#add-temp");
    const tempCountContainer = document.querySelector("#tempCount");
    const gardenContainer = document.querySelector("#garden-box");
    tempTrack += 1;
    if (tempTrack<= 40){
        gardenContainer.textContent = "❄️☃️🏔🌌🥶🎄🌲";
    } else if (tempTrack <= 60){
        gardenContainer.textContent = "🐰🐣🦋🍀💐🌼🌞";
    }else if (tempTrack > 65) {
        gardenContainer.textContent = "🌴🏞🍦🌊🌅🏝🌳🌹☀️🥭🍍🍸";
    }
    tempCountContainer.textContent = `${tempTrack}`;
};
const registerEventHandlers = () => {
    const upArrow = document.querySelector("#add-temp");
    upArrow.addEventListener("click", incrementTemp);
};
document.addEventListener("DOMContentLoaded", registerEventHandlers);


const decreasedTemp = () => {
    // const newTemp = document.createElement("span");
    const tempContainor = document.querySelector("#dec-temp");
    const tempCountCont= document.querySelector("#tempCount");
    const gardenContainer= document.querySelector("#garden-box");
    tempTrack -= 1;
    if (tempTrack<= 50){
        gardenContainer.textContent = "❄️☃️⛷--🏔🌌🌧☕️--🥶🎄🌲";
    } else if (tempTrack <= 65){
        gardenContainer.textContent = "🌤🐰--🌈🐣🦋--🍀💐--🌼🌞";
    }else if (tempTrack > 65) {
        gardenContainer.textContent = "🌴🏞--🍦🌊--🌅🏝--🌳🌹--☀️🥭🍍🍸";
    }
    tempCountCont.textContent = `${tempTrack}`;
    console.log("It Works")
    
    console.log(tempTrack)
};
const decreasedEventHandlers = () => {
    const downArrow = document.querySelector("#dec-temp");
    downArrow.addEventListener("click", decreasedTemp);
};
document.addEventListener("DOMContentLoaded", decreasedEventHandlers);

const skyChanger = () => {
    const newTemp = document.createElement("span");
    const skyContainer= document.querySelector("#weather-select");
    const gardenBox= document.querySelector("#garden");

    const sky = skyContainer.value
    console.log(sky)
    if (sky === "sunny") {
        gardenBox.textContent = "☀️☀️☀️☀️☀️";
    } else if (sky === "cloudy") {
        gardenBox.textContent = "☁️☁️ ⛅️☁️ ⛅️☁️☁️ ⛅️☁️☁️ ⛅️☁️☁️ ⛅️☁️☁️";
    } else if (sky === "rainy" ) {
        gardenBox.textContent = "🌧🌧🌧🌧🌧🌧🌧🌧🌧🌧🌧🌧🌧🌧";
    } else if (sky === "snowy"){
        gardenBox.textContent = "🌨❄️🌨❄️🌨❄️🌨❄️🌨❄️🌨❄️🌨❄️🌨❄️🌨";
    }
};

const skyEventHandlers = () => {
    const selectSky = document.querySelector("#weather-select");
    selectSky.addEventListener("change", skyChanger);
};

document.addEventListener("DOMContentLoaded", skyEventHandlers);


const upDatesCity = (cityName) => {
    const outPutBox = document.querySelector("#city_name_display");
    outPutBox.textContent = "For the city of: " + cityName

};

const displayCityName = () => {
    const newTemp = document.createElement("span");
    const inputBox = document.querySelector("#city_input_name");
    // const cityCount= document.querySelector("#reset_button");
    upDatesCity(inputBox.value)
};

const nameEventHandlers = () => {
    const selectCity = document.querySelector("#city_input_name");
    selectCity.addEventListener("input", displayCityName );
};

document.addEventListener("DOMContentLoaded", nameEventHandlers);


const resetCityName = () => {
    upDatesCity(resetDefaultCityName)
    const inputBox = document.querySelector("#city_input_name");
    inputBox.value = resetDefaultCityName
}

const resetEventHandlers = () => {
    const selectCity = document.querySelector("#reset_button");
    selectCity.addEventListener("click", resetCityName );
};

document.addEventListener("DOMContentLoaded", resetEventHandlers);


