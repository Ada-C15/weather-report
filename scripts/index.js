const increaseTemperature = function(){
    let span = document.getElementById("temp-value");
    let value = parseInt(span.innerText);
    value +=1; //convert from string to int
    span.innerText = value;
};

const decreaseTempArrow = document.querySelector("#decreaseTempArrow");

const decreaseTemp = () => {
    const span = document.querySelector("#temp-value");
    let value = parseInt(span.textContent);
    value -=1;
    span.textContent = value;
};

decreaseTempArrow.addEventListener('click',decreaseTemp);



