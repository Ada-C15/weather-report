console.log('hello world')

const state = {
    tempCount: 70,
};

const addTemp = () => {
    state.tempCount += 1;
    const tempContainer = document.querySelector("#tempCount")
    tempContainer.textContent = `${state.tempCount}`;
    stylingTemp(state.tempCount)
};

const decreaseTemp = () => {
    state.tempCount -= 1;
    const tempContainer = document.querySelector("#tempCount")
    tempContainer.textContent = `${state.tempCount}`;
    stylingTemp(state.tempCount)
};

const stylingTemp = (temp) => {
    const weatherGarden = document.querySelector("#weather-content");
    const tempContainer = document.querySelector("#tempCount")

    if (temp < 80) {
        weatherGarden.textContent = "🌞🌞🌞🌞";
        color = "blue";

    } else if (90 < temp < 95) {
        weatherGarden.textContent = "😭😭😭😭";
        color = "red";
    }
    tempContainer.classList = color;
};


const registerEventHandlers = () => {
    const addTempButton = document.querySelector("#addTempButton");
    addTempButton.addEventListener("click", addTemp);

    const decreaseTempButton = document.querySelector("#decreaseTempButton");
    decreaseTempButton.addEventListener("click", decreaseTemp);
    const skySelect = document.querySelector("#sky-select")
    skySelect.addEventListener("change", getSkyType)

    const cityInputForm = document.querySelector("#city-input")
    cityInputForm.addEventListener("submit", handleCityInput)

    const reset = document.querySelector("#reset-button")
    reset.addEventListener("click", resetCityInput)

};

const handleCityInput = (e) => {
    e.preventDefault()
    const cityHeader = document.querySelector("#city-header")
    const inputValue = document.querySelector("#input-text").value
    cityHeader.textContent = inputValue

}

const resetCityInput = () => {
    const cityHeader = document.querySelector("#city-header")
    cityHeader.textContent = "Any Texas City"

}

function getSkyType() {
    const skySelect = document.getElementById("sky-select");
    const skyType = skySelect.value;
    const weatherImage = document.getElementById("weather-image");
    if (skyType === "hot") {
        weatherImage.src = "assets/hotImg.jpeg"
    } else if (skyType === "hotter") {
        weatherImage.src = "assets/hotterImg.jpeg";
    } else if (skyType === "hottest") {
        weatherImage.src = "assets/hottestImg.jpeg";
    } else if (skyType === "heck") {
        weatherImage.src = "assets/heckImg.jpeg";
    }

};



document.addEventListener("DOMContentLoaded", registerEventHandlers);