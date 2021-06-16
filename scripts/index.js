let tempValue = 70;

const updateTempColor = (currentTemp) => {
    const tempValueBox = document.getElementById("tempValue");
    let color = "teal";
    if (currentTemp >= 80) {
        color = "red";
    } else if (currentTemp >= 70) {
        color = "orange";
    } else if (currentTemp >= 60) {
        color = "yellow";
    } else if (currentTemp >= 50) {
        color = "green";
    }
    tempValueBox.classList = color;
}

const updateGarden = (currentTemp) => {
    const landscapeBox = document.getElementById("landscape");
    let landscape = "🗻🐻‍❄️⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🐇🌲🗻🏔";
    if (currentTemp >= 80) {
        landscape = "🌵🏜_🐪_🐍🌵_🦂🏜_🐫🌵"
    } else if (currentTemp >= 70) {
        landscape = "🌸🦩🌴__🌷🌺🌿_🦜🌴_🌻🏝";
    } else if (currentTemp >= 60) {
        landscape = "🌾🍃_🍃_⛰_🍁⛰_🍂🌾🌾_🍃";
    }
    landscapeBox.textContent = landscape;
}

const updateTemp = tempValue => {
    const tempValueBox = document.getElementById("tempValue");
    tempValueBox.textContent = tempValue;
    updateTempColor(tempValue);
    updateGarden(tempValue)
}

const increaseTemp = () => {
    tempValue += 1;
    updateTemp(tempValue)
};

const decreaseTemp = () => {
    tempValue -= 1;
    updateTemp(tempValue)
};

const increaseTempButton = document.getElementById("increaseTempControl");
increaseTempButton.addEventListener("click", increaseTemp);

const decreaseTempButton = document.getElementById("decreaseTempControl");
decreaseTempButton.addEventListener("click", decreaseTemp);

const updateSky = () => {
    const inputSky = document.getElementById("skySelect").value;
    const skyBox = document.getElementById("sky");
    let sky = "";
    let skyColor = "";
    if (inputSky === "Olympia") {
        sky = "☁️☁️ ☁️ ☁️☁️🌤☁️☁️ ☁️☁️ ☁️";
        skyColor = "cloudy";
    } else if (inputSky === "Sahara") {
        sky = "☁️     ☁️   ☁️ ☀️ ☁️  ☁️";
        skyColor = "sunny";
    } else if (inputSky === "Niagra Falls") {
        sky = "🌧💵🌈🌧💵🌧💧💎🌧🌦💵🌧💧🌈🌧💎🌧";
        skyColor = "rainy";
    } else if (inputSky === "Mount Everest") {
        sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
        skyColor = "snowy";
    }
    skyBox.textContent = sky;
    const gardenContent = document.getElementById("garden");
    gardenContent.classList = `garden ${skyColor}`;
};

const skySelect = document.getElementById("skySelect")
skySelect.addEventListener("change", updateSky)