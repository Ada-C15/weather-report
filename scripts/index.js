const skyBackground = document.querySelector('.sky-display');
const cityName = document.querySelector('.city-name');
const cityNameForm = document.querySelector('#city-name-form');
const temp = document.querySelector('#temp');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const landscape = document.querySelector('.landscape');
const skyMenu = document.querySelector('.sky-menu');

cityNameForm.addEventListener('submit', (event) => {
    let info = new FormData(cityNameForm)
    for (var value of info.values()) {
        cityName.textContent = value;
    } 
    cityNameForm.style.display = 'none';  
    event.preventDefault();
});

cityName.addEventListener('click', (event) => {
// add cursor style pointer to h1 for ease of use
    cityNameForm.style.display = 'block';  

});

const emojiDisp = function (temp){
    switch(true){
        case (temp <= 59):
            landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
            break;
        case (temp <= 69):
            landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
            break;
        case (temp <= 79):
            landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
            break;
        case (temp > 79):
            landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    }
}

plus.addEventListener('click', (event) => {
    // add cursor style pointer to span for ease of use
    let temperature = parseInt(temp.textContent)
    temp.textContent = temperature + 1
    emojiDisp(temperature + 1)
    });

minus.addEventListener('click', (event) => {
    // add cursor style pointer to span for ease of use
    let temperature = parseInt(temp.textContent)
    temp.textContent = temperature - 1
    emojiDisp(temperature - 1)
    });
