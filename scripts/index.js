let currentTemp = 70

const changeTemp = () => {
    const changeTempUp= document.getElementById("currentTemp");
    state.clickCount += 1;
    tempChangeContainer.textContent = state.clickCount + state.name;
    console.log(state.clickCount);

    const changeTempDown= document.getElementById("currentTemp");
    state.clickCount += 1;
    tempChangeContainer.textContent = state.clickCount + state.name;
    console.log(state.clickCount);
}

const upTemp = () => {
    const newTemp = document.createElement("span");
    const tempContainer = document.querySelector("#tempContainer");
    newTemp.textContent = 1 + currentTemp;
    tempContainer.appendChild(newTemp);
    changeTemp();
};

const downTemp = () => {
    const newTemp = document.createElement("span");
    const tempContainer = document.querySelector("#tempContainer");
    newTemp.textContent = currentTemp - 1;
    tempContainer.appendChild(newTemp);
    changeTemp();
};

const registerEventHandlers = () => {
    const upButton = document.querySelector("#tempUpButton");
    upButton.addEventListener("click", upTemp);
    const downButton = document.querySelector("#tempDownButton");
    downButton.addEventListener("click", downTemp);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);