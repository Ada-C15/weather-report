const state = {
    temp: 80,

}


const hotter = () => {
    const weatherUp = document.querySelector("#weather");

    state.temp += 1;

    document.querySelector("#weather").textContent = `${state.temp}`

    changeTemp()



};

const cooler = () => {
    const weatherDown = document.querySelector("#weather");

    state.temp = state.temp;

    state.temp -= 1;

    document.querySelector("#weather").textContent = `${state.temp}`

    changeTemp()

};

const changeTemp = () => {
    if (state.temp > 80) {
        document.body.style.backgroundColor = "rgb(170, 1, 20)";
        

    } else if (state.temp < 80) {
        document.body.style.backgroundColor = "rgb(255, 94, 19)";

    } else if (state.temp < 70) {
        document.body.style.backgroundColor = "rgb(254, 226, 62)";

    } else if (state.temp < 60) {
        document.body.style.backgroundColor = "rgb(91, 194, 54)";

    } else if (state.temp < 50) {
        document.body.style.backgroundColor = "rgb(0, 124, 128)";
    }
}


const changeCity = () => {

    const cityChange = document.querySelector("#city");
    const title = document.querySelector("#seattle");
    title.textContent = cityChange.value;
    
}; 



const registerEventHandlers = () => {
    const weatherButton = document.querySelector("#warm");

    const weatherButtonDown = document.querySelector("#cool");

    weatherButton.addEventListener("click", hotter);

    weatherButtonDown.addEventListener("click", cooler);

    const changeCityName = document.querySelector("#city");
    changeCityName = addEventListener("input", changeCity)

    
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);