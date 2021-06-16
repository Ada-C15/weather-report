let tempDegree = 70;

const updateSky = () => {
    const optionSky = document.querySelector('#sky-options').value;
    const skyContainer = document.querySelector('#sky');
    let img;

    if (optionSky === '⛅️Cloudy☁️') {
        img = 'cloudy';
    } else if (optionSky === '🌈Sunny☀️') {
        img = 'sunshine';
    } else if (optionSky === '⛈Rainy☔️') {
        img = 'raining';
    } else if (optionSky === '❄️Snowy☃️') {
        img = 'snowing'
    }

    skyContainer.textContent = '';
    const skyContent = document.querySelector('#skyContent');
    skyContent.classList = `sky-section ${img}`;
}


const updateTempBackground = (currentTemp) => {
    let color;

    if (currentTemp >= 80) {
        color = 'summer';
    } else if (currentTemp >= 70) {
        color = 'spring';
    } else if (currentTemp >= 60) {
        color = 'fall';
    } else if (currentTemp >= 50) {
        color = 'winter';
    }

    const tempContent = document.querySelector('#tempContent');
    tempContent.classList = `temperature-box ${color}`;
}

const updateGarden = (currentTemp) => {
    let img;
    const gardenContainer = document.querySelector('#ground');
    let landscape = '';
    
    if (currentTemp >= 80) {
        img = 'desert';
    } else if (currentTemp >= 70) {
        img = 'garden-summer';
    } else if (currentTemp >= 60) {
        img = 'autumn';
    } else if (currentTemp >= 50) {
        img = 'snowfield';
    }

    gardenContainer.textContent = landscape;
    const gardenContent = document.querySelector('#gardenContent')
    gardenContent.classList = `garden-box ${img}`
}

const updateTemp = (tempDegree) => {
    const tempDegreeCounter= document.querySelector('#tempDegree');
    tempDegreeCounter.textContent = tempDegree;
    updateTempBackground(tempDegree)
    updateGarden(tempDegree)
}

const increaseTemp = () => {
    tempDegree += 1;
    updateTemp(tempDegree)
}

const decreaseTemp = () => {
    tempDegree -= 1;
    updateTemp(tempDegree)
}

const updateCityName = () => {
    const inputCity = document.querySelector('#cityInput').value;
    const headerCityName = document.querySelector('#headerCityName');
    headerCityName.textContent = inputCity;
}

const resetCityName = () => {
    const inputCityName = document.querySelector('#cityInput');
    inputCityName.value = 'Seattle';
    updateCityName();
}


const registerEventHandlers = () => {


    const increaseTempArrow = document.querySelector('#upArrow');
    increaseTempArrow.addEventListener('click', increaseTemp);

    const decreaseTempArrow = document.querySelector('#downArrow');
    decreaseTempArrow.addEventListener('click', decreaseTemp)

    const skySelect = document.querySelector("#sky-options");
    skySelect.addEventListener('change', updateSky);

    updateCityName()
    const cityName = document.querySelector('#cityInput');
    cityName.addEventListener('input', updateCityName);

    const cityReset = document.querySelector('#resetButton');
    cityReset.addEventListener('click', resetCityName);
        

    // const changeBackground = document.querySelector("#temperature-box")
    // changeBackground.addEventListener("click", updateTempBackground)
}


document.addEventListener('DOMContentLoaded', registerEventHandlers);
