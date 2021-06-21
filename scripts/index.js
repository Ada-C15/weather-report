let tempValue = document.getElementById("tempValue");
let temperature = 63;
let landscape = document.getElementById("landscape")
let skySelect = document.getElementById("skySelect")
let skyElement = document.getElementById("sky")

let increaseTempControl = document.getElementById("increaseTempControl");
increaseTempControl.addEventListener("click", function () {
  temperature += 1;
  tempValue.innerHTML = temperature;
  if (temperature >= 80) {
    tempValue.className = "red";
    landscape.innerHTML = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
  } else if (temperature >= 70) {
    tempValue.className = "orange";
    landscape.innerHTML = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
  } else if (temperature >= 60) {
    tempValue.className = "yellow";
    landscape.innerHTML = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
  } else if (temperature >= 50) {
    tempValue.className = "green";
    landscape.innerHTML = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
  } else {
      tempValue.className = "teal"
      landscape.innerHTML = "🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶"
  }
});

let decreaseTempControl = document.getElementById("decreaseTempControl");
decreaseTempControl.addEventListener("click", function () {
  temperature -= 1;
  tempValue.innerHTML = temperature;
  if (temperature >= 80) {
    tempValue.className = "red";
    landscape.innerHTML = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
  } else if (temperature >= 70) {
    tempValue.className = "orange";
    landscape.innerHTML = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
  } else if (temperature >= 60) {
    tempValue.className = "yellow";
    landscape.innerHTML = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
  } else if (temperature >= 50) {
    tempValue.className = "green";
    landscape.innerHTML = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
  } else {
      tempValue.className = "teal"
      landscape.innerHTML = "🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶"
  }
});

skySelect.addEventListener("change", function (event) {
    if (event.target.value === "sunny") {
        skyElement.innerHTML = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
    } else if (event.target.value === "cloudy") {
        skyElement.innerHTML = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
    } else if (event.target.value === "rainy") {
        skyElement.innerHTML = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
    } else {
        skyElement.innerHTML = 	"🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    }
})
