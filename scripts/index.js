const state = {
    temp: 65
};

const tempUp = (event) => {
    state.temp += 1;
    const count = document.querySelector("#tempDisplay");
    count.textContent = `${state.temp}`;
};

const tempDown = (event) => {
    state.temp -= 1;
    const count = document.querySelector("#tempDisplay");
    count.textContent = `${state.temp}`;
};

const registerEventHandlers = (event) => {
    const tempUpButton = document.querySelector("#tempUp");
    tempUpButton.addEventListener("click", tempUp);

    const tempDownButton = document.querySelector("#tempDown");
    tempDownButton.addEventListener("click", tempDown);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);