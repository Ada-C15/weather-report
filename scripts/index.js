const state = {
    clickCount: 70,
};


const changeColor = (event) => {
    let temp = document.getElementById("tempCount");
    if (state.clickCount >= 80) {
        temp.style.color = "red";
    } else if (state.clickCount >= 70 && state.clickCount <= 79) {
        temp.style.color = "orange";
    } else if (state.clickCount >= 60 && state.clickCount <= 69) {
        temp.style.color = "yellow";
    } else if (state.clickCount >= 50 && state.clickCount <= 59) {
        temp.style.color = "green";
    } else if (state.clickCount < 50) {
        temp.style.color = "teal";
    }
};

const changeLandscape = (event) => {
    const landscapeContainer = document.querySelector("#landscapeContainer");
        if (state.clickCount >= 80) {
            landscapeContainer.textContent = "🌵🐍🦂🌵🌵🐍🏜🦂";
        } else if (state.clickCount >= 70 && state.clickCount <= 79) {
            landscapeContainer.textContent = "🌸🌿🌼🌷🌻🌿☘️🌱🌻🌷";
        } else if (state.clickCount >= 60 && state.clickCount <= 69) {
            landscapeContainer.textContent = "🌾🌾🍃🪨🛤🌾🌾🌾_🍃";
        } else if (state.clickCount < 59) {
            landscapeContainer.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
        }
}

const changeSky = () => {
    const selectSky = document.getElementById("sky-select").value;
    const skyWeatherGarden = document.getElementById("skyContainer");
    if (selectSky === "cloudy") {
        skyWeatherGarden.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    } else if (selectSky === "sunny") {
        skyWeatherGarden.textContent = "☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️";
    } else if (selectSky === "rainy") {
        skyWeatherGarden.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else if (selectSky === "snowy") {
        skyWeatherGarden.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    }
}

const changeCity = () => {
    const name = document.getElementById("city").value;
    const cityOf = document.getElementById("cityOf");
    cityOf.textContent = name;
}

const resetCity = () => {
    const cityOf = document.getElementById("city");
    cityOf.value = "Birmingham";
    changeCity();
}

const tempIncrease = () => {
    const tempCountContainer = document.getElementById("tempCount");
    state.clickCount +=1;
    changeColor();
    tempCountContainer.textContent = state.clickCount + "°";
    changeLandscape();
};

const tempDecrease = () => {
    const tempDecreaseCountContainer = document.getElementById("tempCount");
    state.clickCount -=1;
    changeColor();
    tempDecreaseCountContainer.textContent = state.clickCount + "°";
    changeLandscape();
};

const changeBackground = () => {
    let body = document.body;
    body.classList.toggle("day");
}

const registerEventHandlers = () => {
    const increaseButton = document.querySelector("#temperatureIncrease");
    increaseButton.addEventListener("click", tempIncrease);

    const decreaseButton = document.querySelector("#temperatureDecrease");
    decreaseButton.addEventListener("click", tempDecrease);

    changeSky();
    const skySelect = document.getElementById("sky-select");
    skySelect.addEventListener("change", changeSky);

    changeCity();
    const city = document.getElementById("city")
    city.addEventListener("input", changeCity);

    const cityReset = document.getElementById("cityReset");
    cityReset.addEventListener("click", resetCity);

    const dayModeButton = document.querySelector(".slider");
    dayModeButton.addEventListener("click", changeBackground);
}; 

document.addEventListener("DOMContentLoaded", registerEventHandlers);