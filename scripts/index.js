const state = {
    temperture: 67
  };

const increasetempButton = document.querySelector("#increaseButton")
const increasetemp = (event) => {
    state.temperture += 1;
    const temprecorder = document.querySelector("#temp");
    temprecorder.textContent = `${state.temperture}`;
    changetempcolor()
    changegroundimages()
};
increasetempButton.addEventListener("click", increasetemp);


const decreasetempButton = document.querySelector("#decreaseButton")
const decreasetemp = (event) => {
    state.temperture -= 1;
    const temprecorder = document.querySelector("#temp");
    temprecorder.textContent = `${state.temperture}`;
    changetempcolor()
    changegroundimages()

};


decreasetempButton.addEventListener("click", decreasetemp);
//helper function to change temp color
const changetempcolor = () => {
    const temprecorder = document.querySelector("#temp");
    if (state.temperture >=80){
        temprecorder.style.color= 'red';
    } else if (state.temperture <= 79 && state.temperture > 69 ){
        temprecorder.style.color= 'orange';
    } else if (state.temperture <= 69 && state.temperture > 59 ){
        temprecorder.style.color= 'yellow';
    } else if (state.temperture <= 59 && state.temperture >49 ){
        temprecorder.style.color= 'Green';
    } else if (state.temperture <= 49) {
        temprecorder.style.color= 'teal';
    }
};


//helper function to change garden ground image
const changegroundimages = () => {
    const groundrecorder = document.querySelector("#ground")
    if (state.temperture >=80){
        groundrecorder.textContent = `🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂 `;
    } else if (state.temperture <= 79 && state.temperture > 69 ){
        groundrecorder.textContent = `🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷 `;
    } else if (state.temperture <= 69 && state.temperture > 59 ){
        groundrecorder.textContent = `🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃`;
    } else if (state.temperture <= 59 && state.temperture >49 ){
        groundrecorder.textContent = `🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲`;
    } else if (state.temperture <= 49) {
        groundrecorder.textContent = `❄️🌲⛄️❄️⛄️🍂🌲❄️🌲❄️⛄️🍂❄️`;
    }    
};
