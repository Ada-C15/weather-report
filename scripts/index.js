const tempState = {
    temp: 70
};

const hotter = (event) => {
    tempState.temp +=1
    const temperature = document.querySelector("#temperature")
    temperature.textContent = `${tempState.temp}F`
};

const colder = (event) => {
    tempState.temp -=1;
    const temperature = document.querySelector("#temperature")
    temperature.textContent = `${tempState.temp}F`
};

const reset = (event) => {
    tempState.temp = 75;
    const temperature = document.querySelector("#temperature")
    temperature.textContent = `${tempState.temp}F`
};

const cityState = {
    city: 0 
};

const cityName = (event) => {
    cityState.city = document.querySelector('#cityInput').value;
    if (cityState.city !== 0) {
        const cityName = document.querySelector("#city")
        cityName.textContent = `✨ ✨ Beautiful ${cityState.city}!! ✨ ✨ `
    };
};


const registerEventHandlers = (event) => {
    const hotterButton = document.querySelector('#raiseTemp');
    hotterButton.addEventListener("click", hotter);
    
    const colderButton = document.querySelector('#lowerTemp');
    colderButton.addEventListener("click", colder);
    
    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener("click", reset);

    const cityButton = document.querySelector('#submitBtn');
    cityButton.addEventListener("click", cityName);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);