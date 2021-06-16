// Temperature
const state = {
    current_temp:75
}

const changeTempColor = (event) => {
    // const currentTemp = document.querySelector("#current_temp");
    let color = "orange";
        if (state.current_temp > 80) {
            color = "red";
        } else if (state.current_temp >= 70) {
            color = "orange";
        } else if (state.current_temp >= 60) {
            color = "yellow";
        } else if (state.current_temp >= 50) {
            color = "green";
        } else if (state.current_temp < 50) {
            color = "blue";
        }
    currentTemp.classList = color;
}   

const increaseTemp = (event) => {
    const currentTemp = document.querySelector("#current_temp");
    state.current_temp += 1;
    currentTemp.textContent = state.current_temp;
    changeTempColor();
};

const decreaseTemp = (event) => {
    const currentTemp = document.querySelector("#current_temp");
    state.current_temp -= 1;
    currentTemp.textContent = state.current_temp;
    changeTempColor();
};


//Sky
const selectSky = (event) => {
    const SelectedSky = document.querySelector('#sky_result');
    if (event.target.value == "sunny") {
        SelectedSky.textContent = "☀️ 🌤 ☀️ 🌤 ☀️";
    } else if (event.target.value == "cloudy") {
        SelectedSky.textContent = "⛅️ ☁️ ⛅️ ☁️ ⛅️";
    } else if (event.target.value == "rainy") {
        SelectedSky.textContent = "⛈ ☔️ ⛈ ☔️ ⛈";
    } else if (event.target.value == "snowy") {
        SelectedSky.textContent = "☃️ ❄️ ☃️ ❄️ ☃️";
    };
};


//Registering event handler: someElement.addEventListener("event name",reatToEvent);
const registerEventHanglers = (event) => {
    const increaseButton = document.querySelector("#increase_temp");
    increaseButton.addEventListener("click",increaseTemp);
    const decreaseButton = document.querySelector("#decrease_temp");
    decreaseButton.addEventListener("click",decreaseTemp);
    
    const skySelection= document.querySelector("#SkyOptions");
    skySelection.addEventListener("change", selectSky);

    
}

//document-level event handler registration
document.addEventListener("DOMContentLoaded",registerEventHanglers);