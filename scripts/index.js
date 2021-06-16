// //color change function

// const changeColorTempDisplay = function(val) {
//     let colorThreshold = 20;
//     let tempValue = document.getElementById('tempDisplay');
//     console.log(tempValue)

//     const red = '#f60707'
//     const orange = '#FF5733'
//     const yellow = '#FFC300'
//     const green = '#19990c'
//     const blue = '#008080'

//     if (tempValue <= 49) {
//         tempValue.style.color = blue;
//     } else if (tempValue >= 50) {
//         tempValue.style.color = green;
//     }
// }

//change landscapes

// const weatherEmoji = document.createElement("span")
// const weatherContainer = document.querySelector("#weatherWindow")
// weatherEmoji.textContent = ❄️;
// weatherContainer.appendChild(weatherEmoji)

//increase temp by one click


const state = {
    tempDisplay: 0,
    tempDisplayColor: document.getElementById("tempDisplay").style.color = 'blue'
};

const increaseTemp = () => {

    state.tempDisplay += 1;

    let val = state.tempDisplay

    if (val <= 49) {
        let snow = document.getElementById("snow");
        snow.style.display = "block";
        document.getElementById("tempDisplay").style.color = "#008080";
    } else if (val >= 50 && val <= 59) {
        snow.style.display = "None";
        let stormy = document.getElementById("stormy");
        stormy.style.display = "block";
        document.getElementById("tempDisplay").style.color = "#19990c";
    } else if (val >= 60 && val <= 69) {
        stormy.style.display = "None";
        let cloudy = document.getElementById("cloudy");
        cloudy.style.display = "block";
        document.getElementById("tempDisplay").style.color = "#FFC300";
    } else if (val >= 70 && val <= 79) {
        cloudy.style.display = "None";
        let warm = document.getElementById("warm");
        warm.style.display = "block";
        document.getElementById("tempDisplay").style.color = "#FF5733";
    } else if (val > 80) {
        warm.style.display = "None";
        let sunny = document.getElementById("sunny");
        sunny.style.display = "block";
        document.getElementById("tempDisplay").style.color = "#f60707";
    }
    const weatherWindow = document.querySelector("#tempDisplay")
    weatherWindow.textContent = `${state.tempDisplay}`;
};

//decrease temp by one click

const decreaseTemp = () => {
    state.tempDisplay -= 1;

    let val = state.tempDisplay


    if (val > 80) {
        let sunny = document.getElementById("sunny");
        sunny.style.display = "block";
        document.getElementById("tempDisplay").style.color = "#f60707";
    } else if (val >= 70 && val <= 79) {
        sunny.style.display = "None";
        let warm = document.getElementById("warm");
        warm.style.display = "block";
        document.getElementById("tempDisplay").style.color = "#FF5733";
    } else if (val >= 60 && val <= 69) {
        warm.style.display = "None";
        let cloudy = document.getElementById("cloudy");
        cloudy.style.display = "block";
        document.getElementById("tempDisplay").style.color = "#FFC300";
    } else if (val >= 50 && val <= 59) {
        cloudy.style.display = "None";
        let stormy = document.getElementById("stormy");
        stormy.style.display = "block";
        document.getElementById("tempDisplay").style.color = "#19990c";
    } else if (val <= 49) {
        stormy.style.display = "None";
        let snow = document.getElementById("snow");
        snow.style.display = "block";
        document.getElementById("tempDisplay").style.color = "#008080";
    }
    const weatherWindow = document.querySelector("#tempDisplay")
    weatherWindow.textContent = `${state.tempDisplay}`;
}


const registerEventHandlers = () => {
    const increaseTempButton = document.querySelector("#increaseTemp");
    increaseTempButton.addEventListener("click", increaseTemp);

    const decreaseTempButton = document.querySelector("#decreaseTemp");
    decreaseTempButton.addEventListener("click", decreaseTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);