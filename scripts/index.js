
const state =  {
    temperature : 70
};

const gardenWeatherEmojis = () => {
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
// not working
// function to update id=temperature in tempContainer
const increaseTemp = () => {
    console.log("increaseTemp called")
    const temperature = document.querySelector("#temperature")
    state.temperature += 1;
    temperature.textContent = `${state.temperature}`
    gardenWeatherEmojis()
};
// not working
// function to update id=temperature in tempContainer
const decreaseTemp = () => {
    console.log("decreaseTemp called")
    const temperature = document.querySelector("#temperature")
    state.temperature -= 1;
    temperature.textContent = `${state.temperature}`
};
// not working
// function to update emojis in weatherGardenContainer by id=landscape  

// const updateSky = () => {
//     console.log("updateSkyCalled")
//     const inputSky = document.querySelector("#skySelect").value;
//     const skyContainer = document.getElementById("sky");
//     let sky = '';
//     let skyColor = '';
//     if (inputSky === "Brilliant Sun");
//         sky = '🔥🔥🔥🔥☀🔥🔥🔥☀🔥🔥🔥🔥';
//         skyColor = 'sunny'
//     if(inputSky === "Dashes of Clouds");
//         sky = '🌥🌥🌥🌥 🌥🌥🌥🌥 🌥🌥🌥🌥';
//         skyColor = "cloudy"
//     if (inputSky === "Clear");
//         sky = '🌎🌎🌎 🌎🌎🌎 🌎🌎🌎 🌎🌎🌎'
//         skyColor = "clear"
//     if (inputSky === 'Rain Drops');
//         sky = "🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊"
//         skyColor = "rainy"
//     skyContainer.textContent = sky;
//     const gardenContent = document.querySelector("#gardenContent");
//     gardenContent.classList = `gardenContent ${skyColor}`;
// };


//function that registers all event handlers when called
const registerEventHandlers = () => {
    console.log("registerEventHandlers called")
    const increaseTempButton = document.querySelector("#increaseTemp");
    increaseTempButton.addEventListener("click",increaseTemp);
    
    const decreaseTempButton = document.querySelector("#decreaseTemp");
    decreaseTempButton.addEventListener("click", decreaseTemp);


    
    // updateSky()
    // const skySelect = document.querySelector('#skySelect');
    // skySelect.addEventListener("change",updateSky)
    
};
document.addEventListener("DOMContentLoaded", registerEventHandlers);