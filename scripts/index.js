const state = {
    tempCount: 66
};

const changeLocation = (event) => {
    let inputCity = document.querySelector("#city-name").value;
    let mainHeading = document.getElementById("defaultCity");
    if (!inputCity == "") {
        mainHeading.innerHTML = `Forecast to the settlement of ${inputCity}`;
        inputCity.value = "";
    }
};

const resetLocation = (event) => {
    let mainHeading = document.getElementById("defaultCity");
    mainHeading.innerHTML = "Forecast to the Capital Wasteland";
};


const changeSky = (choice) => {

    if (choice == "sunny") {
        currentSky = document.body.style.background = "url('assets/sun.jpeg') no-repeat";
        document.body.style.backgroundSize = "100%";

    } else if (choice=="cloudy") {
        currentSky = document.body.style.background = "url('assets/clouds.jpg') no-repeat";
        document.body.style.backgroundSize = "100%";

    } else if (choice=="rainy") {
        currentSky = document.body.style.background = "url('assets/rainn.jpg') no-repeat";
        document.body.style.backgroundSize = "100%";

    } else if (choice=="snowy") {
        currentSky = document.body.style.background = "url('assets/snow.jpeg') no-repeat";
        document.body.style.backgroundSize = "100%";

    } else if (choice=="rainbowy") {
        currentSky = document.body.style.background = "url('assets/rainbow.jpg') no-repeat";
        document.body.style.backgroundSize = "100%";
    }
}

const changeTempColor = (temp) => {
    let colorRef = "#00fbff"
    if (temp > 91) {
        colorRef = "superHot";
    } else if (temp > 80) {
        colorRef = "notSoHot";
    } else if (temp > 66){
        colorRef = "nice";
    } else if (temp > 55){
        colorRef = "cool";
    } else {
        colorRef = "superCool";
    }
    return colorRef
}


const changeSkyMenu = () => {
    const skyChoice = document.querySelector("#skyOptions")
    changeSky(skyChoice.value)
}

const addTemp = (event) => {
    console.log("in addTemp:", event);
    console.log(event.target);

    state.tempCount += 1;
    let tempCountContainer = document.querySelector("#tempCount")
    let tempColor = changeTempColor(state.tempCount);
    tempCountContainer.className = tempColor;
    tempCountContainer.textContent = `Warming up! ${state.tempCount} °F`;
};

const decreaseTemp = (event) => {
    console.log("in decreaseTemp:", event);
    console.log(event.target);

    state.tempCount -= 1;
    let tempCountContainer = document.querySelector("#tempCount")
    let tempColor = changeTempColor(state.tempCount);
    tempCountContainer.className = tempColor;
    tempCountContainer.textContent = `Cold Cold COLD! ${state.tempCount} °F`;
};


const registerEventHandlers = (event) => {
    console.log("in registerEventHandlers:", event);
    const upTempButton = document.querySelector("#addTempButton");
    upTempButton.addEventListener("click", addTemp);

    const downTempButton = document.querySelector("#lessTempButton");
    downTempButton.addEventListener("click", decreaseTemp);

    const skyMenu = document.querySelector("#skyOptions")
    console.log(skyMenu)
    skyMenu.addEventListener("change", changeSkyMenu)

    const newLoc = document.querySelector("#addLocation")
    newLoc.addEventListener("click", changeLocation);

    const resetLoc = document.querySelector("#resetLocation")
    resetLoc.addEventListener("click", resetLocation);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
