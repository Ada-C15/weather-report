const updateCityName = () => {
    const cityNameInput = document.getElementById("cityNameInput").value;
    const headerCityName = document.getElementById("headerCityName");
    headerCityName.textContent = cityNameInput;
}

const resetCityName = () => {
    const cityNameImput = document.getElementById("cityNameInput");
    cityNameImput.value = "";
    updateCityName();
}

const updateSky = () => {
    const inputSky = document.getElementById("skySelect").value;
    const skyContainer = document.getElementById("sky");
    let sky = "";
    let skyColor = "";
    if (inputSky === "Sunny") {
        sky = "🌈 ☁️ ☀️ ☁️ ☁️ 🦋 ☁️";
        skyColor = "sunny";
    } else if (inputSky === "Cloudy") {
        sky = "☁️ ☁️ 🌥 ☁️ ☁️ 🦅 ☁️";
        skyColor = "cloudy";
    } else if (inputSky === "Rainy") {
        sky = "🌧 💦 🌧 🌦 🌧 💦 💧";
        skyColor = "rainy";
    } else if (inputSky === "Snowy") {
        sky = "🌨 🌨 ❄️ ❄️ 🌥 🌨 ❄️";
        skyColor = "snowy";
    } else if (inputSky === "Stormy") {
        sky = "⛈ ⚡️ 🌩 🌪 ⛈ 🌩 ⚡️";
        skyColor = "stormy"; 
    } else if (inputSky === "Windy") {
        sky = "🌬 ☁️ ☁️ 🌤 ☁️ 💨 ☁️ ";
        skyColor = "windy"; 
    } else if (inputSky === "End of the World") {
        sky = "☄️☁️ 🦇 🌑 ☁️ 💥 ☄️💥";
        skyColor = "end"; 
    }
    skyContainer.textContent = sky;
    const gardenContent = document.getElementById("gardenContent");
    gardenContent.classList = `garden-content ${skyColor}`;
}
const registerEventHandlers = () => {
    
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.addEventListener("input", updateCityName);

    const cityNameResetBtn = document.getElementById("cityNameReset");
    cityNameResetBtn.addEventListener("click", resetCityName)

    const skySelect = document.getElementById("skySelect");
    skySelect.addEventListener("change", updateSky);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

