const tempState = {
    temp: 70
};

const hotter = (event) => {
    tempState.temp +=1
    const temperature = document.querySelector("#temperature")
    temperature.textContent = `${tempState.temp}F`
};

const colder = (event) => {
    tempState.temp -=1;
    const temperature = document.querySelector("#temperature")
    temperature.textContent = `${tempState.temp}F`
};

const reset = (event) => {
    tempState.temp = 70;
    const temperature = document.querySelector("#temperature")
    temperature.textContent = `${tempState.temp}F`
};

const cityState = {
    city: 0 
};

const cityName = (event) => {
    cityState.city = document.querySelector('#cityInput').value;
    if (cityState.city !== 0) {
        const cityName = document.querySelector("#cityName")
        cityName.textContent = `✨ ✨ Beautiful ${cityState.city}!! ✨ ✨ `
    };
};

const skyState = {
    sky: 0
};

const selectSky = (event) => {
    skyState.sky = document.querySelector("#skyChoices").value;
    if (skyState.sky === "hot") {
        const selectedSky = document.querySelector("#comment")
        selectedSky.className = "hotSky";
        selectedSky.textContent = "It's wicked hot"
    }
};

const landState = {
    land: 0
};

const selectLand = (event) => {
    landState.land = document.querySelector("#landChoices").value;
    if (landState.land === "desert") {
        const selectedLand = document.querySelector("#landscapeContainer")
        selectedLand.className = "desert";
    }
};

const registerEventHandlers = (event) => {
    const hotterButton = document.querySelector('#raiseTemp');
    hotterButton.addEventListener("click", hotter);
    
    const colderButton = document.querySelector('#lowerTemp');
    colderButton.addEventListener("click", colder);
    
    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener("click", reset);

    const cityButton = document.querySelector('#submitBtn');
    cityButton.addEventListener("click", cityName);

    const skyPic = document.querySelector("#skyChoices");
    skyPic.addEventListener("change", selectSky);

    const landPic = document.querySelector("#landChoices");
    landPic.addEventListener("change", selectLand);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);