// TEMP: INCREMENT, DECREMENT

const state = {
    tempCount: 0
  };

  
const increaseTemp = (event) => {
    state.tempCount += 1;
    const count = document.querySelector("#tempCount");
    count.textContent = `Temperature: ${state.tempCount}`;

    if (state.tempCount <= 10) {
        colorBlue();
        freezingDay();
    } else if ((11 <= state.tempCount) && (state.tempCount <=15)) {
        colorGreen();
        coldDay();
    } else if ((16 <= state.tempCount) && (state.tempCount <= 69))  {
        colorYellow();
        coolDay();
    } else if ((70 <= state.tempCount) && (state.tempCount <= 79)) {
        colorOrange();
        warmDay();
    } else if (state.tempCount >= 80) {
        colorRed();
        hotDay();
    }

  };
  
const decreaseTemp = (event) => {
    state.tempCount -= 1;
    const count = document.querySelector("#tempCount")
    count.textContent = `Temperature: ${state.tempCount}`;

    if (state.tempCount <= 10) {
        colorBlue();
        freezingDay();
    } else if ((11 <= state.tempCount) && (state.tempCount <=15)) {
        colorGreen();
        coldDay();
    } else if ((16 <= state.tempCount) && (state.tempCount <= 69))  {
        colorYellow();
        coolDay();
    } else if ((70 <= state.tempCount) && (state.tempCount <= 79)) {
        colorOrange();
        warmDay();
    } else if (state.tempCount >= 80) {
        colorRed();
        hotDay();
    }


  };

// TEMP COLORS

const colorBlue = (event) => {
    const currentTemp = document.querySelector("#tempCount"); // HTML element event will occur on
    currentTemp.className = `${currentTemp.className} blue`;
  };

const colorGreen = (event) => {
    const currentTemp = document.querySelector("#tempCount"); 
    currentTemp.className = `${currentTemp.className} green`;
  };  

const colorYellow = (event) => {
    const currentTemp = document.querySelector("#tempCount");
    currentTemp.className = `${currentTemp.className} yellow`;
  };  

const colorOrange = (event) => {
    const currentTemp = document.querySelector("#tempCount");
    currentTemp.className = `${currentTemp.className} orange`;
  }; 

const colorRed = (event) => {
    const currentTemp = document.querySelector("#tempCount");
    currentTemp.className = `${currentTemp.className} red`;
  };

// GARDEN LANDSCAPES

const freezingDay = (event) => {
    const gardenContainer = document.querySelector("#gardenContainer");
    gardenContainer.textContent = "🧊🌨️🥶🧊";
}

const coldDay = (event) => {
    const gardenContainer = document.querySelector("#gardenContainer");
    gardenContainer.textContent = "🌲⛄️🍂⛸";
}

const coolDay = (event) => {
    const gardenContainer = document.querySelector("#gardenContainer");
    gardenContainer.textContent = "⛅🌸🌱🪁";
}

const warmDay = (event) => {
    const gardenContainer = document.querySelector("#gardenContainer");
    gardenContainer.textContent = "🌤🌻🌷🌼🌳🧺";
}

const HotDay = (event) => {
    const gardenContainer = document.querySelector("#gardenContainer");
    gardenContainer.textContent = "🌞🌴🌊🏖️🩴";
}

// SKY DROPDOWN

const selectElement = document.querySelector('#skies');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');

  if (event.target.value == "snowy") {
      result.textContent = "🌨❄️☃️🌨❄️☃️";
  } else if (event.target.value == "rainy") {
      result.textContent = "⛈💦☔️⛈💦☔️";
  } else if (event.target.value == "cloudy") {
      result.textContent = "☁️ 🌫☁️ 🌫";
  } else if (event.target.value == "sunny") {
      result.textContent = "☀️ 🔥🌤 ☀️ 🔥🌤 ";
  };


//   result.textContent = `You like ${event.target.value}`;

});

// REGISTER HANDLERS
  
const registerEventHandlers= (event) => {

    const increaseButton = document.querySelector("#increaseTempButton");
    increaseButton.addEventListener("click", increaseTemp);

    const decreaseButton = document.querySelector("#decreaseTempButton");
    decreaseButton.addEventListener("click", decreaseTemp);

  };


document.addEventListener("DOMContentLoaded", registerEventHandlers);

