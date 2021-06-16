const state = {
    temp: 65
};

const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');

function changeBackground(temp) {
    if (temp < 29) {
        document.body.style.backgroundColor = 'grey';
    }
    else if (temp < 39) {
        document.body.style.backgroundColor = 'blue';
    }
    else if (temp < 49) {
        document.body.style.backgroundColor = 'teal';
    }
    else if (temp < 59) {
        document.body.style.backgroundColor = 'green';
    }
    else if (temp < 69) {
        document.body.style.backgroundColor = 'yellow';
    }
    else if (temp < 79) {
        document.body.style.backgroundColor = 'orange';
    }
    else if (temp > 80) {
        document.body.style.backgroundColor = 'red';
    } 

}


minusButton.addEventListener('click', event => {
    const tempContainer = document.querySelector("#tempDisplay");
    state.temp -= 1;
    tempContainer.textContent = `${state.temp}`;
    // change background color depending on temp 
    changeBackground(state.temp);

});

plusButton.addEventListener('click', event => {
    const tempContainer = document.querySelector("#tempDisplay");
    state.temp += 1;
    tempContainer.textContent = `${state.temp}`;
    changeBackground(state.temp);
});
