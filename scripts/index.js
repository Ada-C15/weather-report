// ---------------- TEMPERATURE VARIABLES ----------------------

const INPUT_TEMP_UP = document.querySelector(".temp-up")
const INPUT_TEMP_DOWN = document.querySelector(".temp-down")

const OUTPUT_TEMP = document.querySelector(".temp-display")
const OUTPUT_LANDSCAPE = document.querySelector(".temp-emojis")

// ---------------- CITY VARIABLES-----------------------
const INPUT_CITY_NAME = document.querySelector("#city-input")
const OUTPUT_CITY_NAME = document.querySelector(".city-name")

const INPUT_RESET_CITY = document.querySelector("#reset-button")

//------------------- SKY VARIABLES --------------------------

const INPUT_SKY_SELECT = document.querySelector("#sky")
const OUTPUT_SKY = document.querySelector(".sky-emojis")

// -------------- MAPS ----------------------------------
const SkyEmojiMap = {
    SUNNY: "☁️☁️☁️☀️ 🌞 ☀️☁️☁️☁️",
    CLOUDY: "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️",
    RAINY: "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧",
    SNOWY: "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
};

const TempMap = {
    EIGHTIES_PLUS: {garden: "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂", color: "#d15656"},
    SEVENTIES: 	{garden: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷", color: "#d18b56"},
    SIXTIES: 	{garden: "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",color: "#dec826"},
    FIFTIES: 	{garden: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲", color: "#32a116"},
    FORTIES_MINUS: {color:"#16a18e"},
};

//---------------ENUMS---------------------------------------
const Sky = {
    SUNNY: "sunny",
    CLOUDY: "cloudy",
    RAINY: "rainy",
    SNOWY: "snowy",
};

//------------------------------------------------------------------

const state = {
    temp: 64,
    sky: Sky.SUNNY,
    city: "Vashon",
};
//------------- Temperature/Landscape------------------------------
const getTemp = () => {
    return state.temp
};

const changeTemp = (newTemp) => {
    state.temp = newTemp
    updateTempAndGardenDisplay()
};

const incrementTemp = () => {
    changeTemp(getTemp()+1)
};

const decrementTemp = () => {
    changeTemp(getTemp()-1)
};

const updateTempAndGardenDisplay = () => {
    const temp = getTemp()
    OUTPUT_TEMP.textContent = temp;
    if(temp >= 80){
        OUTPUT_TEMP.style.color = TempMap.EIGHTIES_PLUS.color;
        OUTPUT_LANDSCAPE.textContent = TempMap.EIGHTIES_PLUS.garden
    }else if(temp >= 70){
        OUTPUT_TEMP.style.color = TempMap.SEVENTIES.color;
        OUTPUT_LANDSCAPE.textContent = TempMap.SEVENTIES.garden
    }else if(temp >= 60){
        OUTPUT_TEMP.style.color = TempMap.SIXTIES.color;
        OUTPUT_LANDSCAPE.textContent = TempMap.SIXTIES.garden
    }else if(temp >= 50){
        OUTPUT_TEMP.style.color = TempMap.FIFTIES.color
        OUTPUT_LANDSCAPE.textContent = TempMap.FIFTIES.garden
    } else {
        OUTPUT_TEMP.style.color = TempMap.FORTIES_MINUS.color
        OUTPUT_LANDSCAPE.textContent = TempMap.FIFTIES.garden
    }
};

//---------------------------Sky---------------------------------
const getSky = () => {
    return state.sky
};

const changeSky = (newSky) => {
    state.sky = newSky
    updateSkyDisplay()
};

const updateSky = () => {
    const sky = INPUT_SKY_SELECT.value;
    changeSky(sky);
};

const updateSkyDisplay = () => {
    const sky = getSky();
    switch(sky){
        case Sky.SUNNY:
            OUTPUT_SKY.textContent = SkyEmojiMap.SUNNY;
            break
        case Sky.CLOUDY:
            OUTPUT_SKY.textContent = SkyEmojiMap.CLOUDY;
            break
        case Sky.RAINY:
            OUTPUT_SKY.textContent = SkyEmojiMap.RAINY;
            break
        case Sky.SNOWY:
            OUTPUT_SKY.textContent = SkyEmojiMap.SNOWY;
            break
    };
};

//--------------------------City------------------------------------------

const getCity = () => {
    return state.city
};

const changeCity = (newCity) => {
    state.city = newCity;
    updateCityDisplay()
};

const updateCityName = () => {
    const city = INPUT_CITY_NAME.value;
    changeCity(city);
};

const updateCityDisplay = () => {
    const city = getCity()
    OUTPUT_CITY_NAME.textContent = "✨ " + city + " ✨"
};

const resetCityname = () => {
    changeCity("Vashon")
    INPUT_CITY_NAME.value = ""
};

//----------------- event listeners -----------------------
INPUT_TEMP_UP.addEventListener("click", incrementTemp)
INPUT_TEMP_DOWN.addEventListener("click", decrementTemp)
INPUT_CITY_NAME.addEventListener("keyup", updateCityName)
INPUT_RESET_CITY.addEventListener("click", resetCityname)
INPUT_SKY_SELECT.addEventListener("change", updateSky)