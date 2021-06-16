const state = {
    tempCount: 70,
};

const tempIncrease = () => {
    const tempCountContainer = document.getElementById("tempCount");
    state.tempCount +=1;
    tempCountContainer.textContent = state.tempCount;
};

// const tempDecrease = () => {
//     const tempDecreaseCountContainer = document.getElementById("tempCount");
//     state.tempCount -=1;
//     tempDecreaseCountContainer.textContent = state.tempCount;
// };

const registerEventHandlers = () => {
    const increaseButton = document.querySelector("#temperatureIncrease");
    increaseButton.addEventListener("click", tempIncrease);
}; 

// const registerEventHandlers = () => {
//     const decreaseButton = document.querySelector("#temperatureDecrease");
//     decreaseButton.addEventListener("click", tempDecrease);
// }; 

document.addEventListener("DOMContentLoaded", registerEventHandlers);