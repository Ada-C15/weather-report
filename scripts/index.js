

const tempToColor = (temp) => { 
    if (temp >= 80){
        return "red-temp";
    } else if (temp >= 70){
        return "orange-temp";
    } else if (temp >= 60){
        return "yellow-temp";
    } else if (temp >= 50){
        return "green-temp";
    } else {
        return "teal-temp";
    }
    // ((temp>= 70) && (temp <= 79))  
};

const tempToLandscape = (temp) => {
    if (temp >= 80){
        return "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    } else if (temp >= 70){
        return "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    } else if (temp >= 60){
        return "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    } else {
        return "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    }
};

const skyToLandscape = (sky) => {
    if (sky == "sunny"){
        return "☁️ ☁️ ☁️ ☀️ ☁️ ☁"
    } else if (sky == "cloudy"){
        return "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
    } else if (sky == "rainy"){
        return "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
    } else if (sky == "snowy"){
        return "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    }
}

const resetClickCount = ()=>{
    StaticRange.clickCount = 0;
    const townnameContainer = document.getElementBy("town-name");
};

const setTempClass = (tag, className) => {
    tag.classList.remove("red-temp");
    tag.classList.remove("orange-temp");
    tag.classList.remove("yellow-temp");
    tag.classList.remove("green-temp");
    tag.classList.remove("teal-temp");
    //remove all the classes 
    tag.classList.add(className);
};

const setGroundLandscape = (temp) => {
    let p = document.getElementById("ground-landscape");
    let groundValue = tempToLandscape(temp);
    p.innerText = groundValue;
};


const increaseTemperature = function(){
    let span=document.getElementById("temp-value");
    let value = parseInt(span.innerText);
    value +=1; //convert from string to int
    span.innerText = value;
    let className=tempToColor(value);
    setTempClass(span,className);
    setGroundLandscape(value);
};




const decreaseTemp = () => {
    const span = document.querySelector("#temp-value");
    let value = parseInt(span.textContent);
    value -=1;
    span.textContent = value;
    let className=tempToColor(value);
    setTempClass(span,className);
    setGroundLandscape(value);
};

const changeSky = () => {
    
    let p = document.getElementById("sky-landscape");
    let select = document.querySelector("#sky-card > select"); //select is tag
    let weather = select.value;
    let landscape = skyToLandscape(weather);
    p.textContent = landscape;

    // use sky to landscape function select.value 
    // let className=tempToColor(value);
    // skyToLandscape = select.value
}
const decreaseTempArrow = document.querySelector("#decreaseTempArrow"); //# is id
decreaseTempArrow.addEventListener('click',decreaseTemp);
let select = document.querySelector("#sky-card > select"); //select is tag 
select.addEventListener('change',changeSky);







