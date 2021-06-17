const setIndicatorColor = (tag, value) => {
    if (value >= 80) {
        tag.style.color = "red";
    } else if ((value >= 70) && (value <= 79)) {
        tag.style.color = "orange";
    } else if ((value >= 60) && (value <= 69)) {
        tag.style.color = "yellow";
    } else if ((value >= 50) && (value <= 59)) {
        tag.style.color = "green"; 
    } else {
        tag.style.color = "teal"
    };
};

const setGroundLandscape = (tag, value) => {
    if (value >= 80) {
        tag.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if ((value >= 70) && (value <= 79)) {
        tag.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if ((value >= 60) && (value <= 69)) {
        tag.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else {
        tag.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    };
};

const setSkyLandscape = (tag, value) => {
    if (value == "sunny") {
        tag.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    } else if (value == "cloudy") {
        tag.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    } else if (value == "rainy") {
        tag.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧 ";
    } else if (value == "snowy") {
        tag.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨 ";
    };
};

const changeSky = () => {
    var sky = document.getElementById("sky-landscape");
    var weather = document.getElementById("sky-type");
    var value = weather.value;
    setSkyLandscape(sky, value);
};

var skyType = document.getElementById("sky-type");
skyType.addEventListener("change", changeSky);

const increaseTemp = () => {
    var indicator = document.getElementById("temperature-indicator");
    var ground = document.getElementById("ground-landscape");
    var temperature = parseInt(indicator.textContent);
    //temperature++;
    indicator.textContent = ++temperature;   
    setIndicatorColor(indicator, temperature);
    setGroundLandscape(ground, temperature);
}; 

var upArrow = document.getElementById("up-arrow");
upArrow.addEventListener("click", increaseTemp, false);

const decreaseTemp = () => {
    var indicator = document.getElementById("temperature-indicator");
    var ground = document.getElementById("ground-landscape");
    var temperature = parseInt(indicator.textContent);
    //temperature = temperature - 1;
    indicator.textContent = --temperature;
    setIndicatorColor(indicator, temperature);
    setGroundLandscape(ground, temperature);
};

var downArrow = document.getElementById("down-arrow");
downArrow.addEventListener("click", decreaseTemp, false);

