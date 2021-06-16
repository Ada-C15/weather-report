let currentTemp = 65;
    

const skyImages = {
    sunny: ["https://media.giphy.com/media/lyVNcb1n5Ob0Q/giphy.gif", "The sun shines directly into the camera lens through tall evergreens. The camera angle moves slightly."],
    cloudy: ["https://media.giphy.com/media/lOkbL3MJnEtHi/giphy.gif", "The sun shines through clouds racing across the sky."],
    rainy: ["https://media.giphy.com/media/vLi3T5m3RH45y/giphy.gif", "A hyper realistic animation. of heavy rain bouncing off tiled patio"],
    snowy: ["https://media.giphy.com/media/Fh3ezinVpi4yk/giphy.gif", "A hyper realiztic animation of heavy snow falling through evergreens against distant mountains."]
};

// CHANGE TO FIT
const updateTemp = currentTemp => {
    const temperatureCountContainer = document.querySelector("#temperatureCount")
    temperatureCountContainer.textContent = `Temperature ${currentTemp}℉`;
    changeTempColor(currentTemp);
    // updateGarden(currentTemp);
}
// Figuring out text / temp changes
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
    temperatureCountContainer.classList = color;
}; 

const addTemp = (event) => {
    currentTemp += 1;
    updateTemp(currentTemp);
};
const subtractTemp = (event) => {
    currentTemp -= 1;
    updateTemp(currentTemp);
};
const changeSky = (event) => {
    let option = document.querySelector('#sky');
    let optionValue = option.value;
    var skyImage = document.createElement("IMG");
    skyImage.setAttribute("src", skyImages[optionValue][0]);
    skyImage.setAttribute("alt", skyImages[optionValue][1]);
    skyImageContainer.replaceChild(skyImage, skyImageContainer.childNodes[0]);
};
// NEED HTML
// const updateCityName = () => {
//     const inputName = document.getElementById("cityNameInput").value;
//     const headerCityName = document.getElementById("headerCityName");
//     headerCityName.textContent = inputName;
// };

// NEED HTML
// const resetCityName = () => {
//     const cityNameInput = document.getElementById("cityNameInput");
//     cityNameInput.value = "Seattle";
//     updateCityName();
// };


const registerEventHandlers = (event) => {
    const addTemperatureButton = document.querySelector("#addTemperatureButton");
    addTemperatureButton.addEventListener("click", addTemp);

    const subtractTemperatureButton = document.querySelector("#subtractTemperatureButton");
    subtractTemperatureButton.addEventListener("click", subtractTemp);

    const skyOptions = document.querySelector("#sky");
    skyOptions.addEventListener("change", changeSky);

    // CHANGE TO FIT
    updateCityName();
    // const cityNameInput = document.getElementById("cityNameInput");
    // cityNameInput.addEventListener("input", updateCityName);

    // CHANGE TO FIT
    // const cityNameResetBtn = document.getElementById("cityNameReset");
    // cityNameResetBtn.addEventListener("click", resetCityName);


    // Figuring out text / temp changes
    // const changeTextColor = document.getElementsByClassName("tempButton");
    // changeTextColor.addEventListener("change", changeTempColor);


};

document.addEventListener("DOMContentLoaded", registerEventHandlers);