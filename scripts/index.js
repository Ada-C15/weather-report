// Variable assignment
let currentTemp = 65;

const skyImages = {
    sunny: ["https://media.giphy.com/media/lyVNcb1n5Ob0Q/giphy.gif", "The sun shines directly into the camera lens through tall evergreens. The camera angle moves slightly."],
    cloudy: ["https://media.giphy.com/media/lOkbL3MJnEtHi/giphy.gif", "The sun shines through clouds racing across the sky."],
    rainy: ["https://media.giphy.com/media/vLi3T5m3RH45y/giphy.gif", "A hyper realistic animation. of heavy rain bouncing off tiled patio"],
    snowy: ["https://media.giphy.com/media/Fh3ezinVpi4yk/giphy.gif", "A hyper realiztic animation of heavy snow falling through evergreens against distant mountains."]
};

// temperature functions
// increase temp helper function
const addTemp = () => {
    currentTemp += 1;
    updateTemp(currentTemp);
};
// decrease temp helper function
const subtractTemp = () => {
    currentTemp -= 1;
    updateTemp(currentTemp);
};
// Font changes for temp
const changeTempColor = (currentTemp) => {
    const temperatureCountContainer = document.getElementById("temperatureCount");
    let color = 'blue'
    if (currentTemp >= 80) {
        color = 'red';
    } else if (currentTemp >= 70) {
        color= 'orange';
    } else if (currentTemp >= 60) {
        color = 'yellow';
    } else if (currentTemp >= 50) {
        color = 'green';
    }
    temperatureCountContainer.style.color = 'color';
}; 
// function to run whenever the Temp button is hit. Takes in the current temp and runs the helper functions above as well as updating the landscape to match the temp
const updateTemp = currentTemp => {
    const temperatureCountContainer = document.querySelector("#temperatureCount")
    temperatureCountContainer.textContent = `Temperature ${currentTemp}℉`;
    changeTempColor(currentTemp);
    updateLandscape(currentTemp);
}

// Function that updates the sky image
const changeSky = () => {
    let option = document.querySelector('#sky');
    let optionValue = option.value;
    var skyImage = document.createElement("IMG");
    skyImage.setAttribute("src", skyImages[optionValue][0]);
    skyImage.setAttribute("alt", skyImages[optionValue][1]);
    skyImageContainer.replaceChild(skyImage, skyImageContainer.childNodes[1]);
};
// Function that updates the location to match user input
const updateLocation = () => {
    const inputLocation = document.getElementById("locationInput").value;
    const locationDisplay = document.getElementById("locationDisplay");
    locationDisplay.textContent = inputLocation;
};
// Function to reset the location on button click
const resetLocation = () => {
    const locationInput = document.getElementById("locationInput");
    locationInput.value = "Unceded Coast Salish Land";
    updateLocation();
};
// Function to update the background color and landscape text to match the current temp
const updateLandscape = (currentTemp) => {
    const landscapeContainer = document.getElementById('landscape-text');
    let landscape = '';
    if (currentTemp >= 80) {
        landscape = 'Too hot too function';
        document.body.style.background = 'linear-gradient(to bottom, #ffff99 0%, #cc0000 100%)'; 
    } else if (currentTemp >= 70) {
        landscape= 'Good day to sit by the pool';
        document.body.style.background = 'linear-gradient(to bottom, #ffffcc 0%, #ff6600 100%)';
    } else if (currentTemp >= 60) {
        landscape = 'The perfect temperature... it must be near April 25... ';
        document.body.style.background = 'linear-gradient(to bottom, #ffffff 0%, #ff9999 100%)';
    } else if (currentTemp >= 50) {
        landscape = 'Bundle up!';
        document.body.style.background = 'linear-gradient(to bottom, #99ffcc 0%, #009900 100%)';
    } else if (currentTemp < 49) {
        landscape = '❅❆❄ Even my icicles have icicles! ❅❆❄';
        document.body.style.background = 'linear-gradient(to bottom, #ffffff 0%, #33ccff 100%)';
    }
    landscapeContainer.textContent = landscape;
};


const registerEventHandlers = () => {
    const addTemperatureButton = document.querySelector("#addTemperatureButton");
    addTemperatureButton.addEventListener("click", addTemp);

    const subtractTemperatureButton = document.querySelector("#subtractTemperatureButton");
    subtractTemperatureButton.addEventListener("click", subtractTemp);

    const skyOptions = document.querySelector("#sky");
    skyOptions.addEventListener("change", changeSky);

    updateLocation();
    const locationInput = document.getElementById("locationInput");
    locationInput.addEventListener("input", updateLocation);

    const locationResetBtn = document.getElementById("locationReset");
    locationResetBtn.addEventListener("click", resetLocation);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);