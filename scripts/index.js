const state = {
    temperatureDegrees: 70
  };
  
  // increase temperature function 
  const increaseTemperature = (event) => {
    state.temperatureDegrees += 1;
    const temperatureDegreesContainer = document.querySelector("#temperatureDegrees");
    temperatureDegreesContainer.textContent = `Temperature Degrees: ${state.temperatureDegrees}`;
  };

  // decrease temperature function
  const decreaseTemperature = (event) => {
      state.temperatureDegrees -= 1;
      const temperatureDegreesContainer = document.querySelector("#temperatureDegrees");
      temperatureDegreesContainer.textContent = `Temperature Degrees: ${state.temperatureDegrees}`;
  };
  
  // reset temperature function 
  const resetTemperature = (event) => {
      state.temperatureDegrees = 70;
      const temperatureDegreesContainer = document.querySelector("#temperatureDegrees");
      temperatureDegreesContainer.textContent = `Temperature Degrees: ${state.temperatureDegrees}`;
  };

  // event handlers
  const registerEventHandlers = (event) => {
    const increaseButton = document.querySelector("#addIncreaseTemperatureButton");
    increaseButton.addEventListener("click", increaseTemperature);

    const decreaseButton = document.querySelector("#addDecreaseTemperatureButton");
    decreaseButton.addEventListener("click", decreaseTemperature);

    const resetButton = document.querySelector("#addResetButton");
    resetButton.addEventListener("click", resetTemperature);
  };
  
  document.addEventListener("DOMContentLoaded", registerEventHandlers);