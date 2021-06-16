const state = {
    temperature:30
}
const color = () => {
    if(state.temperature >= 80) {
        return "red"
    } else if(state.temperature >= 70) {
        return "orange"
    } else if(state.temperature >= 60) {
        return "Yellow"
    } else if (state.temperature >= 50) {
        return "green"
    } else {
        return "blue"
    }
};

const lanscape = () => {

    if(state.temperature >= 80) {
        return " linear-gradient( rgba(42, 42, 42, 0.5), rgba(42, 42, 42, 0.5) ), url(assets/summer-pic.jpg)"
    } else if(state.temperature >= 70) {
        return " linear-gradient( rgba(42, 42, 42, 0.5), rgba(42, 42, 42, 0.5) ), url(assets/fall-pic.jpeg)"
    } else if(state.temperature >= 60) {
        return " linear-gradient( rgba(42, 42, 42, 0.5), rgba(42, 42, 42, 0.5) ), url(assets/spr.jpg)"
    } else if (state.temperature >= 50) {
        return  " linear-gradient( rgba(42, 42, 42, 0.5), rgba(42, 42, 42, 0.5) ), url(assets/green-pic.jpg)"
    } else {
        return "url(assets/winter.jpg)";
    }

}



// Wave 2: Increase and Decrease Temperature

const updateTemperatureCount = () => {
    const temperatureUp= document.querySelector("#temperature");
    const body = document.querySelector("body");
    const symbol = document.querySelector("#symbol");
    temperatureUp.textContent = `${state.temperature}`;
    temperatureUp.style.color = `${color()}`;
    symbol.style.color = `${color()}`;
    body.style.backgroundImage = `${lanscape()}`
}

const increaseTemperature = () => {
    state.temperature += 1;
    updateTemperatureCount()
}
const decreaseTemperature = () => {
    state.temperature -= 1;
    updateTemperatureCount()
}

const increaseButton = document.querySelector("#increase");
const decreaseButton = document.querySelector("#decrease");

increaseButton.addEventListener("click", increaseTemperature);
decreaseButton.addEventListener("click", decreaseTemperature);

// Wave 3: Selecting the Sky

const skyType = document.querySelector("#sky-type");

const selectSky = () => {
    // const skyImage = document.querySelector("#image");
    // const newSkyImage = document.createElement("span");
    if(skyType.value == "sunny") {
        return '<i class="fas fa-cloud-sun"></i>';
    } else if(skyType.value == "cloudy"){
        return '<i class="fas fa-cloud-moon-rain"></i>';
    } else if(skyType.value == "raining"){
        return '<i class="fas fa-cloud-showers-heavy"></i>';
    } else if(skyType.value == "snowy") {
        return '<i class="fas fa-snowflake"></i>';
    }
}

const addSky = () => {
    const addImage = document.querySelector("#image");
    // addImage.innerHTML = `Bonjour ${skyType.value}`
    addImage.innerHTML = `${selectSky()}`

}

skyType.addEventListener("change", addSky);

// Wave 4: Naming the City

const cityName = document.querySelector("#city-name");

const namingCity = () => {
    const displayCity = document.querySelector("#display-city");
    displayCity.textContent = cityName.value;
    displayCity.style.fontSize = "80px"
}

cityName.addEventListener("change", namingCity);

// Resetting the City Name

const resetbtn = document.querySelector("#reset");

resetbtn.addEventListener("click", () => {cityName.value = "";})