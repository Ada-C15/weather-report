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

const textColor = function(selector, color) {
    document.querySelector(selector).style.color = color;
}

const backgroundColor = function(selector, color) {
    document.querySelector(selector).style.backgroundColor = color;
}

const colorBlack = (event) => {
    textColor("#tempDisplay", "black");
    textColor("#landscape h3", "white");
    textColor("#groundDisplay", "white");
    backgroundColor("#landscape", "black");
    const count = document.querySelector("#groundDisplay")
    count.textContent = "🌵____🌵_______🌵_🌡__🌵__🌵";
};

const colorRed = (event) => {
    textColor("#tempDisplay", "red");
    textColor("#landscape h3", "black");
    textColor("#groundDisplay", "black");
    backgroundColor("#landscape", "rgb(255, 0, 0, 0.5)");
    const count = document.querySelector("#groundDisplay");
    count.textContent = "🌵_🐍__🌵_🦂__🦂__🌵_🐍__🌵__🌵";
};

const colorOrange = (event) => {
    textColor("#tempDisplay", "rgb(255, 162, 0)");
    textColor("#landscape h3", "black");
    textColor("#groundDisplay", "black");
    backgroundColor("#landscape", "rgb(255, 162, 0, 0.5)");
    const count = document.querySelector("#groundDisplay");
    count.textContent = "🌴_🌸__🌴_⛱__⛱__🌴_⛱__🌴__🌴";
};

const colorYellow = (event) => {
    textColor("#tempDisplay", "rgb(255, 247, 0)");
    textColor("#landscape h3", "black");
    textColor("#groundDisplay", "black");
    backgroundColor("#landscape", "rgb(255, 247, 0, 0.5)");
    const count = document.querySelector("#groundDisplay");
    count.textContent = "🌳_🌿__🌳_🌿__🌿__🌳_🌿__🌳__🌳";
};

const colorGreen = (event) => {
    textColor("#tempDisplay", "rgb(73, 150, 26)");
    textColor("#landscape h3", "black");
    textColor("#groundDisplay", "black");
    backgroundColor("#landscape", "rgb(73, 150, 26, 0.5)");
    const count = document.querySelector("#groundDisplay");
    count.textContent = "🌳_🌲__🌳_🌲__🌲__🌳_🌲__🌳__🌳";
};

const colorBlue = (event) => {
    textColor("#tempDisplay", "rgb(0, 94, 255)");
    textColor("#landscape h3", "black");
    textColor("#groundDisplay", "black");
    backgroundColor("#landscape", "rgb(0, 94, 255, 0.5)");
    const count = document.querySelector("#groundDisplay");
    count.textContent = "🌲_🏔__🌲_🏔__🏔__🌲_🏔__🌲__🌲";
};

const colorIce = (event) => {
    textColor("#tempDisplay", "rgb(0, 251, 255)");
    textColor("#landscape h3", "black");
    textColor("#groundDisplay", "white");
    backgroundColor("#landscape", "rgb(0, 251, 255, 0.5)");
    const count = document.querySelector("#groundDisplay");
    count.textContent = "🌲_☃️__🌲_🏔__☃️__🌲_🏔__🌲__🌲";
};

const registerEventHandlers = (event) => {
    const tempUpButton = document.querySelector("#tempUp");
    tempUpButton.addEventListener("click", tempUp);

    const tempDownButton = document.querySelector("#tempDown");
    tempDownButton.addEventListener("click", tempDown);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);