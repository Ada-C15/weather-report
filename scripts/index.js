const state = {
    temperature: 70,
    location: "New York",
    sky: "rainy"
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

const updateSky = () => {
    const selection = document.querySelector("value")
    const sky = document.querySelector("#display")
    if (selection.value == "rainy"){
        sky.style.background = url('rain.gif');
    } else if (selection.value == "sunny") {
        sky.style.background = url('sunny.gif');
    } else if (selection.value == "overcast"){
        sky.style.background == url("nightsky.gif"); {}
    } else if (selection.value == "dawn") {
        sky.style.background = url('dawn.gif')
    }
}

const registerEventHandlers = () => {
    const upButton = document.querySelector("#upButton");
    upButton.addEventListener("click", increaseTemperature);
    const downButton = document.querySelector("#downButton");
    downButton.addEventListener("click", decreaseTemperature);
    // const updateLocationButton = document.querySelector("#submit");
    // updateLocationButton.addEventListener("click", updateLocation)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

