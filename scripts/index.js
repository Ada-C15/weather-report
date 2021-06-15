let tempValue = 65;

const state = {
    currentTemp: 65
};

const updateTemp = (tempValue) => {
    const tempValueContainer = document.getElementById("tempValue");
    tempValueContainer.textContent = tempValue;
};

const increaseTemp = () => {
    tempValue += 1;
    updateTemp(tempValue);
};

const decreaseTemp = () => {
    tempValue -= 1;
    updateTemp(tempValue);
};

// const updateTempColor = (tempValue) => {
//     const tempValueContainer = document.getElementById("tempValue");
//     let color = "yellow";
//     if 
// }

const registerEventHandlers = () => {

    updateTemp(tempValue);

    const increaseTempControl = document.getElementById("increase_temp");
    increaseTempControl.addEventListener('click', increaseTemp);

    const decreaseTempControl = document.getElementById("decrease_temp");
    decreaseTempControl.addEventListener('click', decreaseTemp);
}


document.addEventListener("DOMContentLoaded", registerEventHandlers);