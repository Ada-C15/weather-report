// ############### Events ##################
const registerEventHandlers = () => {
    const upTempButton = document.querySelector("#increaseTemp")
    upTempButton.addEventListener('click', increaseTemperature);
    const decTempButton = document.querySelector("#decreaseTemp")
    decTempButton.addEventListener('click', decreaseTemperature);


    const skyTheme = document.querySelector("#skySelection");
    skyTheme.addEventListener('change', updateGarden);
    const mountainNameInput = document.querySelector('mountainNameInput');
    mountainNameInput.addEventListener('input', updateMountain)
    const resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener('click', resetMountain)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers)




// ############### Temperature Sections ###############
const state = {
    currentTemp: 30
};


const  tempValue= () => {
    if (state.currentTemp >= 80){
        return ["#F11514", `"🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"`];
    }
    else if (state.currentTemp >= 70 && state.temperature <= 79){
        return ["#FF7F50", `"🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"`]
    }
    else if (state.currentTemp >= 60 && state.currentTemp <= 69){
        return ["#DAA520", `"🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"`]
    }
    else if (state.currentTemp >=50 && state.currentTemp <= 59){
        return ["#228B22", `"🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"`]
    }
    else (state.currentTemp < 49){
        return ["#00BFFF", "⛷❄️❄️⛷❄️❄️⛷❄️❄️⛷❄️❄️⛷❄️❄️⛷❄️❄️⛷❄️"]
    }
}

const increaseTemperature = () => {
    state.currentTemp +=1;
    const tempValueElement = document.querySelector("#tempValue");
    const gardenLandscape = document.querySelector("#landscape");
    let tempColor = tempValue();
    tempValueElement.style.color = tempColor[0]
    tempValueElement.textContent = `${state.currentTemp}`;
    gardenLandscape.textContent = tempColor[1];
};
