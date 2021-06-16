


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
    updateTempSection(temp)
    }


increaseTempButton.addEventListener("click", increaseTemp)

const decreaseTempButton = document.querySelector('#tempDec');

const decreaseTemp = () => {
    const currentTempDisplay = document.querySelector('#tempDisplay');
    temp -= 1;
    currentTempDisplay.textContent = temp;
    updateTempSection(temp)
}

decreaseTempButton.addEventListener("click", decreaseTemp)

/// temp color changing logic 

const tempSection = document.querySelector('#tempSection');

const updateTempSection = (temp) => {
    if (temp > 85) {
        tempSection.className = 'hot';
    } else if (temp > 70 && temp <= 85) {
        tempSection.className = 'warm';
    } else if (temp > 60 && temp <= 70) {
        tempSection.className = 'perfect';
    } else if (temp > 50 && temp <= 60) {
        tempSection.className = 'cool';
    } else {
        tempSection.className = 'cold';
    }
    } 


///sky changing logic 



const selectOptions = document.querySelector('#skySelect');

const updateSkySection = () => {
    const skySection = document.querySelector('#skySection');
    let options = document.querySelector('#skySelect').value;
    if (options === "sunny") {
        skySection.className = 'sunny';
        
    } else if  (options === "cloudy") {
        skySection.className = 'cloudy';
    } else if (options === "rainy") {
        skySection.className = 'rainy';
    } else if (options === 'snowy') {
        skySection.className = 'snowy';
    } else {
        skySection.className = 'stormy';
    }
    updateLandscape(skySection.className);
    updateCityNameColor(skySection.className);


}


selectOptions.addEventListener('change', updateSkySection)


//// landscape changing logic 

const updateLandscape = (skySection) => {
    const landscapeSection = document.querySelector('#landscape');
    landscapeSection.className = skySection;

}


///changing city name color logic 


const updateCityNameColor = (skySection) => {
    const cityNameColor = document.querySelector('#headCityName');
    cityNameColor.className = skySection;
}