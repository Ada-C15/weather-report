const state = {
    tempValue: 70,
    landscape: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
    sky: "☀️☀️☀️☀️☀️☀️☀️☀️",
    message:"",
  };

const increaseTemp = () =>{
    const tempValueContainer = document.getElementById("tempValue");
    state.tempValue += 1;
    tempValueContainer.textContent = state.tempValue;
    changeTempColor(state.tempValue);
    changeLandscape(state.tempValue);
}

const decreaseTemp = () =>{
    const tempValueContainer = document.getElementById("tempValue");
    state.tempValue -= 1;
    tempValueContainer.textContent = state.tempValue;
    changeTempColor(state.tempValue);
    changeLandscape(state.tempValue);
}

const changeTempColor = () =>{
    const tempValueContainer = document.getElementById("tempValue");
    tempValueContainer.textContent = state.tempValue;
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
}

const changeLandscape = () =>{
    const tempValueContainer = document.getElementById("tempValue");
    tempValueContainer.textContent = state.tempValue;
    const tempLandscapeContainer = document.getElementById("landscape");
    tempLandscapeContainer.textContent = state.landscape;
    if (state.tempValue >= 80){
        state.landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.tempValue >= 70) {
        state.landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (state.tempValue >= 60) {
        state.landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else {
        state.landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
}

const changeSky = () =>{
    const sky = document.getElementById("skySelect").value;
    const tempSkyContainer = document.getElementById("sky");
    const tempMssgContainer = document.getElementById("message");
    tempSkyContainer.textContent = state.sky;
    tempMssgContainer.textContent = state.message;
    if (sky === "Sunny") {
        state.sky = "☀️☀️☀️☀️☀️☀️☀️☀️";
        state.message = "Enjoy the sunshine🏖️";
        document.body.style.backgroundColor = "lightyellow";
    } else if (sky === "Cloudy") {
        state.sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
        state.message = "Go to the gym🧘‍♀️";
        document.body.style.backgroundColor = "lightsteelblue";
    } else if (sky === "Rainy") {
        state.sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
        state.message = "Stay home and watch TV📺";
        document.body.style.backgroundColor = "grey";
    } else if (sky === "Snowy") {
        state.sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
        state.message = "Build a snowman☃️";
        document.body.style.backgroundColor = "whitesmoke";
    }
}

const updateCityName = () => {
    const inputCity = document.getElementById("cityNameInput").value;
    const headerCityName = document.getElementById("headerCityName");;
    headerCityName.textContent = inputCity;
};


const registerEventHandlers = () => {
    const increaseTempButton = document.querySelector("#increaseTemp");
    increaseTempButton.addEventListener("click", increaseTemp);

    const decreaseTempButton = document.querySelector("#decreaseTemp");
    decreaseTempButton.addEventListener("click", decreaseTemp);

    const skySelect = document.getElementById("skySelect");
    skySelect.addEventListener("change", changeSky);

    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.addEventListener("input", updateCityName);
};



document.addEventListener("DOMContentLoaded", registerEventHandlers);