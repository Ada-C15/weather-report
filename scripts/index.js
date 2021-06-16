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
    

}