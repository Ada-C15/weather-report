let btnAdd = document.getElementById('add');
let btnSubtract = document.getElementById('subtract');
let input = document.getElementById('temp_id');
let landscape = document.getElementById('landscape');
let skies = document.getElementById('sky-select');


function countUp(element) {
    element.value = parseInt(element.value) + 1;
}

function countDown(element) {
    element.value = parseInt(element.value) - 1;
}

function determineColor() {
    if (input.value >= 80) {
        input.style.color = 'red';
    } else if (input.value >= 70 && input.value <= 79) {
        input.style.color = 'orange';
    } else if (input.value >= 60 && input.value <= 69) {
        input.style.color = 'yellow';
    } else if (input.value >= 50 && input.value <= 59) {
        input.style.color = 'green';
    } else if (input.value <= 49) {
        input.style.color = 'teal';
    }
}

function determineLandscape() {
    if (input.value >= 80) {
        landscape.innerHTML = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (input.value >= 70 && input.value <= 79) {
        landscape.innerHTML = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (input.value >= 60 && input.value <= 69) {
        landscape.innerHTML = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else if (input.value <= 59) {
        landscape.innerHTML = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    }
}

function determineSky() {
    if (input.value === Sunny) {
        skies.innerHTML = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
    }


}

btnAdd.addEventListener('click', () => {
    countUp(input);
    determineColor();
    determineLandscape();
});

btnSubtract.addEventListener('click', () =>{
    countDown(input);
    determineColor();
    determineLandscape();
});

skies.addEventListener('select', () =>{
    determineSky();
});