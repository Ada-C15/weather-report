var tempTrack = 0
const incrementTemp = () => {
    const newTemp = document.createElement("span");
    const tempContainor = document.querySelector("#add-temp");
    const tempCountContainer = document.querySelector("#tempCount");
    const gardenContainer = document.querySelector("#garden-box");
    tempTrack += 1;
    if (tempTrack <= 40) {
        gardenContainer.textContent = "❄️☃️🏔🌌🧴🥶🎄🌲";
    } else if (tempTrack <= 60) {
        gardenContainer.textContent = "🐰🐣🦋🍀💐🌼🌞";
    } else if (tempTrack > 60) {
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
    const newTemp = document.createElement("span");
    const tempContainor = document.querySelector("#dec-temp");
    const tempCountCont = document.querySelector("#tempCount");
    const gardenContainer = document.querySelector("#garden-box");
    tempTrack -= 1;
    if (tempTrack <= 40) {
        gardenContainer.textContent = "❄️☃️⛷--🏔🌌🌧☕️--🥶🎄🌲";
    } else if (tempTrack <= 60) {
        gardenContainer.textContent = "🌤🐰--🌈🐣🦋--🍀💐--🌼🌞";
    } else if (tempTrack > 60) {
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
    const skyContainer = document.querySelector("#weather-select");
    const gardenBox = document.querySelector("#garden");

    const sky = skyContainer.value
    console.log(sky)
    if (sky === "sunny") {
        gardenBox.textContent = "☀️☀️☀️☀️☀️";
    } else if (sky === "cloudy") {
        gardenBox.textContent = "☁️☁️ ⛅️☁️ ⛅️☁️☁️ ⛅️☁️☁️ ⛅️☁️☁️ ⛅️☁️☁️";
    } else if (sky === "rainy") {
        gardenBox.textContent = "🌧🌧🌧🌧🌧🌧🌧🌧🌧🌧🌧🌧🌧🌧";
    } else if (sky === "snowy") {
        gardenBox.textContent = "🌨❄️🌨❄️🌨❄️🌨❄️🌨❄️🌨❄️🌨❄️🌨❄️🌨";
    }
};

const skyEventHandlers = () => {
    const selectSky = document.querySelector("#weather-select");
    selectSky.addEventListener("change", skyChanger);
};

document.addEventListener("DOMContentLoaded", skyEventHandlers);