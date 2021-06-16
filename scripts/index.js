const state = {
    temp: 65,
    sky: "sunny",
    city: "nowhere"
};

// get temp buttons
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');

// change bg and lanscape
function changeBackground(temp) {
    // get landspan to update icons
    const newLand = document.querySelector("#land-icons");

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

// minus actions
minusButton.addEventListener('click', event => {
    const tempContainer = document.querySelector("#tempDisplay");
    state.temp -= 1;
    tempContainer.textContent = `${state.temp}`;
    // change background color depending on temp 
    changeBackground(state.temp);
});

// plus actions
plusButton.addEventListener('click', event => {
    const tempContainer = document.querySelector("#tempDisplay");
    state.temp += 1;
    tempContainer.textContent = `${state.temp}`;
    changeBackground(state.temp);
});

// get sky container
const skyContainer = document.getElementById('sky-icon-container');
const groundContainter = document.getElementById('land-icon-container');

// get menu options
const dropdownOptions = document.querySelectorAll('.dropdown .option');

// each sky option has an event listener.
dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));

// when options is selected, pass option content to select sky emojis
function handleOptionSelected(event){
    // get id from option selected
	const typeSky = event.target.id;

    // update state
    state.sky = typeSky;

    // update emoji
    updateSky(typeSky);

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

// update displayed city
const cityDisplay = document.querySelector("#cityDisplay");
const input = document.querySelector("#input");

input.addEventListener('keyup', event => {
    cityDisplay.textContent = event.target.value;
});

// reset clears input field
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener('click', event => {
    input.value = "";
    cityDisplay.textContent = state.city;
})
