let tempValue = 71;

const updateSky = () => {
    const inputSky = document.getElementById("skySelect").value;
    const skyContainer = document.getElementById("sky");
    let sky = "";
    let skyColor = "";
    if (inputSky === "Cloudy") {
        sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
        skyColor = "cloudy";
    } else if (inputSky === "Sunny") {
        sky = "☁️     ☁️   ☁️ ☀️ ☁️  ☁️";
        skyColor = "sunny;"
    } else if (inputSky ==="Rainy") {
        sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
        skyColor = "snowy";
    }
    skyContainer.textContent = sky;
    const gardenContent = document.getElementById("gardenContent")
    gardenContent.classList = `garden__content ${skyColor}`
};

const updateCityName = () => {
    const inputName = document.getElementById("cityNameInput").value;
    const headerCityName = document.getElmentById("headerCityName");
    headerCityName.textContent = inputName;
};

const resetCityName = () => {
    const cityNameInput = document.getElmentById("cityNameInput");
    cityNameInput.value = "Seattle";
    updateCityName();
};

const updateTempStyles = (currentTemp) => {
    const tempValueContainer = document.getElementById("tempValue");
    tempValueContainer.textContent = tempValue;
    let color = "teal";
    if ( currentTemp >= 80) {
        color = "red";
    } else if (currentTemp >=70) {
        color = "orange";
    } else if (currentTemp >= 60) {
        color = "yellow";
    } else if (currentTemp >= 50) {
        color = "green";
    }
    tempValueContainer.classList = color;
}