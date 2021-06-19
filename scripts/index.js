const api = {
    key: "e98d70f23dbbc7c8585ab61f5eeccd93",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

let globalTempValue = 70;

//set evenListener on search box keypress event
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);


//Key is looking to be pressed at 13, based on ASCII it's CR aka Enter-Return key
function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

//when keypress event initialized it will run a fetch request. Get API,attach weather info based on our query that've entered to searchbox value
function getResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        console.log(weather);
        return weather.json();
    }).then(setGlobalTempValue).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);
    const city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    const now = new Date();
    const date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
    //temp
    const temp = document.querySelector('.current #temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    const weather_elem = document.querySelector('.current .weather');
    weather_elem.innerText = weather.weather[0].main;

    const hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

//set data from openWeather's API - dynamic temperature value to my global variable
function setGlobalTempValue(weather) {
    globalTempValue = Math.round(weather.main.temp);
    return weather
}

function dateBuilder (date_attr) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = days[date_attr.getDay()];
    const date = date_attr.getDate();
    const month = months[date_attr.getMonth()];
    const year = date_attr.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

function updateCityName() {
    const inputName = document.getElementById("inputSearchBox").value;
    const headerCityName = document.getElementById("headerCity");
    headerCityName.textContent = inputName;
};

function resetCityName() {
    const resetSearchBox = document.getElementById("inputSearchBox");
    resetSearchBox.value = "Search for a city";
}

function setSky() {
    const getSky = document.getElementById("skyDropdown").value;
    const displaySky = document.getElementById("sky");

    let sky = "";
    let skyColor = "";
    if (getSky === "Cloudy") {
        sky = "☁️☁️🌤☁️☁️";
        skyColor = "cloudy";
    } else if (getSky === "Sunny") {
        sky = "☁️ ☁️ ☀️ ☁️  ☁️";
        skyColor = "sunny";
    } else if (getSky === "Rainy") {
        sky = "🌧🌈💧🌧🌧";
        skyColor = "rainy";
    } else if (getSky === "Snowy") {
        sky = "🌨❄️🌨🌨";
        skyColor = "snowy";
    }
    displaySky.textContent = sky;
    const gardenContent = document.getElementById("gardenPlayground");
    gardenContent.classList = `garden_playground ${skyColor}`;
};

function tempChangeColor (currentTemp) {
    const tempValueContainer = document.getElementById("temp");
    let color = "fuchsia";
    if ( currentTemp >= 80) {
        color = "turquoise";
    } else if (currentTemp >= 70) {
        color = "coral";
    } else if (currentTemp >= 60) {
        color = "blueviolet";
    } else if (currentTemp >= 34) {
        color = "lime";
    } else if (currentTemp >= 22) {
        color = "gainsboro";
    } else {
        color = "white";
    }
    tempValueContainer.classList = color;
}
function updateGarden (currentTemp) {
    const changeGarden = document.getElementById("landscape");
    let landscape = "⛄️🌲🍂🌲🍁⛄️🍂🌲";
    if ( currentTemp >= 70) {
        landscape = "🐍_🦂_🌵__🐍";
    } else if (currentTemp >= 60) {
        landscape = "🌸🌿☘️🌱_🌻🌷";
    } else if (currentTemp >= 50) {
        landscape = "🌾🌾_🍃_🪨__🛤_🍃";
    }
    changeGarden.textContent = landscape;
}

function updateTemp (globalTempValue) {
    const tempValueContainer = document.getElementById("temp");
    tempValueContainer.textContent = globalTempValue;
    tempChangeColor(globalTempValue);
    updateGarden(globalTempValue);
}

function increaseTemp() {
    globalTempValue += 1;
    updateTemp(globalTempValue);
};

function decreaseTemp() {
    globalTempValue -= 1;
    updateTemp(globalTempValue);
}

/* -F to C Temp Change- */
function getTemperature() {
    if (document.getElementById("fahrenheit").checked == true) {
        let newValue = Math.round((globalTempValue - 32) * 5 / 9);
        document.getElementById("answer").innerText = newValue + "°C"
    } else if (document.getElementById("celsius").checked == true) {
        let newValue = Math.round(globalTempValue * 9 / 5 + 32);
        document.getElementById("answer").innerText = newValue + "°F"
    }
}

const registerEventHandlers = () => {
    updateCityName();
    const updateCity = document.getElementById("inputSearchBox");
    updateCity.addEventListener("input", updateCityName);

    const resetCity= document.getElementById("searchReset");
    resetCity.addEventListener("click", resetCityName);

    setSky();
    const skySelect = document.getElementById("skyDropdown");
    skySelect.addEventListener("change", setSky);

    updateTemp(globalTempValue);

    const increaseTempControl = document.getElementById("increaseTempControl");
    increaseTempControl.addEventListener("click", increaseTemp);
    
    const decreaseTempControl = document.getElementById("decreaseTempControl");
    decreaseTempControl.addEventListener("click", decreaseTemp);

}

document.addEventListener("DOMContentLoaded", registerEventHandlers);