const state = {
    temp: 65,
    sky: "sunny",
    city: "nowhere"
};

// get sky container
const skyContainer = document.getElementById('sky-icon-container');
const groundContainter = document.getElementById('land-icon-container');

// get icons
const newSky = document.querySelector("#sky-icons");
const newLand = document.querySelector("#land-icons");

function changeBackground(temp) {
    const newLand = document.querySelector("#land-icons");
    newLand.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";

    if (temp < 29) {
        document.body.style.backgroundColor = '#393D3F';
        newLand.textContent = "🧊🧊🧊🧊🧊🧊🧊🧊";
    }
    else if (temp < 39) {
        document.body.style.backgroundColor = '#546A7B';
        newLand.textContent = "🧊___🧊❄️__🧊🧊❄️_🧊❄️🧊";
    }
    else if (temp < 49) {
        document.body.style.backgroundColor = '#62929E';
        newLand.textContent = "☃️❄️🌲__☃️☃️_❄️🌲☃️❄️__🌲";
    }
    else if (temp < 59) {
        document.body.style.backgroundColor = '#988F2A';
        newLand.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
    else if (temp < 69) {
        document.body.style.backgroundColor = '#FED766';
        newLand.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    }
    else if (temp < 79) {
        document.body.style.backgroundColor = '#FE5F00';
        newLand.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    }
    else if (temp > 80) {
        document.body.style.backgroundColor = 'red';
        newLand.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } 
}

function updateSky(skyType) {
    const newSky = document.querySelector("#sky-icons");
    if (skyType === "sunny") {
        newSky.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    } else if (skyType === "cloudy") {
        newSky.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    } else if (skyType === "rainy"){
        newSky.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else if (skyType === "snowy"){
        newSky.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    }
}

// reset clears input field
const resetDisplay = () => {
    input.value = "";
    cityDisplay.textContent = state.city;
    newLand.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    newSky.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    document.body.style.backgroundColor = 'rgb(109, 107, 107)';
}

const specialDisplay = () => {
    newSky.textContent = "💥🦇💥💥🦇";
    document.body.style.backgroundColor = 'black';
    newLand.textContent = "🔥👺🔥👹_👹🔥🔥👺";
}

const updateInput = (event) => {
    const cityDisplay = document.querySelector("#cityDisplay");
    cityDisplay.textContent = event.target.value;
    if (cityDisplay.textContent === "hell") {
        specialDisplay();
    }
}

const decrTemp = () => {
    const tempContainer = document.querySelector("#tempDisplay");
    state.temp -= 1;
    tempContainer.textContent = `${state.temp}`;
    changeBackground(state.temp);
}

const incrTemp = () => {
    const tempContainer = document.querySelector("#tempDisplay");
    state.temp += 1;
    tempContainer.textContent = `${state.temp}`;
    changeBackground(state.temp);
    
}

// when options is selected, pass option content to select sky emojis
function handleOptionSelected(event){
    // get id from option selected
	const typeSky = event.target.id;

    // update state
    state.sky = typeSky;

    // update emoji
    updateSky(typeSky);
}

const registerEventHandlers = (event) => {
    const minusButton = document.getElementById('minus');
    minusButton.addEventListener('click', decrTemp);

    const plusButton = document.getElementById('plus');
    plusButton.addEventListener('click', incrTemp);

    const resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener('click', resetDisplay);
    
    const input = document.querySelector("#input");
    input.addEventListener('keyup', updateInput);

    // get menu options
    const dropdownOptions = document.querySelectorAll('.dropdown .option');

    // each sky option has an event listener.
    dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);