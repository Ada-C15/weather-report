// connect the up arrow so id of up-arrow to an on click event
// when the id is clicked, then increase temp counter by 1

// temperature variable, every time the user clickes the button, the temperature count goes up by 1


// const appearanceHeading = document.getElementById("facts__heading");

// appearanceHeading.textContent = "Qualities and Traits of a Crab";
let temperature = 80


const increaseTemp=()=> {
// When clicked the temperature will rise by 1 degree
    ++temperature
    console.log("i am clicking the up button")
    console.log(temperature)
    document.getElementById("temperature-number").innerHTML=temperature
    console.log('I am the color', color)    
}

const decreaseTemp=()=> {
    // When clicked the temperature will drop by 1 degree
    --temperature
    console.log("i am clicking the down button")
    console.log(temperature)
    document.getElementById("temperature-number").innerHTML=temperature
    console.log(color)
}



// document.getElementById('output').innerHTML = lengthOfName;
document.getElementById("temperature-number").innerHTML=temperature

// range for color and landscape icons

let color = '';

if (temperature >=80) {
    color = 'red' 
} else if (70<=temperature<=79) {
    color = 'orange'
} else if (60<=temperature<=69) {
    color = 'yellow'
}else if (50<=temperature<=59) {
    color = 'green'
}else if (49<=temperature) {
    color = 'teal'
}

document.getElementsByClassName("color").innerHTML=color

