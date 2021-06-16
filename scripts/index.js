const state = {
    tempValue: 70,
    landscape: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
  };

const increaseTemp = () =>{
    const tempValueContainer = document.getElementById("tempValue");
    state.tempValue += 1;
    tempValueContainer.textContent = state.tempValue;
    changeTempColor(state.tempValue);
    changeLandscape(state.tempValue);
}

const decreaseTemp = () =>{
    const tempValueContainer = document.getElementById("tempValue");
    state.tempValue -= 1;
    tempValueContainer.textContent = state.tempValue;
    changeTempColor(state.tempValue);
    changeLandscape(state.tempValue);
}

const changeTempColor = () =>{
    const tempValueContainer = document.getElementById("tempValue");
    tempValueContainer.textContent = state.tempValue;
    if (state.tempValue >= 80){
        tempValueContainer.style.color = "red";
    } else if (state.tempValue >= 70) {
        tempValueContainer.style.color = "orange";
    } else if (state.tempValue >= 60) {
        tempValueContainer.style.color = "yellow";
    } else if (state.tempValue >= 50) {
        tempValueContainer.style.color = "green";
    } else {
        tempValueContainer.style.color = "teal";
    }
}

const changeLandscape = () =>{
    const tempValueContainer = document.getElementById("tempValue");
    tempValueContainer.textContent = state.tempValue;
    const tempLandscapeContainer = document.getElementById("landscape");
    tempLandscapeContainer.textContent = state.landscape;
    if (state.tempValue >= 80){
        state.landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.tempValue >= 70) {
        state.landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (state.tempValue >= 60) {
        state.landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else {
        state.landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
}



const registerEventHandlers = () => {
    const increaseTempButton = document.querySelector("#increaseTemp");
    increaseTempButton.addEventListener("click", increaseTemp);

    const decreaseTempButton = document.querySelector("#decreaseTemp");
    decreaseTempButton.addEventListener("click", decreaseTemp);
};



document.addEventListener("DOMContentLoaded", registerEventHandlers);