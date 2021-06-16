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

const changeskyselector = document.querySelector("#sky-select");
const changesky = (event) => {
    const userchoice = event.target.value;
    const sky = document.querySelector("#sky");
    if (userchoice === "1"){
        sky.textContent = `☁️ ☁️ ☁️ ☀️ ☁️ ☁️`;
    } if (userchoice === "2"){
        sky.textContent = `☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️`;
    } if (userchoice === "3"){
        sky.textContent = `🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧`;
    } if (userchoice === "4"){
        sky.textContent = `🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨`;
    }
};
changeskyselector.addEventListener("change", changesky);

const cityinputbox = document.querySelector("#city-input")
const changecity = (event) => {
    const result = event.target.value;
    const city = document.querySelector("#header-city");
    city.textContent  = `${result}`;
};
cityinputbox.addEventListener("input", changecity);

const resetButton = document.querySelector("#reset_button")
const resetcity = (event) => {
    const city = document.querySelector("#header-city");
    city.textContent  = `Seattle`;
    const cityinputbox = document.querySelector("#city-input")
    cityinputbox.value = `Seattle`;

}
resetButton.addEventListener("click", resetcity)

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

