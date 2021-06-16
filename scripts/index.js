console.log('hello world')

const state = {
    tempCount: 70,
};

const addTemp = () => {
    const weather = document.querySelector("#weather-content");
    // const weatherGarden = document.querySelector("#weather-garden");
    if (state.tempCount < 80) {
        weather.textContent = "🌞🌞🌞🌞";
        // weatherGarden.innerText(weather);
    } else if (90 < state.tempCount < 95) {
        weather.textContent = "😭😭😭😭";
        // weatherGarden.appendChild(weather);
    }
    state.tempCount += 1;
    const tempContainer = document.querySelector("#tempCount")
    tempContainer.textContent = `${state.tempCount}`;
}

const decreaseTemp = () => {
    const weather = document.createElement("span");
    const weatherGarden = document.querySelector("#weather-garden");
    weather.textContent = "🙏🏽";
    weatherGarden.appendChild(weather);
    state.tempCount -= 1;
    const tempContainer = document.querySelector("#tempCount")
    tempContainer.textContent = `${state.tempCount}`;
}
const skySelectChange = (event) => {
    const result = document.querySelector('#sky-select');
    result.textContent = `🌞🌞😭😭😭😭`;
}

const registerEventHandlers = () => {
    const addTempButton = document.querySelector("#addTempButton");
    addTempButton.addEventListener("click", addTemp);
    const decreaseTempButton = document.querySelector("#decreaseTempButton");
    decreaseTempButton.addEventListener("click", decreaseTemp);
    const skySelecter = document.querySelector('#sky-select');
    skySelecter.addEventListener("change", skySelectChange);


}

document.addEventListener("DOMContentLoaded", registerEventHandlers);