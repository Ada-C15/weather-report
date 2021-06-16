const cityName = document.querySelector('.city-name');
const cityNameForm = document.querySelector('#city-name-form');
const temp = document.querySelector('#temp');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const landscape = document.querySelector('.landscape');
const skyBackground = document.querySelector('.sky-display');
const skyMenu = document.querySelector('.sky-menu');
const skyMenuForm = document.querySelector('#sky-menu-form');

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

const emojiDisp = function (temp_num){
    switch(true){
        case (temp_num <= 40):
            temp.style.color = 'teal'; 
            break;
        case (temp_num <= 59):
            temp.style.color = 'blue'; 
            landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
            break;
        case (temp_num <= 69):
            temp.style.color = 'goldenrod'; 
            landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
            break;
        case (temp_num <= 79):
            temp.style.color = 'orange'; 
            landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
            break;
        case (temp_num > 79):
            temp.style.color = 'red'; 
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

skyMenuForm.addEventListener('submit', (event) => {
    let info = new FormData(skyMenuForm)
    for (var value of info.values()) {
        switch(true){
            case (value=="sunny"):
                skyBackground.style.backgroundImage = "url('./assets/sun.jpg')"
                break; 
            case (value=="cloudy"):
                skyBackground.style.backgroundImage = "url('./assets/cloud.jpg')"
                break;
            case (value=="rainy"):
                skyBackground.style.backgroundImage = "url('./assets/rain.jpg')"
                break;
            case (value=="snowy"):
                skyBackground.style.backgroundImage = "url('./assets/snow.jpg')"
                break;

        }
    } 
    cityNameForm.style.display = 'none';  
    event.preventDefault();
});
