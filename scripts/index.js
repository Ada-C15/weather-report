const state = {
    temperature: 70,
    newLocation: ''
};

const increaseTemperature = () => {
    state.temperature += 1;
    const temperature = document.querySelector("#temperature");
    temperature.textContent = `${state.temperature}`;
}

const decreaseTemperature = () => {
    state.temperature -= 1;
    const temperature = document.querySelector("#temperature");
    temperature.textContent = `${state.temperature}`;
}

const updateLocation = () => {
    // const newLocation = document.querySelector("#location");
    // newLocation.textContent = location.value;
    const hi = document.querySelector("#setLocation").value;

    state.newLocation += hi
    console.log(state.newLocation)

}

const registerEventHandlers = () => {
    const upButton = document.querySelector("#upButton");
    upButton.addEventListener("click", increaseTemperature);
    const downButton = document.querySelector("#downButton");
    downButton.addEventListener("click", decreaseTemperature);
    const updateLocationButton = document.querySelector("#submit");
    updateLocationButton.addEventListener("click", updateLocation)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

