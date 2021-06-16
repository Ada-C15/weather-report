// TEMP: INCREMENT, DECREMENT

const state = {
    tempCount: 0,
  };

const increaseTemp = (event) => {
    state.tempCount += 1
    // const count = document.querySelector("#tempCount");
    // count.textContent = `Temperature: ${state.tempCount}`;
    const count = document.querySelector("#num");
    count.textContent = state.tempCount;

    if (state.tempCount <= 49) {
        colorBlue();
        freezingDay();
    } else if ((50 <= state.tempCount) && (state.tempCount <= 59)) {
        colorGreen();
        coldDay();
    } else if ((60 <= state.tempCount) && (state.tempCount <= 69))  {
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
    const count = document.querySelector("#num");
    count.textContent = state.tempCount;

    if (state.tempCount <= 49) {
        colorBlue();
        freezingDay();
    } else if ((50 <= state.tempCount) && (state.tempCount <= 59)) {
        colorGreen();
        coldDay();
    } else if ((60 <= state.tempCount) && (state.tempCount <= 69))  {
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
    const currentTemp = document.querySelector("#num"); // HTML element event will occur on
    currentTemp.className = `blue`;
  };

const colorGreen = (event) => {
    const currentTemp = document.querySelector("#num"); 
    // currentTemp.className = `${currentTemp.className} green`; // don't carry classes and their data over
    currentTemp.className = `green`;
  };  

const colorYellow = (event) => {
    const currentTemp = document.querySelector("#num");
    currentTemp.className = `yellow`;
  };  

const colorOrange = (event) => {
    const currentTemp = document.querySelector("#num");
    currentTemp.className = `orange`;
  }; 

const colorRed = (event) => {
    const currentTemp = document.querySelector("#num");
    currentTemp.className = `red`;
  };

// GARDEN LANDSCAPES

const freezingDay = (event) => {
    const gardenContainer = document.querySelector("#gardenContainer");
    gardenContainer.textContent = "🧊🌨️🥶🧊";
};

const coldDay = (event) => {
    const gardenContainer = document.querySelector("#gardenContainer");
    gardenContainer.textContent = "🌲⛄️🍂⛸";
};

const coolDay = (event) => {
    const gardenContainer = document.querySelector("#gardenContainer");
    gardenContainer.textContent = "⛅🌸🌱🪁";
};

const warmDay = (event) => {
    const gardenContainer = document.querySelector("#gardenContainer");
    gardenContainer.textContent = "🌤🌻🌷🌼🌳🧺";
};

const hotDay = (event) => {
    const gardenContainer = document.querySelector("#gardenContainer");
    gardenContainer.textContent = "🌞🌴🌊🏖️🩴";
};

// SKY DROPDOWN

const selectSky = (event) => {
    const result = document.querySelector('#result');

    if (event.target.value == "snowy") {
        result.textContent = "🌨❄️☃️🌨❄️☃️";
    } else if (event.target.value == "rainy") {
        result.textContent = "⛈💦☔️⛈💦☔️";
    } else if (event.target.value == "cloudy") {
        result.textContent = "☁️ 🌫☁️ 🌫";
    } else if (event.target.value == "sunny") {
        result.textContent = "☀️ 🔥🌤 ☀️🔥🌤 ";
    };
};

// Other way to write w/o registering to event handlers on line 172 -

// const selectElement = document.querySelector('#skies');

// selectElement.addEventListener('change', (event) => {
//   const result = document.querySelector('#result');

//   if (event.target.value == "snowy") {
//       result.textContent = "🌨❄️☃️🌨❄️☃️";
//   } else if (event.target.value == "rainy") {
//       result.textContent = "⛈💦☔️⛈💦☔️";
//   } else if (event.target.value == "cloudy") {
//       result.textContent = "☁️ 🌫☁️ 🌫";
//   } else if (event.target.value == "sunny") {
//       result.textContent = "☀️ 🔥🌤 ☀️🔥🌤 ";
//   };
// });

// OBTAIN CITY NAME

const updateCityName = (event) => {
    const cityName = document.querySelector('#city');
    cityName.textContent = event.target.value;
};

// Rewrote example from MDN documentation into format I understood better (does not require adding to RegisterEventHandlers) -

// const input = document.querySelector('input');
// const cityName = document.querySelector('#city');

// input.addEventListener('input', (event) => {
//     cityName.textContent = event.target.value;
// })

// Original MDN:
// input.addEventListener('input', updateValue);
// function updateValue(e) {
//   log.textContent = e.target.value;
// }

// RESET CITY NAME

const resetCity = (event) => {
    const cityName = document.querySelector("#city");
    cityName.textContent = "Ada";
  };

// REGISTER HANDLERS
  
const registerEventHandlers= (event) => {

    const increaseButton = document.querySelector("#increaseTempButton");
    increaseButton.addEventListener("click", increaseTemp);

    const decreaseButton = document.querySelector("#decreaseTempButton");
    decreaseButton.addEventListener("click", decreaseTemp);

    const resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", resetCity);
    
    const textInput = document.querySelector("#name");
    textInput.addEventListener("input", updateCityName);

    const skySelection= document.querySelector("#skies");
    skySelection.addEventListener("change", selectSky);

  };

document.addEventListener("DOMContentLoaded", registerEventHandlers);

