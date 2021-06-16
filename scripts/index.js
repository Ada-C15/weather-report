let tempValue = 71;
let sky = ""

const selectSky = function(sky) {
    const skyOption = document.getElementById("skySelect")
    const getInput = skyOption.options[skyOption.selectedIndex].value;
    // console.log(getInput)
    const skyContainer = document.getElementById("sky");
    // console.log(skyContainer)
    
    if (getInput === "Sunny") {
        sky = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️'
    } else if (getInput === "Cloudy") {
        sky = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️'
    } else if (getInput === "Rainy") {
        sky = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧'
    } else if (getInput === "Snowy") {
        sky = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨'
    }
    skyContainer.textContent = sky;
}


const updateTemp = function(tempValue) {
    const tempValueContainer = document.getElementById("tempValue")
    const landscapeContainer = document.getElementById("landscape")
    // console.log(tempValueContainer)
    tempValueContainer.textContent = tempValue
    if (tempValue >= 80) {
        tempValueContainer.style.color = 'red'
        landscapeContainer.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂'
    } else if (tempValue >= 70) {
        tempValueContainer.style.color = 'orange'
        landscapeContainer.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷'
    } else if (tempValue >= 60) {
        tempValueContainer.style.color = 'yellow'
        landscapeContainer.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃'
    } else if (tempValue >= 50) {
        tempValueContainer.style.color = 'green'
        landscapeContainer.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲'
    } else {
        tempValueContainer.style.color = 'teal'
        landscapeContainer.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲'
    }

}

const registerEventHandlers = function() {
    updateTemp(tempValue);

    const incButton = document.querySelector("#increaseTempControl")
    incButton.addEventListener("click", function() {
        tempValue += 1
        updateTemp(tempValue)
    })

    const decButton = document.querySelector("#decreaseTempControl")
    decButton.addEventListener("click", function() {
        tempValue -= 1
        updateTemp(tempValue)
    })

    selectSky(sky);
    const skyMenu = document.querySelector("#skySelect");
    skyMenu.addEventListener("change", selectSky)

};


// registerEventHandlers()

document.addEventListener("DOMContentLoaded", registerEventHandlers);
