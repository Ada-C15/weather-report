
const state =  {
    temperature : 70
};
//function to update garden emojis
const gardenWeatherEmojis = () => {
    console.log("gardenWeatherEmojis called")
    const gardenLandscape = document.querySelector("#landscape");
    
    if (state.temperature >= 80) {
        gardenLandscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    }   else if (state.temperature < 80 && state.temperature >=70) {
            gardenLandscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    }   else if (state.temperature < 70 && state.temperature >= 60) {
            gardenLandscape.textContent= "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    }   else if (state.temperature < 60) {
        gardenLandscape.textContent= "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
};

const updateSky = () => {
    console.log("updateSkyCalled")
    // gardenSky.value allows us access what the user has chosen in dropdown menu
    const gardenSky = document.querySelector("#skySelect");
    let sky = '';
    // skyColor values need to coordinate with CSS file for color values
    let skyColor = '';
    // gardenSky.value allows us access what the user has chosen in dropdown menu
    if (gardenSky.value === "sun"){
        sky = '🔥🔥🔥🔥☀🔥🔥🔥☀🔥🔥🔥🔥';
        skyColor = 'sunny';
    } else if (gardenSky.value === "clouds"){
        sky = '🌥🌥🌥🌥 🌥🌥🌥🌥 🌥🌥🌥🌥';
        skyColor = "cloudy";
    } else if (gardenSky.value  === "clear") {
        sky = '🌎🌎🌎 🌎🌎🌎 🌎🌎🌎 🌎🌎🌎';
        skyColor = "clear";
    } else if (gardenSky.value === 'rain') {
        sky = "🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊";
        skyColor = "rainy";
    }
    console.log(gardenSky,"gardenSky value")
    const emojiPlacement = document.querySelector("#emojiSky")
    emojiPlacement.textContent = sky;
};


// function to update id=temperature in tempContainer
const increaseTemp = () => {
    console.log("increaseTemp called")
    const temperature = document.querySelector("#temperature")
    state.temperature += 1;
    temperature.textContent = `${state.temperature}`
    gardenWeatherEmojis()
};

// function to update id=temperature in tempContainer
const decreaseTemp = () => {
    console.log("decreaseTemp called")
    const temperature = document.querySelector("#temperature")
    state.temperature -= 1;
    temperature.textContent = `${state.temperature}`
    gardenWeatherEmojis()
};
// not working
// function to update emojis in weatherGardenContainer by id=landscape  




//function that registers all event handlers when called
const registerEventHandlers = () => {
    console.log("registerEventHandlers called")
    const increaseTempButton = document.querySelector("#increaseTemp");
    increaseTempButton.addEventListener("click",increaseTemp);
    
    const decreaseTempButton = document.querySelector("#decreaseTemp");
    decreaseTempButton.addEventListener("click", decreaseTemp);

    const updateSkyDropDown = document.querySelector("#skySelect")
    updateSkyDropDown.addEventListener("change",updateSky)

    
    // updateSky()
    // const skySelect = document.querySelector('#skySelect');
    // skySelect.addEventListener("change",updateSky)
    
};
document.addEventListener("DOMContentLoaded", registerEventHandlers);