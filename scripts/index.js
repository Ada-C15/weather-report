//To dos:
//Change temp text color 
//reset city name input box (currently - index.html button onclick)

// Temperature
const state = {
    current_temp:78
}

const changeTempColor = (event) => {
    const currentTemp = document.querySelector("#current_temp");
    let color = "orange";
        if (state.current_temp >= 80) {
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
    currentTemp.className = color;
}   

const changeGarden = (event) => {
    const gardenContainer = document.querySelector("#garden");
    if (state.current_temp > 80) {
        garden_emojis = "🌻 🍻 🏖 🏊🏻‍♀️ 🌞";
    } else if (state.current_temp >= 70) {
        garden_emojis = "🌸 🐕 🏕 🥂 ⚽️";
    } else if (state.current_temp >= 60) {
        garden_emojis = "🌿 🦌 🗽 🧘🏻‍♀️ 🎡 ";
    } else if (state.current_temp >= 50) {
        garden_emojis = "🍁 🍂 🏮 ⛩ 🐿";
    } else if (state.current_temp < 50) {
        garden_emojis = "⛄️ 🐧 🌬 ☕️ ⛷";
    }
    gardenContainer.textContent = garden_emojis;
}  


const increaseTemp = (event) => {
    const currentTemp = document.querySelector("#current_temp");
    state.current_temp += 1;
    currentTemp.textContent = state.current_temp;
    changeTempColor();
    changeGarden();
};

const decreaseTemp = (event) => {
    const currentTemp = document.querySelector("#current_temp");
    state.current_temp -= 1;
    currentTemp.textContent = state.current_temp;
    changeTempColor();
    changeGarden();
};


//Sky
const selectSky = (event) => {
    const SelectedSky = document.querySelector('#sky_result');
    if (event.target.value == "select") {
        SelectedSky.textContent = "☀️ 🌤 ☁️☃️ ❄️";
    } else if (event.target.value == "sunny") {
        SelectedSky.textContent = "☀️ 🌤 ☀️ 🌤 ☀️";
    } else if (event.target.value == "cloudy") {
        SelectedSky.textContent = "⛅️ ☁️ ⛅️ ☁️ ⛅️";
    } else if (event.target.value == "rainy") {
        SelectedSky.textContent = "⛈ ☔️ ⛈ ☔️ ⛈";
    } else if (event.target.value == "snowy") {
        SelectedSky.textContent = "☃️ ❄️ ☃️ ❄️ ☃️";
    };
};

//City 
const changeCity = (event) => {
    const cityName = document.querySelector("#headercity");
    cityName.textContent = event.target.value;
}  
const resetCity = (event) => {
    const cityName = document.querySelector("#headercity");
    cityName.textContent = "";
  };


//Registering event handler: someElement.addEventListener("event name",reatToEvent);
const registerEventHanglers = (event) => {
    const increaseButton = document.querySelector("#increase_temp");
    increaseButton.addEventListener("click",increaseTemp);
    const decreaseButton = document.querySelector("#decrease_temp");
    decreaseButton.addEventListener("click",decreaseTemp);
    
    const skySelection= document.querySelector("#SkyOptions");
    skySelection.addEventListener("change", selectSky);

    const cityInput = document.querySelector("#cityname");
    cityInput.addEventListener("input", changeCity);
    const resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", resetCity);
}

//document-level event handler registration
document.addEventListener("DOMContentLoaded",registerEventHanglers);