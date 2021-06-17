console.log("hellooo!")

//store current temp in a variable

const state = {
    //color: "red",
    tempCount : 70,
};


//increase temp
const increaseTemp= () => {
    state.tempCount +=1
    const tempUp = document.querySelector("#temp")
    tempUp.textContent = `${state.tempCount}`
    //updateTempColor();
};

const decreaseTemp= () => {
    state.tempCount -=1
    const tempDown = document.querySelector("#temp")
    tempDown.textContent = `${state.tempCount}`
    //updateTempColor();
};


// const updateTempColor = () => {
//     const temp = state.tempcount
//     if (temp>= 80) {
//         state.color = "red";
//     } else if (temp >= 70) {
//         state.color = "orange";
//     } else if (temp >= 60) {
//         state.color = "yellow";
//     } else if (temp >= 50) {
//         state.color = "teal";
//     }
// };



const registerEventHandlers = () => {
    //updateTempColor(tempCount);

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




