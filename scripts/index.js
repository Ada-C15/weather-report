
////////////////////////////// WAVE 2 //////////////////////////////////
////////////////// EVENT HANDLER (UP/DOWN TEMPERATURE)//////////////////
// SELECT THE EVENT TARGET
// document.getElementById('givenTemp') || document.querySelector("#givenTemp");

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
    downButton.addEventListener("click", subTemp);
// WAVE 5 - use the .registerEventHandlers on the submit button
    const submitButton = document.querySelector("#submitButton");
    submitButton.addEventListener("click", switchCity);
};
///////////////////////////// WAVE 5 /////////////////////////////////
///////////// A clickable element to reset the city name ///////////////
// Need to add all event handlers in the same registration 
// SELECT THE EVENT TARGET
// document.getElementById('changeCity') || document.querySelector("#changeCity");
const switchCity = (event) =>  {
    // change to different city Behavior
    // const rainville = document.getElementById('changeCity')
    // rainville.innerHTML = "<h2>Rainville</h2>\n<span>55<sup>°F</sup></span>\n<figure>\n<img class=\"city-icon\" src=\"./assets/rainy.png\" height=\"100\" width=\"100\" alt=\"Rainy\"/>\n<figcaption>Rainy with Temperatures between 40-65°F</figcaption></figure>"
    const city = document.getElementById("citySearch").value;
    let cityNameText = "";
    let cityTempText = "";
    let cityIconSrc = "";

    switch (city){
        case "Rainville":
            cityNameText = "Rainville";
            cityTempText = "55°F";
            cityIconSrc = "./assets/rainy.png";
            break;
    }

    const cityName = document.getElementById("cityName");
    cityName.textContent = cityNameText;

    const cityTemp = document.getElementById("cityTemp");
    cityTemp.textContent = cityTempText;

    const cityIcon = document.getElementById("cityIcon");
    cityIcon.src = cityIconSrc;

    event.preventDefault()
}

// register the event
document.addEventListener("DOMContentLoaded", registerEventHandlers);


// const form = document.querySelector(".top-banner form");
// ^ this will return the form


// form.addEventListener("submit",  => {

// .then(response?)s
// .catch(() => {
//     msg.textContent = "Please search for a valid city 😩";
// });