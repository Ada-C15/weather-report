
const state = {
    temp: 65,
    sky: "sunny",
    land: "None"
};

// get temp buttons
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');

// change bg
function changeBackground(temp) {
    if (temp < 29) {
        document.body.style.backgroundColor = 'grey';
    }
    else if (temp < 39) {
        document.body.style.backgroundColor = 'blue';
    }
    else if (temp < 49) {
        document.body.style.backgroundColor = 'teal';
    }
    else if (temp < 59) {
        document.body.style.backgroundColor = 'green';
    }
    else if (temp < 69) {
        document.body.style.backgroundColor = 'yellow';
    }
    else if (temp < 79) {
        document.body.style.backgroundColor = 'orange';
    }
    else if (temp > 80) {
        document.body.style.backgroundColor = 'red';
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

// emojis
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

// Option	Sky
// Sunny	"☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
// Cloudy	"☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
// Rainy	"🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
// Snowy	"🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
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

