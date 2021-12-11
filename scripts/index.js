// connect the up arrow so id of up-arrow to an on click event
// when the id is clicked, then increase temp counter by 1

// temperature variable, every time the user clickes the button, the temperature count goes up by 1


// const appearanceHeading = document.getElementById("facts__heading");

// appearanceHeading.textContent = "Qualities and Traits of a Crab";
let temperature = 80


const increaseTemp=()=> {
// When clicked the temperature will rise by 1 degree
    ++temperature
    // console.log("i am clicking the up button")
    // console.log(temperature)
    document.getElementById("temperature-number").innerHTML=temperature
    // console.log('I am the color', color)    
}


const decreaseTemp=()=> {
    // When clicked the temperature will drop by 1 degree
    --temperature
    console.log("i am clicking the down button")
    console.log(temperature)
    document.getElementById("temperature-number").innerHTML=temperature
    console.log(color)
}

// New Function will change the sky in Weather Garden
// based on the selected sky in the drop down menu
const setTypeOfWeather=()=> {
    let skyValue = document.getElementById("sky").value
    let sky = document.getElementById("selected-weather")

    // if skyValue == "Sunny"
    // set sky innerHtml to a sun
    if (skyValue=="Sunny") {
        sky.innerHTML="☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    } else if (skyValue=="Cloudy") {
        sky.innerHTML="☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    } else if (skyValue=="Rainy") {
        sky.innerHTML="🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else if (skyValue=="Snowy") {
        sky.innerHTML="🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    };
    console.log(skyValue)
}
setTypeOfWeather()

const setCityName=()=> {
    let cityValue= document.getElementById("city").value
    let sky = document.getElementById("city-display")
    sky.textContent = cityValue
}


const registerEventHandlers = () => {
    // Get up arrow HTML element by ID
    const upArrowButton = document.querySelector("#up-arrow");

    // Add Click event listener to up arrow button
    // "click" -> event type
    // increaseTemp -> function that gets called
    upArrowButton.addEventListener("click", increaseTemp);
    
    const downArrowButton = document.querySelector("#down-arrow");

    downArrowButton.addEventListener("click", decreaseTemp);

    // when sky dropdown changes (onChange)
    // call setTypeOfWeather()
    const skyDropdown = document.querySelector("#sky");
    skyDropdown.addEventListener("change", setTypeOfWeather);

    const cityInputText = document.querySelector("#city");
    cityInputText.addEventListener("input", setCityName);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);



// document.getElementById('output').innerHTML = lengthOfName;
document.getElementById("temperature-number").innerHTML=temperature

// range for color and landscape icons

let color = '';

if (temperature >=80) {
    color = 'red' 
} else if (70<=temperature<=79) {
    color = 'orange'
} else if (60<=temperature<=69) {
    color = 'yellow'
}else if (50<=temperature<=59) {
    color = 'green'
}else if (49<=temperature) {
    color = 'teal'
}

document.getElementsByClassName("color").innerHTML=color
