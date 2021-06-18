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
    sky: "blue"
};

const selectSky = (event) => {
    skyState.sky = document.querySelector("#skyChoices").value;

    if (skyState.sky === "blue") {
        const selectedSky = document.querySelector("#comment")
        selectedSky.className = "blue";
        selectedSky.textContent = "It's wicked nice"
    }

    if (skyState.sky === "hot") {
        const selectedSky = document.querySelector("#comment")
        selectedSky.className = "hotSky";
        selectedSky.textContent = "It's wicked hot"
    }

    if (skyState.sky === "rainy") {
        const selectedSky = document.querySelector("#comment")
        selectedSky.className = "rainy";
        selectedSky.textContent = "It's wicked rainy"
    }

    if (skyState.sky === "cloudy") {
        const selectedSky = document.querySelector("#comment")
        selectedSky.className = "cloudy";
        selectedSky.textContent = "It's wicked cloudy"
    }

    if (skyState.sky === "night") {
        const selectedSky = document.querySelector("#comment")
        selectedSky.className = "night";
        selectedSky.textContent = "It's wicked dahk"
    }

};

const landState = {
    land: "green"
};

const selectLand = (event) => {
    landState.land = document.querySelector("#landChoices").value;

    if (landState.land === "green") {
        const selectedLand = document.querySelector("#landscapeContainer")
        selectedLand.className = "green";
    };

    if (landState.land === "desert") {
        const selectedLand = document.querySelector("#landscapeContainer")
        selectedLand.className = "desert";
    };

    if (landState.land === "icy") {
        const selectedLand = document.querySelector("#landscapeContainer")
        selectedLand.className = "icy";
    }

    if (landState.land === "lush") {
        const selectedLand = document.querySelector("#landscapeContainer")
        selectedLand.className = "lush";
    }

    if (landState.land === "tropical") {
        const selectedLand = document.querySelector("#landscapeContainer")
        selectedLand.className = "tropical";
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