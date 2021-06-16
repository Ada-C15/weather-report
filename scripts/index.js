
const state =  {
    temperature : 70
};

const increaseTemp = () => {
    console.log("increaseTemp called")
    const temperature = document.querySelector("#temperature")
    state.temperature += 1;
    temperature.textContent = `${state.temperature}`
};

const decreaseTemp = () => {
    console.log("decreaseTemp called")
    const temperature = document.querySelector("#temperature")
    state.temperature -= 1;
    temperature.textContent = `${state.temperature}`
};

const gardenWeatherEmojis = () => {
    const gardenLandscape = document.querySelector("#landscape");
    const temperature = document.querySelector("#temperature")
    
    if (temperature >= 80) {
        gardenLandscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    }   else if (temperature < 80 && state.temperature >=70) {
            gardenLandscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    }   else if (temperature < 70 && state.temperature >= 60) {
            gardenLandscape.textContent= "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    }   else if (temperature < 60){
        gardenLandscape.textContent= "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
};
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


const registerEventHandlers = () => {
    console.log("registerEventHandlers called")
    const increaseTemp = document.querySelector("#increaseTemp");
    increaseTemp.addEventListener("click",increaseTemp);
    
    const decreaseTemp = document.querySelector("#decreaseTemp");
    decreaseTemp.addEventListener("click", decreaseTemp);


    
    // updateSky()
    // const skySelect = document.querySelector('#skySelect');
    // skySelect.addEventListener("change",updateSky)
    
};
document.addEventListener("DOMContentLoaded", registerEventHandlers);