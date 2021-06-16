
const state =  {
    temperature : 70
};

const increaseTemp = (event) => {
    state.temperature += 1;
    temperature.textContent = `${state.temperature}`
};

const decreaseTemp = () => {
    state.temperature -= 1;
    temperature.textContent = `${state.temperature}`
}

const changeWeatherEmojis = () => {
    if (state.temperature >= 80);
        console.log("🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂");
    if (state.temperature < 80 && state.temperature >=70);
        console.log("🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷");
    if (state.temperature < 70 && state.temperature >= 60);
        console.log("🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃");
    if (state.temperature < 60);
        console.log("🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲")
};


const skySelectChanger = () => {
    const result = document.querySelector('.result');
    result.textContent = `You like ${event.target.value}`;
};


const registerEventHandlers = () => {
    const increaseTemp = document.querySelector("#increaseTemp");
    increaseTemp.addEventListener("click",increaseTemp);
    
    const decreaseTemp = document.querySelector("#decreaseTemp");
    decreaseTemp.addEventListener("click", decreaseTemp);

    const skySelecter = document.querySelector('#changeSkyColor');
    skySelectorChange.addEventListener("change",skySelectChanger )
    
}