// ATTEMPTING A HELPER FUNCTION ...

const numsChangeColor = () => {

    let tempColor = document.querySelector('#givenTemp').style.color;
    // let newColor = tempColor.style.color;
    // let newColor = '';

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