// console.log("hello!!!")

const formatTemp = (temp) => {
    // let color = "red"
    // let landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    if (temp > 80) {
        // color = "red";
        landscape = "🔥🔥🔥🔥🔥🔥🔥🔥";
    } else if (temp > 72) {
        // color = "orange";
        landscape = "🌷🌷🌷🌻🌻🌻🌷🌷🌷"; 
    } else if (temp > 60){
        color = "yellow";
        landscape = "🌾🌾🌾🌾🌾🌾🌾";
    } else if (temp > 40){
        color = "green";
        landscape = "🌲🌲🌲🌲🌲🌲🌲";
    } else {
        color = "teal";
        landscape = "⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️";
    }

    const newLandscape = document.querySelector("#weather_garden");
    newLandscape.textContent = landscape
    return color
}

const displaySky = (sky) => {
    let sky_image =  "☀️☀️☀️☀️☀️☀️"
    if (sky=="hot"){
        sky_image = "☀️☀️☀️☀️☀️☀️";
    if (sky=="sunny"){
        sky_image = "☀️☀️☀️☀️☀️☀️";
    } else if (sky=="partly_cloudy") {
        sky_image = "🌤 🌤 🌤 🌤 🌤 🌤";
    } else if (sky=="cloudy") {
        sky_image = "☁️☁️☁️☁️☁️☁️";
    } else if (sky=="rainy") {
        sky_image = "🌧️🌧️🌧️🌧️🌧️🌧️"
    }

    const newSky = document.querySelector("#garden_sky");
    newSky.textContent = sky_image
}

const increaseTemp = () => {
    const temperature = document.querySelector("#temperature");
    const temperature_value = parseFloat(temperature.textContent) + 1;
    color = formatTemp(temperature_value);
    temperature.className = color;
    temperature.textContent = String(temperature_value);
};

const decreaseTemp = () => {
    const temperature = document.querySelector("#temperature");
    const temperature_value = parseFloat(temperature.textContent) - 1;
    color = formatTemp(temperature_value);
    temperature.className = color;
    temperature.textContent = String(temperature_value);
    
};

const cityNameChange = () => {
    const name = document.querySelector("#name_input_box")
    const city_name = document.querySelector("#city_name")
    city_name.textContent = name.value
}

const resetCityName = () => {
    const name = document.querySelector("#name_input_box")
    const city_name = document.querySelector("#city_name")
    name.value = "Portland"
    city_name.textContent = name.value
}

const selectSky = () => {
    const sky_selection = document.querySelector("#sky_selection")
    displaySky(sky_selection.value)
}

const registerEventHandlers = () => {
    const upButton = document.querySelector("#upButton");
    upButton.addEventListener("click", increaseTemp);

    const downButton = document.querySelector("#downButton");
    downButton.addEventListener("click", decreaseTemp);

    const inputCityName = document.querySelector("#name_input_box");
    inputCityName.addEventListener("input", cityNameChange)

    const resetNameButton = document.querySelector("#city_name_reset")
    resetNameButton.addEventListener("click", resetCityName)

    const skySelector = document.querySelector("#sky_selection")
    console.log(skySelector)
    skySelector.addEventListener("change", selectSky)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);