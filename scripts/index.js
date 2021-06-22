// Variables that are representing Elements
let btnAdd = document.getElementById('add');
let btnSubtract = document.getElementById('subtract');
let tempInput = document.getElementById('temp_id');
let landscape = document.getElementById('landscape');
let skiesInput = document.getElementById('sky-select');
let skiesLandscape = document.getElementById('sky-landscape');





function countUp(element) {
    element.value = parseInt(element.value) + 1;
}

function countDown(element) {
    element.value = parseInt(element.value) - 1;
}

function determineColor() {
    if (tempInput.value >= 80) {
        tempInput.style.color = 'red';
    } else if (tempInput.value >= 70 && tempInput.value <= 79) {
        tempInput.style.color = 'orange';
    } else if (tempInput.value >= 60 && tempInput.value <= 69) {
        tempInput.style.color = 'yellow';
    } else if (tempInput.value >= 50 && tempInput.value <= 59) {
        tempInput.style.color = 'green';
    } else if (tempInput.value <= 49) {
        tempInput.style.color = 'teal';
    }
}

function determineLandscape() {
    if (tempInput.value >= 80) {
        landscape.innerHTML = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (tempInput.value >= 70 && tempInput.value <= 79) {
        landscape.innerHTML = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (tempInput.value >= 60 && tempInput.value <= 69) {
        landscape.innerHTML = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else if (tempInput.value <= 59) {
        landscape.innerHTML = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    }
}

function determineSky() {
    if (skiesInput.value === 'Sunny') {
        skiesLandscape.innerHTML = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
    } else if (skiesInput.value === 'Cloudy') {
        skiesLandscape.innerHTML = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    } else if (skiesInput.value === 'Rainy') {
        skiesLandscape.innerHTML = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else if (skiesInput.value === 'Snowy') {
        skiesLandscape.innerHTML = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    }
}

btnAdd.addEventListener('click', () => {
    countUp(tempInput);
    determineColor();
    determineLandscape();
});

btnSubtract.addEventListener('click', () =>{
    countDown(tempInput);
    determineColor();
    determineLandscape();
});

skiesInput.addEventListener('change', () =>{
    determineSky();
});