let currentTemp = 100;
let isCelsius = false; 

const updateTemperature = currentTemp => {
    const tempContainer = document.getElementById("temp-integer"); 
    tempContainer.textContent = currentTemp;
    changeTempColor(currentTemp);
    changeLandscape(currentTemp);
};


const increaseTemperature = () => { 
    currentTemp += 1;
    updateTemperature(currentTemp);
};

const decreaseTemperature = () => { 
    currentTemp -= 1; 
    updateTemperature(currentTemp);
};

const changeTempColor = currentTemp => { 
    const tempElement = document.getElementById("temp-integer"); 
    let color = "purple"; 
    if ((currentTemp >= 80 && isCelsius === false) ||
        (currentTemp >= 27 && isCelsius === true)) { 
        color = "red"; 

    
    } else if ((currentTemp >= 70 && isCelsius === false) ||
    (currentTemp >= 21 && isCelsius === true)) { 
        color = "orange";

    } else if ((currentTemp>= 60 && isCelsius === false) || 
    (currentTemp >= 15 && isCelsius === true)) { 
        color = "yellow"; 

    } else if ((currentTemp>= 50 && isCelsius === false) ||
    (currentTemp >= 10 && isCelsius === true)) { 
        color = "green";

    } else { 
        color = "teal";
    }

    tempElement.className = color; 

}; 



const changeLandscape = currentTemp => {
    const landscapeContainer = document.getElementById("landscape");
    let landscape = ""; 
    if ((currentTemp >= 80 && isCelsius === false) ||
        (currentTemp >= 27 && isCelsius === true)) { 
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂" 
    
    } else if ((currentTemp >= 70 && isCelsius === false) ||
    (currentTemp >= 21 && isCelsius === true)) { 
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    } else if (( currentTemp >= 60 && isCelsius === false) ||
    (currentTemp >= 15 && isCelsius === true)) { 
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    } else  { 
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    } 
    landscapeContainer.textContent = landscape; 

}; 

const changeSky = () => { 
    const skyMenu = document.getElementById("sky-menu").value; 
    const skyWeather = document.getElementById("sky-weather");
    let sky = ""; 
    if (skyMenu === "Sunny") { 
        sky = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
 
    } else if (skyMenu === "Cloudy") { 
        sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"

    } else if(skyMenu === "Rainy") { 
        sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"

    } else if(skyMenu === "Snowy") { 
        sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"

    }else if(skyMenu === "Tornado") {
        sky = "🥞🥞🥞🥞🥞🥞🥞🥞🥞"

    } else if(skyMenu === "Hail") {
        sky = "😒😒😒😒😒😒😒😒😒"

    } else if(skyMenu === "Fire & Brimstone") {
        sky = "✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️"
    }
     skyWeather.textContent = sky; 

}; 

const updateCityName = () => { 
    const CityName = document.getElementById("cityNameInput"). value; 
    const CityHeaderName = document.getElementById("headerCityName"); 
    CityHeaderName.textContent = CityName; 

}; 

const resetCityName = () => { 
    const resetCity = document.getElementById("cityNameInput"); 
     resetCity.value = "Albany"; 
    updateCityName();

}; 


const convertTemp = () => {
    const tempConvertBtn = document.getElementById("temp-converter-button");
    if (isCelsius=== true) { 
        currentTemp = Math.round((currentTemp * 9 / 5 )+ 32);
        isCelsius = false; 
        tempConvertBtn.textContent = "Celsius"
        updateTemperature(currentTemp);
    }
    

    else if (isCelsius === false) {
        currentTemp = Math.round((currentTemp - 32) * 5 / 9); 
        isCelsius = true;
        tempConvertBtn.textContent = "Fahrenheit"
        updateTemperature(currentTemp); 

    } 
        
}; 



const registerEventHandlers = () => {
    const tempIncreaseBtn = document.getElementById("increase-temp-button"); 
    tempIncreaseBtn.addEventListener("click", increaseTemperature); 

    const tempDecreaseBtn = document.getElementById("decrease-temp-button"); 
    tempDecreaseBtn.addEventListener("click", decreaseTemperature); 

    updateTemperature(currentTemp);

    changeSky();
    const skyMenu = document.getElementById("sky-menu"); 
    skyMenu.addEventListener("change", changeSky); 

    updateCityName(); 
    const CityNameInput = document.getElementById("cityNameInput"); 
    CityNameInput.addEventListener("input", updateCityName); 

    resetCityName(); 
    const resetCityNameButton = document.getElementById("resetCityName"); 
    resetCityNameButton.addEventListener("click", resetCityName); 

    const tempConvertBtn = document.getElementById("temp-converter-button");
    tempConvertBtn.addEventListener("click", convertTemp); 
    
}; 

    document.addEventListener("DOMContentLoaded", registerEventHandlers);
