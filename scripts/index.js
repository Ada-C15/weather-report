const state = {
    // tempValue: 70
    tempValue: parseFloat(document.querySelector("#tempValue").textContent),
    landscape: parseFloat(document.querySelector("#landscape").textContent),
    sky: parseFloat(document.querySelector("#sky").textContent),
    message:"",
  };

const increaseTemp = () =>{
    const tempValueContainer = document.querySelector("#tempValue");
    state.tempValue += 1;
    tempValueContainer.textContent = state.tempValue;
    changeTempColor(state.tempValue);
    changeLandscape(state.tempValue);
}

const decreaseTemp = () =>{
    const tempValueContainer = document.querySelector("#tempValue");
    state.tempValue -= 1;
    tempValueContainer.textContent = state.tempValue;
    changeTempColor(state.tempValue);
    changeLandscape(state.tempValue);
}

const changeTempColor = () =>{
    const tempValueContainer = document.querySelector("#tempValue");
    if (state.tempValue >= 80){
        tempValueContainer.style.color = "red";
    } else if (state.tempValue >= 70) {
        tempValueContainer.style.color = "orange";
    } else if (state.tempValue >= 60) {
        tempValueContainer.style.color = "yellow";
    } else if (state.tempValue >= 50) {
        tempValueContainer.style.color = "green";
    } else {
        tempValueContainer.style.color = "teal";
    }
    tempValueContainer.textContent = state.tempValue;
}

const changeLandscape = () =>{
    const tempValueContainer = document.getElementById("tempValue");
    const tempLandscapeContainer = document.getElementById("landscape");
    if (state.tempValue >= 80){
        state.landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.tempValue >= 70) {
        state.landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (state.tempValue >= 60) {
        state.landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else {
        state.landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
    tempValueContainer.textContent = state.tempValue;
    tempLandscapeContainer.textContent = state.landscape;
}

const changeSky = () =>{
    const sky = document.getElementById("skySelect").value;
    const tempSkyContainer = document.getElementById("sky");
    const tempMssgContainer = document.getElementById("message");
    if (sky === "Sunny") {
        state.sky = "☀️☀️☀️☀️☀️☀️☀️☀️";
        state.message = "Enjoy the sunshine🏖️";
        changeBackground_sunny();
    } else if (sky === "Cloudy") {
        state.sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
        state.message = "Go to the gym🧘‍♀️";
        changeBackground_cloudy();
        // document.body.style.backgroundColor = "lightsteelblue";
    } else if (sky === "Rainy") {
        state.sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
        state.message = "Stay home and watch TV📺";
        changeBackground_rainy();
    } else if (sky === "Snowy") {
        state.sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
        state.message = "Build a snowman☃️";
        document.body.className = "";
        document.body.style.backgroundColor = "whitesmoke";
    }
    tempSkyContainer.textContent = state.sky;
    tempMssgContainer.textContent = state.message;
}

const updateCityName = () => {
    const inputCity = document.querySelector("#cityNameInput").value;
    const headerCityName = document.querySelector("#headerCityName");;
    headerCityName.textContent = inputCity;
};

const resetCityName = () => {
    const cityNameInput = document.querySelector("#cityNameInput");
    cityNameInput.value = "Seattle";
};

const changeBackground_cloudy = () => {
    document.body.className ="cloudy_color";
}

const changeBackground_sunny = () => {
    document.body.className ="sunny_color";
}

const changeBackground_rainy = () => {
    document.body.className ="rainy_color";
}


const registerEventHandlers = () => {
    const increaseTempButton = document.querySelector("#increaseTemp");
    increaseTempButton.addEventListener("click", increaseTemp);

    const decreaseTempButton = document.querySelector("#decreaseTemp");
    decreaseTempButton.addEventListener("click", decreaseTemp);

    const skySelect = document.querySelector("#skySelect");
    skySelect.addEventListener("change", changeSky);
    // skySelect.addEventListener("change", changeBackground);

    const cityNameInput = document.querySelector("#cityNameInput");
    cityNameInput.addEventListener("input", updateCityName);

    const resetCity = document.querySelector("#cityNameReset");
    resetCity.addEventListener("click", resetCityName);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);