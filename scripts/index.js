
// ############### Temperature Sections ###############
const state = {
    currentTemp: 30
};

const tempValueColors= () => {
    console.log("tempValueColors")
    if (state.currentTemp >= 80){
        return ["#F11514", `"🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"`];
    }
    else if (state.currentTemp >= 70 && state.currentTemp <= 79){
        return ["#FF7F50", `"🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"`]
    }
    else if (state.currentTemp >= 60 && state.currentTemp <= 69){
        return ["#DAA520", `"🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"`]
    }
    else if (state.currentTemp >=50 && state.currentTemp <= 59){
        return ["#228B22", `"🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"`]
    }
    else if (state.currentTemp < 49){
        return ["#00BFFF", "⛷❄️❄️⛷❄️❄️⛷❄️❄️⛷❄️❄️⛷❄️❄️⛷❄️❄️⛷❄️"]
    }
}

const upTemp = () => {
    console.log("upTemp")
    state.currentTemp +=1;
    const tempValue = document.querySelector("#tempValue");
    const gardenLandscape = document.querySelector("#landscape");
    let tempColor = tempValueColors();
    tempValue.style.color = tempColor[0]
    tempValue.textContent = `${state.currentTemp}`;
    gardenLandscape.textContent = tempColor[1];
};

const downTemp = () => {
    console.log("downTemp")
    state.currentTemp -=1;
    const tempValue = document.querySelector("#tempValue");
    const gardenLandscape = document.querySelector("#landscape");
    let tempColor = tempValueColors();
    tempValue.style.color = tempColor[0]
    tempValue.textContent = `${state.currentTemp}`;
    gardenLandscape.textContent = tempColor[1];
};

// ################## Sky Change in Weather Window #####################


// const updateWeatherGarden = () => {
//     const skySelection = document.querySelector("#skySelection");
//     const sky

// }

// ################# Mountain Name Reset ###############################

const resetMountain = () => {
    console.log("resetMountain")
    const mountainName = document.querySelector("#mountainNameInput");
    mountainName.value = "Mt. Baker"
    updateMountain();
}

// ############### Events ##################
const registerEventHandlers = () => {
    console.log("registerEventHandlers")
    const upTempButton = document.querySelector("#upTemp");
    upTempButton.addEventListener("click", upTemp);
    const downTempButton = document.querySelector("#downTemp");
    downTempButton.addEventListener("click", downTemp);

    updateSky();
    const skyTheme = document.querySelector("#skySelection");
    skyTheme.addEventListener("fullscreenchange", updateWeatherWindow);
    
    updateMountain();
    const mountainNameInput = document.querySelector('mountainNameInput');
    mountainNameInput.addEventListener("input", updateMountain)
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", resetMountain)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
