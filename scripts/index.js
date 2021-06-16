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




}

document.addEventListener("DOMContentLoaded", registerEventHandlers)




// ############### Temperature Sections ###############
const state = {
    currentTemp: 30
};


// const  = () => {}