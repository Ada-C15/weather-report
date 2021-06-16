
// WAVE 2 -- EVENT HANDLER (TEMPERATURE)
// SELECT THE EVENT TARGET
document.getElementById('givenTemp')

// use the .addEventListener() method on the eventTarget DOM element
const state = {
    givenTemp: 70
};

const addTemp = (event) =>  {
// Add temp Up Behavior
    state.givenTemp += 1;
    const tempUp = document.querySelector("#givenTemp");
    tempUp.textContent = state.givenTemp;
}

const subTemp = (event) => {
// Add temp Down Behavior
    state.givenTemp -= 1;
    const tempDown = document.querySelector("#givenTemp");
    tempDown.textContent = state.givenTemp;
}

// use the .registerEventHandlers on the upButton
const registerEventHandlers = (event) => {
    const upButton = document.querySelector("#addUpButton");
    upButton.addEventListener("click", addTemp);
// I dont need to repeat the EventHandler/Lister steps - 
// just add the downButton features here
    const downButton = document.querySelector("#addDownButton");
    downButton.addEventListener("click", subTemp)
};

// register the event
document.addEventListener("DOMContentLoaded", registerEventHandlers);





// WAVE 5 
// const form = document.querySelector(".top-banner form");
// ^ this will return the form


// form.addEventListener("submit",  => {

// .then(response?)s
// .catch(() => {
//     msg.textContent = "Please search for a valid city 😩";
// });