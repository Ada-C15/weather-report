var tempTrack = 57  // STARTING TEMP AT 57 SO I CAN TEST IT EASIER
const resetDefaultCityName = "Seattle"

// TEMP DECREASE
const incrementTemp = () => {
    const tempCountContainer = document.querySelector("#tempCount");
    const gardenContainer = document.querySelector("#garden-box");
    tempTrack += 1;
    if (tempTrack <= 59) {
        gardenContainer.textContent = "^❄️☃️⛷--🏔🌌☕️🍂--🥶🎄🏂--🏔️❄️⛄️--🧣🍁^";
    } else if (tempTrack <= 69) {
        gardenContainer.textContent = "^🌤🐰🌱 --🌈🐣🦋--🍀💐🌷--🌼🌞☔--🌧🧥🌸^";
    } else if (tempTrack <= 79) {
        gardenContainer.textContent = "^🌴🦩⛱️--🍦🌊😎--🌅🏝🌺--👙🩴🏊‍🏄‍♂️--🥭🍍🍸^";
    } else if (tempTrack > 80) {
        gardenContainer.textContent = "^🏜️🐪😵--♨️🏖️🦎--🌅🏝--🥵🌵--🔥💥🥀^";
    }
    tempCountContainer.textContent = `${tempTrack}`;
};
const registerEventHandlers = () => {
    const upArrow = document.querySelector("#add-temp");
    upArrow.addEventListener("click", incrementTemp);
};
document.addEventListener("DOMContentLoaded", registerEventHandlers);



// TEMP DECREASE
const decreasedTemp = () => {
    const tempCountCont = document.querySelector("#tempCount");
    const gardenContainer = document.querySelector("#garden-box");
    tempTrack -= 1;
    if (tempTrack <= 59) {
        gardenContainer.textContent = "v❄️☃️⛷--🏔🌌☕️🍂--🥶🎄🏂--🏔️❄️⛄️--🧣🍁v";
    } else if (tempTrack <= 69) {
        gardenContainer.textContent = "v🌤🐰🌱 --🌈🐣🦋--🍀💐🌷--🌼🌞☔--🌧🧥🌸v";
    } else if (tempTrack <= 79) {
        gardenContainer.textContent = "v🌴🦩⛱️--🍦🌊😎--🌅🏝🌺--👙🩴🏊‍🏄‍♂️--🥭🍍🍸v";
    } else if (tempTrack > 80) {
        gardenContainer.textContent = "v🏜️🐪😵--♨️🏖️🦎--🌅🏝--🥵🌵--🔥💥🥀v";
    }
    tempCountCont.textContent = `${tempTrack}`;

};
const decreasedEventHandlers = () => {
    const downArrow = document.querySelector("#dec-temp");
    downArrow.addEventListener("click", decreasedTemp);
};
document.addEventListener("DOMContentLoaded", decreasedEventHandlers);


// COLOR TEMP CHANGER
const tempNumbersChangeColor = () => {
    console.log("we got here")
    const tempContainor = document.querySelector("#temp-Container");
    if (tempTrack >= 80) {
        tempContainor.classList = ("too-hot");
    } else if (tempTrack >= 70) {
        tempContainor.classList = ("just-right");
    } else if (tempTrack >= 60) {
        tempContainor.classList = ("fresh");
    } else if (tempTrack >= 50) {
        tempContainor.classList = ("getting-cold");
    } else if (tempTrack <= 49) {
        tempContainor.classList = ("too-cold");
    }

};

const changeColorNumberEventHandlers = () => {
    const downArrow = document.querySelector("#tempCount");
    downArrow.addEventListener("click", tempNumbersChangeColor);
};
document.addEventListener("DOMContentLoaded", changeColorNumberEventHandlers);


// SKY AESTHETIC CHANGER 
const skyAesthetic = () => {
    const newTemp = document.createElement("span");
    const skyContainer = document.querySelector("#weather-select");
    const gardenBox = document.querySelector("#garden");

    const sky = skyContainer.value
    console.log(sky)
    if (sky === "sunny") {
        gardenBox.textContent = "☀️☁️☁️ 🌞 ☁️☀️☁️☁️ 🌞☁️☁️☀️☁️☁️";
    } else if (sky === "cloudy") {
        gardenBox.textContent = "☁️☁☁☁🌤 ☁️☁️☁️🌤 ☁️🌤☁️☁️";
    } else if (sky === "rainy") {
        gardenBox.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else if (sky === "snowy") {
        gardenBox.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    }
};

const skyEventHandlers = () => {
    const selectSky = document.querySelector("#weather-select");
    selectSky.addEventListener("change", skyAesthetic);
};

document.addEventListener("DOMContentLoaded", skyEventHandlers);


const upDatesCity = (cityName) => {
    const outPutBox = document.querySelector("#city_name_display");
    outPutBox.textContent = "For the city of: " + cityName

};

const displayCityName = () => {
    const inputBox = document.querySelector("#city_input_name");
    upDatesCity(inputBox.value)
};

const nameEventHandlers = () => {
    const selectCity = document.querySelector("#city_input_name");
    selectCity.addEventListener("input", displayCityName);
};

document.addEventListener("DOMContentLoaded", nameEventHandlers);


const resetCityName = () => {
    upDatesCity(resetDefaultCityName)
    const inputBox = document.querySelector("#city_input_name");
    inputBox.value = resetDefaultCityName
}

const resetEventHandlers = () => {
    const selectCity = document.querySelector("#reset_button");
    selectCity.addEventListener("click", resetCityName);
};

document.addEventListener("DOMContentLoaded", resetEventHandlers);