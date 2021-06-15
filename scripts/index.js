


/// city changing logic 

const changeCityButton = document.querySelector('#changeCityButton');


const updateCityName = () => {
    const cityNameInput = document.getElementById("cityNameInput").value;
    const headCityName = document.querySelector("#headCityName");
    headCityName.textContent = cityNameInput
};


changeCityButton.addEventListener("click", updateCityName)

/// temp changing logic 

let temp = 85;

const increaseTempButton = document.querySelector('#tempInc');

const increaseTemp = () => {
    const currentTempDisplay = document.querySelector('#tempDisplay');
    temp += 1;
    currentTempDisplay.textContent = temp;
}

increaseTempButton.addEventListener("click", increaseTemp)

const decreaseTempButton = document.querySelector('#tempDec');

const decreaseTemp = () => {
    const currentTempDisplay = document.querySelector('#tempDisplay');
    temp -= 1;
    currentTempDisplay.textContent = temp;
}

decreaseTempButton.addEventListener("click", decreaseTemp)

