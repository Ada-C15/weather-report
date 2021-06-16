const state={
    color:"teal",
    temp:71,
    garden:"☘️🌻🌵💐",
    
};

const increatTemp = ()=>{
    const tempContainer=document.getElementById("temp")
    state.temp +=1;
    tempContainer.textContent=`${state.temp}`;
    
    updateColorofTemp(state.temp);
    updateGarden(state.temp);
};

const decreatTemp = ()=>{
    const tempContainer=document.getElementById("temp")
    state.temp +=1;
    tempContainer.textContent=`${state.temp}`;

    updateColorofTemp(state.temp);
    updateGarden(state.temp);
};

const updateColorofTemp=()=>{
    const tempContainer=document.getElementById("temp");

    if (state.temp>=100) {
        state.color="red";
    
    }else if(state.temp>=90){
        state.color="purple";
    
    }else if(state.temp>=80){
        state.color="blue";
    
    }else if(state.temp>=70){
        state.color="green";
        
    }else if(state.temp>=60){
        state.color="orange";
        
    }
    tempContainer.classList=state.color;
};

const updateGarden=()=>{
    const gardenContainer=document.getElementById("landscape");

    if (state.temp>=100) {
        state.garden="🌾_🌻_🍀"
    }else if(state.temp>=90){
        state.garden="🍀_🌸_🎋";
    }else if(state.temp>=80){
        state.garden="💐_💐"
    }else if(state.temp>=70){
        state.garden="🌸_🌺"
    }else if(state.temp>=60){
        state.garden="🌼_☘️"
    }
    gardenContainer.textContent=state.garden;
};

const updateCityName = () => {
    const inputName = document.getElementById("cityNameInput").value;
    const headerCityName = document.getElementById("headerCityName");
    headerCityName.textContent = inputName;
};

const resetCityName = () => {
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.value = "San Francisco";
    updateCityName();
};

const updateSky=()=>{
    const inputValue=document.getElementById('selectSky').value;
    const skyContainer=document.getElementById('sky');
    let sky = "";
    let skyFace="";
    if(inputValue==="Sunny"){
        sky="☀️";
        skyFace="sunny";
    }else if(inputValue==="Windy"){
        sky="💨";
        skyFace="windy";
    }else if(inputValue==="Hazzy"){
        sky="🌥";
        skyFace="hazzy";
    }else if(inputValue==="Rainy"){
        sky="🌧";
        skyFace="rainy";
    }
    skyContainer.textContent = sky;
    const gardenContent = document.getElementById('garden_content');
    gardenContent.classList=`garden_content ${skyFace}`;
};

const changeBackground = () => {
    let body = document.body;
    body.classList.toggle("night");
};
const registerEventHandlers=()=>{
    const increaseTempValue=document.getElementById("plustemp")
    increaseTempValue.addEventListener("click",increatTemp )

    const decreaseTempValue=document.getElementById("subtemp")
    decreaseTempValue.addEventListener("click",decreatTemp )

    updateSky();
    const skySelect = document.getElementById("selectSky");
    skySelect.addEventListener("change", updateSky); 

    updateCityName();
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.addEventListener("input", updateCityName);

    const cityNameResetBtn = document.getElementById("cityNameReset");
    cityNameResetBtn.addEventListener("click", resetCityName);

    const darkModeButton = document.querySelector("#dark-mode");
    darkModeButton.addEventListener("click", changeBackground);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);
