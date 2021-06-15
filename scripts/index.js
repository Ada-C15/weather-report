const state = {
    temp: 65,
    // use these to change background color incrementally?
    // red: 255,
    // green: 247,
    // blue: 0
    // color: rgb(255, 247, 0)
};

const tempUp = (event) => {
    state.temp += 1;
    const count = document.querySelector("#tempDisplay");
    count.textContent = `${state.temp}`;
    checkTemp();
    // Add something here that changes background color to slightly more red each click
};

const tempDown = (event) => {
    state.temp -= 1;
    const count = document.querySelector("#tempDisplay");
    count.textContent = `${state.temp}`;
    checkTemp();
};

const checkTemp = (event) => {
    if (state.temp >= 105) {
        colorBlack();
    }
    if (state.temp >= 90 && state.temp < 105) {
        colorRed();
    }
    if (state.temp >= 75 && state.temp < 90) {
        colorOrange();
    }
    if (state.temp >= 60 && state.temp < 75) {
        colorYellow();
    }
    if (state.temp >= 45 && state.temp < 60) {
        colorGreen();
    }
    if (state.temp >= 30 && state.temp < 45) {
        colorBlue();
    }
    if (state.temp < 30) {
        colorIce();
    }
}

const colorBlack = (event) => {
    const color = document.querySelector("#tempDisplay").style.color = "black" ;
};

const colorRed = (event) => {
    const color = document.querySelector("#tempDisplay").style.color = "red" ;
};

const colorOrange = (event) => {
    const color = document.querySelector("#tempDisplay").style.color = "rgb(255, 140, 0)" ;
};

const colorYellow = (event) => {
    const color = document.querySelector("#tempDisplay").style.color = "rgb(255, 247, 0)" ;
};

const colorGreen = (event) => {
    const color = document.querySelector("#tempDisplay").style.color = "rgb(73, 150, 26)" ;
};

const colorBlue = (event) => {
    const color = document.querySelector("#tempDisplay").style.color = "rgb(0, 94, 255)" ;
};

const colorIce = (event) => {
    const color = document.querySelector("#tempDisplay").style.color = "rgb(0, 251, 255)" ;
};

const registerEventHandlers = (event) => {
    const tempUpButton = document.querySelector("#tempUp");
    tempUpButton.addEventListener("click", tempUp);

    const tempDownButton = document.querySelector("#tempDown");
    tempDownButton.addEventListener("click", tempDown);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);