// temperature changes number, color and landscape behavior
const state = {
    temperature : 71,
    color : "orange",
    landscape : "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
}; 

const colorAppear = () => {
    const colorClass = document.querySelector("#tempValue")
    colorClass.className = state.color
}

const landScape = () => {
    const landScape = document.querySelector("#landscape")
    landScape.textContent = state.landscape
}
const tempRangeColor = () => {
    if (state.temperature >= 80){
        state.color = "red"
        state.landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
        colorAppear();
        landScape();
    } else if (state.temperature < 80 && state.temperature >= 70) {
        state.color = "orange"
        state.landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
        colorAppear();
        landScape();
    } else if (state.temperature < 70 && state.temperature >= 60) {
        state.color = "yellow"
        state.landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
        colorAppear();
        landScape();
    } else if (state.temperature < 60 && state.temperature >= 50) {
        state.color = "green"
        state.landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
        colorAppear();
        landScape();
    } else if (state.temperature < 50) {
        state.color = "teal"
        state.landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
        colorAppear();
        landScape();
    }
}

const tempIncrease = () => {
    state.temperature += 1

    const tempValue = document.querySelector("#tempValue")
    tempValue.textContent = `${state.temperature}`;

    tempRangeColor()
};

const tempDecrease = () => {
    state.temperature -= 1

    const tempValue = document.querySelector("#tempValue")
    tempValue.textContent = `${state.temperature}`;
    
    tempRangeColor()
};

const registerTempHandler = () => {
    const increaseButton = document.querySelector("#increaseTempControl");
    increaseButton.addEventListener("click", tempIncrease);

    const decreaseButton = document.querySelector("#decreaseTempControl");
    decreaseButton.addEventListener("click", tempDecrease);
}

document.addEventListener("DOMContentLoaded", registerTempHandler)