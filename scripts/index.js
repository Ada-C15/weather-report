console.log("hellooo!")

//store current temp in a variable

const state = {
    tempCount : 70 
};


//increase temp
const increaseTemp= () => {
    state.tempCount +=1
    const tempUp = document.querySelector("#temp")
    tempUp.textContent = `${state.tempCount}`
};

//decrease temp
const decreaseTemp= () => {
    state.tempCount -=1
    const tempDown = document.querySelector("#temp")
    tempDown.textContent = `${state.tempCount}`
    console.log(decreaseTemp)
};

// const updateTempStyles = (currentTemp) => {
//     const tempValue = document.querySelector("#temp");
//     let color = "orange";
//     if ( currentTemp >= 80) {
//         color = "red";
//     } else if (currentTemp >= 70) {
//         color = "orange";
//     } else if (currentTemp >= 60) {
//         color = "yellow";
//     } else if (currentTemp >= 50) {
//         color = "teal";
//     }
//     tempValue.classList = color;
// };



const registerEventHandlers = () => {
    const upButton = document.querySelector("#increase-temp");
    upButton.addEventListener("click", increaseTemp);
    
    const downButton = document.querySelector("#decrease-temp");
    downButton.addEventListener("click", decreaseTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);


//change city name///

//Select Html element the event will occur on//
//make function run when it occurs
// const changeCityName = () => {
//     const cityInput = document.querySelector("#city-input");
//     const changedElement = document.querySelectorAll(".your-city");
//     changedElement.textContent = cityInput.value;
// };
// //register the function as an event listener




