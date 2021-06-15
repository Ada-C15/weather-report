const state = {
    temp_number: 67,
};


const temperature = document.querySelector("#temp_number");

const temperatureUp = () => {
    state.temp_number += 1;
    temperature.textContent = `${state.temp_number}`;
};
//tempUpButton.addEventListener("click", temperatureUp);
const tempChangeColor = () => {
    if (state.temp_number > 79) {
        temperature.className = "red";
    }
    else if (state.temp_number > 69) {
        temperature.className = "orange";
    }
    else if (state.temp_number > 59) {
        temperature.className = "yellow";
    }
    else if (state.temp_number > 49) {
        temperature.className = "green";
    }
    else if (state.temp_number > 48) {
        temperature.className = "teal";
    }
};
// const tempUpButton = document.querySelector("#up");
// tempUpButton.addEventListener("click", tempChangeColor);

// const tempDownButton = document.querySelector("#down");
// tempDownButton.addEventListener("click", tempChangeColor);
const temperatureDown = () => {
    state.temp_number -= 1;
    temperature.textContent = `${state.temp_number}`;
};
//tempDownButton.addEventListener("click", temperatureDown);

const registerEventHandlers = () => {
    const tempUpButton = document.querySelector("#up");
    tempUpButton.addEventListener("click", temperatureUp);
    tempUpButton.addEventListener("click", tempChangeColor);

    const tempDownButton = document.querySelector("#down");
    tempDownButton.addEventListener("click", temperatureDown);
    tempDownButton.addEventListener("click", tempChangeColor);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);