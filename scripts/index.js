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
    // const skySelecter = document.querySelector('#sky-select');
    // skySelecter.addEventListener("change", skySelectChange);


}

const handleCityInput = (e) => {
        e.preventDefault()
        const cityHeader = document.querySelector("#city-header")
        const inputValue = document.querySelector("#input-text").value
        cityHeader.innerHTML = inputValue

    }
    // grab entire form element with id=city-input 
const cityInputForm = document.querySelector("#city-input")
cityInputForm.addEventListener("submit", handleCityInput)

function getSkyType() {
    const skySelect = document.getElementById("sky-select");
    const skyType = skySelect.value;
    console.log(skyType);
    const weatherImage = document.getElementById("weather-image"); //html knows this is an img tag => it has 'src' attribute
    if (skyType === "hot") {
        weatherImage.src = "assets/hotImg.jpeg";
    } else if (skyType === "hotter") {
        weatherImage.src = "assets/hotterImg.jpeg";
    } else if (skyType === "hottest") {
        weatherImage.src = "assets/hottestImg.jpeg";
    } else if (skyType === "heck") {
        weatherImage.src = "assets/heckImg.jpeg";
    }
}



document.addEventListener("DOMContentLoaded", registerEventHandlers);