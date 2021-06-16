const state = {
    tempCount: 70,
};

// let temp = document.getElementById("tempCount");

// const tempColor = () => {
//     if (state.temp >= 80) {
//         temp.style.color = "red";
//     }
// };

const tempIncrease = () => {
    const tempCountContainer = document.getElementById("tempCount");
    state.tempCount +=1;
    // tempColor();
    tempCountContainer.textContent = state.tempCount;
};

const tempDecrease = () => {
    const tempDecreaseCountContainer = document.getElementById("tempCount");
    state.tempCount -=1;
    // tempColor();
    tempDecreaseCountContainer.textContent = state.tempCount;
};

const changeLandscape = () => {
    const landscapeContainer = document.querySelector("#landscapeContainer");
        if (state.tempCount >= 80) {
            landscapeContainer.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
        }
}

const registerEventHandlers = () => {
    const increaseButton = document.querySelector("#temperatureIncrease");
    increaseButton.addEventListener("click", tempIncrease);
    const decreaseButton = document.querySelector("#temperatureDecrease");
    decreaseButton.addEventListener("click", tempDecrease);
    const landscape = document.querySelector("#landscapeContainer");
    landscape.addEventListener(changeLandscape)
    // const changeColor= document.querySelector("tempCount");
    // changeColor.addEventListener(,tempColor)
}; 

document.addEventListener("DOMContentLoaded", registerEventHandlers);