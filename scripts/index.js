
const decreaseTemp = () => {
    const tempContainer = document.getElementById('showTempValue');
    let currentTemp = tempContainer.textContent -= 1;
    changeByTemp(currentTemp);
};

const increaseTemp = () => {
    const tempContainer = document.getElementById('showTempValue');
    let currentTemp = tempContainer.textContent = parseInt(tempContainer.textContent, 10) + 1;
    changeByTemp(currentTemp);
};

const changeByTemp = (currentTemp) => {
    const gardenContainer = document.getElementById('garden-garden');
    const tempContainer = document.querySelector('#showTempValue');

    if (currentTemp <= 49) {
        gardenContainer.textContent = '🌲❄️⛄️❄️⛄️❄️⛄️❄️🌲';
        tempContainer.className = 'blue';
    }
    else if (currentTemp <= 59) {
        gardenContainer.textContent = '🍁🌲🍁🍂🌲🍁🌲🍁🍂';
        tempContainer.className = 'teal'
    }
    else if (currentTemp <= 69) {
        gardenContainer.textContent = '🌲🍄🌿🌸🌿🍄🌲';
        tempContainer.className = 'green'
    }
    else if (currentTemp <= 79) {
        gardenContainer.textContent = '🌸🌱🌼__🌷🌻🌿🌱_🌻🌷';
        tempContainer.className = 'yellow'
    }
    else if (currentTemp <= 89) {
        gardenContainer.textContent = '🌴__🥵_🏜_🌴__🐊_🏜';
        tempContainer.className = 'orange'
    }
    else if (currentTemp >= 90) {
        gardenContainer.textContent = '🔥🌵🦀🌵🦀🌵🦀🌵🔥';
        tempContainer.className = 'red'
    }
};

const selectSky = (event) => {
    const gardenContainer = document.getElementById('garden-sky');
    let userInput = event.target;
    if (userInput.value === 'sunny') {
        gardenContainer.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️'
    }
    else if (userInput.value === 'cloudy') {
        gardenContainer.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁';
    }
    else if (userInput.value === 'rainy') {
        gardenContainer.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    }
    else if (userInput.value === 'snowy') {
        gardenContainer.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨'
    }

};

const updateCity = () => {
    const userInput = document.getElementById('cityUserInput').value;
    const cityContainer = document.getElementById('displayCity');
    cityContainer.textContent = userInput
}

const resetCityInput = () => {
    cityContainer = document.getElementById('displayCity');
    cityContainer.textContent = 'Ravaged By Climate Change';
    inputContainer = document.getElementById('cityUserInput')
    inputContainer.value = '';
}



const addDecreaseButton = document.getElementById("temp-decrease");
const addIncreaseButton = document.getElementById("temp-increase");
const skySelector = document.getElementById('selectSky');
const cityHeader = document.getElementById('cityUserInput');
const resetButton = document.getElementById('resetCity');

addDecreaseButton.addEventListener('click', decreaseTemp);
addIncreaseButton.addEventListener('click', increaseTemp);
skySelector.addEventListener('change', selectSky);
cityHeader.addEventListener('input', updateCity);
resetButton.addEventListener('click', resetCityInput);


