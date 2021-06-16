let tempValue = -10;

const updateSky = () =>{
    //why use getelementby ID vs. qeurySelector
   const inputSeason = document.getElementById("seasonSelect").value;
   const seasonContainer = document.getElementById("sky");
   let sky = '';
   let skyColor = '';
   if (inputSeason === "Satan's Tundra Hole"){
       sky = "🌨  🌨    🌨   🌚  🌨  ⛅️  🌨";
       skyColor = "snowy";
   }
   else if(inputSeason === "Humid and Cloudy Oh My!"){
    sky = "⛅️  ☁️  ☁️  ☁️    ⛅️  ⛅️  ";
    skyColor = "cloudy";
   }
   else if (inputSeason === "ThunderStorms"){
    sky = "⛈  ☁️⛈  ☁️  ☁️    ⛈  ⛈  ";
    skyColor = "rainy";
   }
   else if (inputSeason === "Cicadas and Sunny(?)"){
    sky = "🌞🌞  ☁️🌞  ☁️  🪰☁️    🌞  🌞  ";
    skyColor = "sunny";
    }
    seasonContainer.textContent = sky; //what is this line doing?
    const gardenContent = document.getElementById("gardenContent");
    gardenContent.classList = `garden__content ${skyColor}`;
};

const updateCityName = () =>{
    const inputName = document.getElementById("cityNameInput").value;
    const headerCityName = document.getElementById("headerCityName");
    headerCityName.textContent = inputName;
};

const resetCityName = () => {
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.value = "Chicago";
    updateCityName();
}

const updateTempStyles = (currentTemp) =>{
    const tempValueContainer = document.getElementById("tempValue");
    let color = "gray";
    if (currentTemp >= 80){
        color = "red";
    }

    else if (currentTemp >= 70){
        color = "orange";
    }
    else if (currentTemp >= 60){
        color = "yellow";
    }
    else if (currentTemp >= 50){
        color = "gray";
    }

    tempValueContainer.classList = color;
}
//switch conditionals so that landscape and garden work together
const updateGarden = (currentTemp) =>{
    const landscapeContainer = document.getElementById("landscape");
    let landscape = "☃️⛄️❄️__☃️_☃️☃️_☃️❄️☃️"
    if (currentTemp >= 80){
        landscape= "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    }
    else if (currentTemp >= 70){
        landscape= "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    }
    else if (currentTemp >= 60){
        landscape= "☃️⛄️❄️__☃️_☃️☃️_☃️❄️☃️";
    }

    landscapeContainer.textContent = landscape;
}

const updateTemp = tempValue =>{
    const tempValueContainer = document.getElementById("tempValue");
    tempValueContainer.textContent = tempValue;
    updateTempStyles(tempValue);
    updateGarden(tempValue);
}

const increaseTemp = () =>{
    tempValue += 10;
    updateTemp(tempValue);
}

const decreaseTemp = () =>{
    tempValue -= 10;
    updateTemp(tempValue);
}

const registerEventHandlers = () =>{
    updateTemp(tempValue);
    const increaseTempControl = document.getElementById("increaseTempControl");
    increaseTempControl.addEventListener("click",increaseTemp);
    const decreaseTempControl = document.getElementById("decreaseTempControl");
    decreaseTempControl.addEventListener("click",decreaseTemp);

    updateCityName();
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.addEventListener("input",updateCityName);

    const cityNameResetBtn = document.getElementById("cityNameReset");
    cityNameResetBtn.addEventListener("click",resetCityName);

    updateSky();
    const skySelect = document.getElementById("seasonSelect");
    skySelect.addEventListener("change",updateSky);
}

document.addEventListener("DOMContentLoaded",registerEventHandlers)