const state = {
    temp_number: 67,
};

const tempUpButton = document.querySelector("#up");
const temperature = document.querySelector("#temp_number")

const temperatureUp = () => {
    state.temp_number += 1;
    temperature.textContent = `${state.temp_number}`;
};


tempUpButton.addEventListener("click", temperatureUp);




// document.addEventListener("DomContentLoaded", registerEventHandlers);