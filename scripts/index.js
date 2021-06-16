const state = {
    temperture: 67
  };

const increasetempButton = document.querySelector("#increaseButton")
const increasetemp = (event) => {
    state.temperture += 1;
    const temprecorder = document.querySelector("#temp");
    temprecorder.textContent = `${state.temperture}`;
};
increasetempButton.addEventListener("click", increasetemp);


const decreasetempButton = document.querySelector("#decreaseButton")
const decreasetemp = (event) => {
    state.temperture -= 1;
    const temprecorder = document.querySelector("#temp");
    temprecorder.textContent = `${state.temperture}`;
};
decreasetempButton.addEventListener("click", decreasetemp);