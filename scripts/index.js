// Wave 2
// Update temp --- Increase and Decrease
const state = {
    tempCount: 49,
    landscape: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
    // skyline: "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"

};

const updateTempCount = () => {
    const tempCounterElement = document.querySelector("#tempCounter");
    tempCounterElement.textContent = `${state.tempCount}°F`;
}

const updateLandscape = () => {
    const landscapeElement = document.querySelector("#landscape");
    let temp = state.tempCount

    if (temp >= 80) {
        landscapeElement.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    } else if (79 >= temp && temp >= 70){
        landscapeElement.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    } else if (69 >= temp && temp >= 60){
        landscapeElement.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    } else{
        landscapeElement.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    }

}

// Change color of temp 
const changeTextColor = (event) => {
    let temp = state.tempCount

    if (temp >= 80) {
        document.getElementById("tempCounter").style.color = "#ff0000";
    } else if (79 >= temp && temp >= 70){
        document.getElementById("tempCounter").style.color = "#ffa500";
    } else if (69 >= temp && temp >= 60){
        document.getElementById("tempCounter").style.color = "#ffff00";
    } else if (59 >= temp && temp >= 50){
        document.getElementById("tempCounter").style.color = "#00ff00";
    } else {
        document.getElementById("tempCounter").style.color = "#008080";
    }

};

const increaseTempButton = document.querySelector("#increaseTempButton");

const increaseTemp = (event) => {
    // const tempIncreaseContainer = document.querySelector("#tempIncreaseContainer");
    state.tempCount += 1;
    updateTempCount();
    changeTextColor();
    updateLandscape();
}

increaseTempButton.addEventListener("click", increaseTemp)

const decreaseTempButton = document.querySelector("#decreaseTempButton");

const decreaseTemp = (event) => {
    // const tempIncreaseContainer = document.querySelector("#tempDecreaseContainer");
    state.tempCount -= 1;
    updateTempCount();
    changeTextColor();
    updateLandscape();
}

decreaseTempButton.addEventListener("click", decreaseTemp)


// Wave 3
const dropdownMenu = document.querySelector("#sky");

const selectSkyline = (event) => {
    let sel = document.getElementById('sky');
    console.log(sel.value)

    const skylineElement = document.querySelector("#skyline");

    if (sel.value === "sunny"){
        skylineElement.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
    } else if (sel.value === "cloudy"){
        skylineElement.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
    } else if (sel.value === "rainy"){
        skylineElement.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
    } else if (sel.value === "snowy"){
        skylineElement.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    }

}

dropdownMenu.addEventListener("change",selectSkyline)

// Wave 4

const cityInput = document.querySelector("#city");

const changeCity = (event) => {
    let sel = document.getElementById('city');
    // console.log(sel.value)

    const newCityElement = document.querySelector("#newCity");

    newCityElement.textContent = sel.value

}

cityInput.addEventListener("change",changeCity)

// Wave 5

const cityResetButton = document.querySelector("#cityResetButton");

const resetCity = (event) => {
    // let sel = document.getElementById('city');
    // // console.log(sel.value)

    const newCityElement = document.querySelector("#newCity");

    const newCityInputElement = document.querySelector("#city")

    newCityElement.textContent = "City"

    newCityInputElement.value = "City"


}

cityResetButton.addEventListener("click",resetCity)




