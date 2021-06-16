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
        sky = "☁️🌈 ☁️ ☀️ ☁️ ☁️ 🦋 ☁️";
        skyColor = "sunny";
    } else if (inputSky === "Cloudy") {
        sky = "☁️ ☁️ 🌥 ☁️ ☁️☁️ 🦅 ☁️";
        skyColor = "cloudy";
    } else if (inputSky === "Rainy") {
        sky = "🌧 🌧 💦 🌧 🌦 🌧 💦 💧";
        skyColor = "rainy";
    } else if (inputSky === "Snowy") {
        sky = "❄️ 🌨 🌨 ❄️ ❄️ 🌥 🌨 ❄️";
        skyColor = "snowy";
    } else if (inputSky === "Stormy") {
        sky = "⛈ ⚡️ 🌩 🌪 ⛈ 🌩 ⚡️ ⛈ ";
        skyColor = "stormy"; 
    } else if (inputSky === "Windy") {
        sky = "🌬 💨 ☁️ ☁️ 🌤 ☁️ 💨 ☁️ ";
        skyColor = "windy"; 
    } else if (inputSky === "End of the World") {
        sky = "☄️☁️ 🦇 🌑 ☁️ 💥 ☄️💥";
        skyColor = "end"; 
    }
    skyContainer.textContent = sky;
    const gardenContent = document.getElementById("gardenContent");
    gardenContent.classList = `garden-content ${skyColor}`;
    backgroundContent.classList = `background-content ${skyColor}`;
}

let tempValue = 80;

const updateTempStyles = currentTemp => {
    const tempValueContainer = document.getElementById("tempValue");
    let color = "violet";
    if (currentTemp >= 90) {
        color = "red";
    } else if (currentTemp >= 80) {
        color = "orange";
    } else if (currentTemp >= 70) {
        color = "yellow";
    } else if (currentTemp >= 60) {
        color = "green";
    } else if (currentTemp >= 50) {
        color = "blue";
    } else if (currentTemp >= 40) {
        color = "indigo";
    } else if (currentTemp = 30) {
        color = "violet";
    }
    tempValueContainer.classList = color;
}

const updateGarden = (currentTemp) => {
    const landscapeContainer = document.getElementById("landscape");
    let landscape = "🌲 ☃️ 🎄 🎅 🎁 ⛄️ 🌲 🦌";
    if ( currentTemp >= 90) {
        landscape = "🔥 🌵 🦂 🌵 🔥 🐍 🏜 🌵";
    } else if (currentTemp >= 80) {
        landscape = "🌴 🍸 🦩 🌊 🌴 🍹 🏝 🌊";
    } else if (currentTemp >= 70) {
        landscape = "🌺 🪴 🧚 🌸 🌱 🌼 🧚‍♀️ 🌻";
    } else if (currentTemp >= 60) {
        landscape = "⛵️ 🪨 ⛰ 🌾 🐇 🪨 👩‍🌾 🌾";
    } else if (currentTemp >= 50) {
        landscape = "🧋 🎮 🍑 🎬 🖥 🍆 🥘 👽 ";
    } else if (currentTemp >= 40) {
        landscape = "🍄 🍂 🍁 🍄 🍗 🧣 🦃 🍁";
    } else if (currentTemp >= 30) {
        landscape = "🌲 ☃️ 🎄 🎅 🎁 ⛄️ 🌲 🦌";
    }
    landscapeContainer.textContent = landscape;
}

const updateTemp = tempValue => {
    const tempValueContainer = document.getElementById("tempValue");
    tempValueContainer.textContent = tempValue;
    updateTempStyles(tempValue);
    updateGarden(tempValue);
}

const incTemp = () => {
    tempValue += 1;
    updateTemp(tempValue);
}

const decTemp = () => {
    tempValue -= 1;
    updateTemp(tempValue);
}

const registerEventHandlers = () => {
    
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.addEventListener("input", updateCityName);

    const cityNameResetBtn = document.getElementById("cityNameReset");
    cityNameResetBtn.addEventListener("click", resetCityName)

    const skySelect = document.getElementById("skySelect");
    skySelect.addEventListener("change", updateSky);

    updateTemp(tempValue);
    
    const increaseTemp = document.getElementById("increaseTemp");
    increaseTemp.addEventListener("click", incTemp);
    
    const decreaseTemp = document.getElementById("decreaseTemp");
    decreaseTemp.addEventListener("click", decTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

