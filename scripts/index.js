const tempState = {
    temp: 70
};

const temperature = document.querySelector("#temperature");
const landscape = document.querySelector("#landscapeContainer");

const hotter = (event) => {
    tempState.temp +=1;
    temperature.textContent = `${tempState.temp}F`;
    temperature.style.color = tempColor();
    checkLand();
    landText();
};

const colder = (event) => {
    tempState.temp -=1;
    // const landscape = document.querySelector("#landscapeContainer");
    temperature.textContent = `${tempState.temp}F`;
    temperature.style.color = tempColor();
    checkLand();
    landText();
};

const reset = (event) => {
    tempState.temp = 70;
    // const landscape = document.querySelector("#landscapeContainer");
    temperature.textContent = `${tempState.temp}F`
    temperature.style.color = tempColor();
    checkLand();
    landscape.textContent = "Landscape"
};

const tempColor = () => {
    if (tempState.temp >= 80) {
        return "red";
    } else if (tempState.temp >= 70) {
        return "orange";
    } else if (tempState.temp >= 60) {
        return "yellow";
    } else if (tempState.temp >= 50) {
        return "green";
    } else if (tempState.temp <= 49) {
        return "rgb(0, 251, 255)";
    }
};

const checkLand = () => {
    if (tempState.temp >= 80) {
        return landscape.className = "desert";
    } else if (tempState.temp >= 70) {
        return landscape.className = "tropical";
    } else if (tempState.temp >= 60) {
        return landscape.className = "green";
    } else if (tempState.temp >= 50) {
        return landscape.className = "cool";
    } else if (tempState.temp <= 49) {
        return landscape.className = "icy";
    }
};

const landText = () => {
    if (tempState.temp >= 80) {
        return landscape.textContent = "It's a scorcha!";
    } else if (tempState.temp >= 70) {
        return landscape.textContent = "It's wicked nice";
    } else if (tempState.temp >= 60) {
        return landscape.textContent = "Take a walk in the pahk";
    } else if (tempState.temp >= 50) {
        return landscape.textContent = "Grab yah coat";
    } else if (tempState.temp <= 49) {
        return landscape.textContent = "Betta warm up the cah";
    }
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
}
const selectSky = (event) => {
    skyState.sky = document.querySelector("#skyChoices").value;
    const selectedSky = document.querySelector("#skyview");

    if (skyState.sky === "blue") {
        selectedSky.className = "blue";
        selectedSky.textContent = "It's wicked blue"
    }

    else if (skyState.sky === "hot") {
        selectedSky.className = "hotSky";
        selectedSky.textContent = "It's wicked sunny"
    }

    else if (skyState.sky === "rainy") {
        selectedSky.className = "rainy";
        selectedSky.textContent = "It's wicked rainy"
    }

    if (skyState.sky === "cloudy") {
        selectedSky.className = "cloudy";
        selectedSky.textContent = "It's wicked cloudy"
    }

    else if (skyState.sky === "night") {
        selectedSky.className = "night";
        selectedSky.textContent = "It's wicked dahk"
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
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);