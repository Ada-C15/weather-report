// temperature changes number, color and landscape behavior
const state = {
    temperature : 71,
    color : "orange"
}; 

const colorAppear = () => {
    const colorClass = document.querySelector("#tempValue")
    colorClass.className = state.color
}

const tempRangeColor = () => {
    if (state.temperature >= 80){
        state.color = "red"
        colorAppear();
    } else if (state.temperature < 80 && state.temperature >= 70) {
        state.color = "orange"
        colorAppear();
    } else if (state.temperature < 70 && state.temperature >= 60) {
        state.color = "yellow"
        colorAppear();
    } else if (state.temperature < 60 && state.temperature >= 50) {
        state.color = "green"
        colorAppear();
    } else if (state.temperature < 50) {
        state.color = "teal"
        colorAppear();
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