const state = {
    tempUp: 80,
    tempDown: 80,
    citySearch: " "
}

const hotter = () => {
    const weatherUp = document.querySelector("#weather");

    state.tempUp += 1;

    document.querySelector("#weather").textContent = `${state.tempUp}`

};

const registerEventHandlers = () => {
    const weatherButton = document.querySelector("#warm");
    weatherButton.addEventListener("click", hotter);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);