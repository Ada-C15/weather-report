// ATTEMPTING A HELPER FUNCTION ...
const numsChangeColor = () => {

    let tempColor = document.querySelector('#givenTemp').style.color;
    // let newColor = tempColor.style.color;
    // let newColor = '';
    // https://stackoverflow.com/questions/17925577/change-text-color-with-javascript
    // ^^ the site that told me this syntax works -- but it does-NOT work

    if (givenTemp >= 70) {
        tempColor = "red"
    } else if ((givenTemp < 70) && (givenTemp >= 60)) {
        tempColor = "orange"
    } else if ((givenTemp < 60) && (givenTemp >= 50)) {
        tempColor = "yellow"
    } else if ((givenTemp < 50) && (givenTemp >= 40)) {
        tempColor = "green"
    } else if ((givenTemp < 40) && (givenTemp >= 30)) {
        tempColor = "blue"
    } else if (givenTemp < 30) {
        tempColor = "purple"
    }
};


// THIS IS CORRECT:
function numsChangeColor() {
    let temp = document.querySelector('#givenTemp');
    
    if (state.givenTemp >= 100) {
        temp.style.color = "black"
    } else if ((state.givenTemp < 100) && (state.givenTemp >= 70)) {
        temp.style.color = "red"
    } else if ((state.givenTemp < 70) && (state.givenTemp >= 60)) {
        temp.style.color = "orange"
    } else if ((state.givenTemp < 60) && (state.givenTemp >= 50)) {
        temp.style.color = "yellow"
    } else if ((state.givenTemp < 50) && (state.givenTemp >= 40)) {
        temp.style.color = "green"
    } else if ((state.givenTemp < 40) && (state.givenTemp >= 30)) {
        temp.style.color = "blue"
    } else {
        temp.style.color = "purple"
    }
};



// ATTEMPTING A SWITCH FUNCTION:
function numsChangeColor() {
    let temp = document.querySelector('#givenTemp');
    temp.style.color = ""

    switch (state.givenTemp) {
        case state.givenTemp >= 100:
            temp.style.color = "black";
            break;
        case ((state.givenTemp < 100) && (state.givenTemp >= 70)):
            temp.style.color = "red";
            break;
        case ((state.givenTemp < 70) && (state.givenTemp >= 60)):
            temp.style.color = "orange";
            break;
        case ((state.givenTemp < 60) && (state.givenTemp >= 50)):
            temp.style.color = "yellow";
            break;
        case ((state.givenTemp < 50) && (state.givenTemp >= 40)):
            temp.style.color = "green";
            break;
        case ((state.givenTemp < 40) && (state.givenTemp >= 30)):
            temp.style.color = "blue";
            break;
        case state.givenTemp <= 0:
            temp.style.color = "purple";
            break;
    }
};