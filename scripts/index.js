//Temperature values elements that will change when clicked
const tempContainer = document.getElementById('temperature-value');
const increaseButton = document.getElementById('increaseTemp');
const decreaseButton = document.getElementById('decreaseTemp');
const gardenWeather = document.querySelector('.garden-weather');
const skyWeather = document.querySelector('.sky-weather');
const skyType = document.getElementById('sky-type');
const resetButton = document.getElementById('resetButton');
const cityName = document.querySelector('.city');
const cityInput = document.querySelector('.cityInput')

const landscapeImage= {
  summer:	"🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
  spring: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
  fall:	"🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
  winter: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
}
const skyImage = {
  sunny: "☀️☁️ ☀️☁️ ☀️☁️ ☀️ ☁️ ☀️ ☁️☀️",
  cloudy:	"☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️",
  rainy: "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧",
  snowy: 	"🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨",
}

const state = {
  tempCount: 76,
  currentLandscapeImage: landscapeImage.spring
};
//increases and decrease tempereature with one click 
const addTemperature = () => {
  state.tempCount += 1;
  tempContainer.textContent = `${state.tempCount}`;
  changeTempTextColor();
}
const decreaseTemperature = () => {
  state.tempCount -= 1;
  tempContainer.textContent = `${state.tempCount}`;
  changeTempTextColor();
}

const changeTempTextColor = () => {
  if(state.tempCount >= 80) {
    tempContainer.className = 'red';
    gardenWeather.innerHTML = landscapeImage.summer;
  } 
  if(state.tempCount  <= 79 && state.tempCount > 70) {
    tempContainer.className = 'orange';
    gardenWeather.innerHTML = landscapeImage.spring; 
  }
  if(state.tempCount <= 69 && state.tempCount > 60) {
    tempContainer.className = 'yellow';
    gardenWeather.innerHTML = landscapeImage.fall
  }
  if(state.tempCount <= 59 && state.tempCount > 50) tempContainer.className = 'green';
  if(state.tempCount <= 49) {
    tempContainer.className = 'teal';
    gardenWeather.innerHTML = landscapeImage.winter
  }

}
// Change sky type
const changeSkyType = (event) => {
  console.log(event.target.value)
  if(event.target.value === "Sunny") {    
    skyWeather.innerHTML = skyImage.sunny;
  }
  if(event.target.value === "Cloudy"){
    skyWeather.innerHTML = skyImage.cloudy;
  } 
  if(event.target.value === "Rainy"){  
    skyWeather.innerHTML = skyImage.rainy;
  }
  if(event.target.value === "Snowy"){
    skyWeather.innerHTML = skyImage.snowy;
  }
  
}

// changes the city name 
const changeCityName = (event) => {
  cityName.innerHTML = event.target.value 
}
// resets the cityname inputgit

const resetCityName = (event) =>{
  console.log(event.target.value)
  cityInput = cityInput

}

const registerEventHandlers = (event) => {
  // const increaseButton = document.querySelector("#increaseButton");
  increaseButton.addEventListener("click", addTemperature);
  decreaseButton.addEventListener("click", decreaseTemperature);
  skyType.addEventListener("change", changeSkyType);
  cityInput.addEventListener("input", changeCityName);
  resetButton.addEventListener("click", resetCityName(event){
    event.preventDefault()
  })

};



document.addEventListener("DOMContentLoaded", registerEventHandlers);
