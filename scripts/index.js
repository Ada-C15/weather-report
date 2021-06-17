
// HELPER FUNCTION //
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

////////////////////////////// WAVE 2 //////////////////////////////////
////////////////// EVENT HANDLER (UP/DOWN TEMPERATURE)//////////////////
// SELECT THE EVENT TARGET
// document.getElementById('givenTemp') || document.querySelector("#givenTemp");

////////////////////////////// WAVE 2 //////////////////////////////////
/////////////// METHODS (UP/DOWN TEMPERATURE) BEHAVIORS ////////////////
const state = {
    givenTemp: 70
};
const addTemp = (event) =>  {       // Add temp UP Behavior
    state.givenTemp += 1;
    const tempUp = document.querySelector("#givenTemp");
    tempUp.textContent = state.givenTemp;
    numsChangeColor();
}
const subTemp = (event) => {        // Add temp DOWN Behavior
    state.givenTemp -= 1;
    const tempDown = document.querySelector("#givenTemp");
    tempDown.textContent = state.givenTemp;
    numsChangeColor();
};

// REGISTER ALL EVENTS // use the .registerEventHandler
const registerEventHandlers = (event) => {              // EACH EVENT needs a .addEventListener - listens fot the event i.e. "click" then performs a function
                                                        // WAVE 2 // reigster the upButton
    const upButton = document.querySelector("#addUpButton");
    upButton.addEventListener("click", addTemp);
                                                        // WAVE 2 // reigster the downButton
    const downButton = document.querySelector("#addDownButton");
    downButton.addEventListener("click", subTemp);
                                                        // WAVE 5 // register the reset / submit button
    const submitButton = document.querySelector("#submitButton");
    submitButton.addEventListener("click", switchCity);
                                                        // WAVE 3 // register the skySelector
    const skySelect = document.querySelector("#skySelector");
    skySelect.addEventListener("change", changeDisplay);
};
///////////////////////////// WAVE 5 /////////////////////////////////
//////////////////// METHOD (switchCity) BEHAVIOR ////////////////////

// SELECT THE EVENT TARGET
// NOPE document.getElementById('changeCity') || document.querySelector("#changeCity");
// Needs to be the "citySearch" id BUT specifically the VALUE of the user input that triggers the change/reset of the display
const switchCity = (event) =>  {
    // change to different city Behavior // NOPE const rainville = document.getElementById('changeCity') // NOPE rainville.innerHTML = "<h2>Rainville</h2>\n<span>55<sup>°F</sup></span>\n<figure>\n<img class=\"city-icon\" src=\"./assets/rainy.png\" height=\"100\" width=\"100\" alt=\"Rainy\"/>\n<figcaption>Rainy with Temperatures between 40-65°F</figcaption></figure>"
    const city = document.getElementById("citySearch").value; // THE USER INPUT** 
    let cityNameText = "";
    let cityTempText = "";
    let cityPicSrc = "";

    switch (city){
        case "Sunnyville":
            cityNameText = "Sunnyville";
            cityTempText = "80°F";
            cityPicSrc = "./assets/sunny.png";
            break;
        case "Rainville":
            cityNameText = "Rainville";
            cityTempText = "55°F";
            cityPicSrc = "./assets/rainy.png";
            break;
        case "Cloudville":
            cityNameText = "Cloudville";
            cityTempText = "55°F";
            cityPicSrc = "./assets/cloudy.png";
            break;
        case "Snowville":
            cityNameText = "Snowville";
            cityTempText = "30°F";
            cityPicSrc = "./assets/snowy.png";
            break;
    }

    const cityName = document.getElementById("cityName"); //STATE? - the thing to change
    cityName.textContent = cityNameText;

    const cityTemp = document.getElementById("cityTemp"); //STATE? - the thing to change
    cityTemp.textContent = cityTempText;

    const cityPic = document.getElementById("cityPic"); //STATE?  - the thing to change
    cityPic.src = cityPicSrc;
                                                    // preventDefault() - makes it stick with the change
    event.preventDefault()
}

///////////////////////////// WAVE 4 //////////////////////////////////
///////////// A dropdown element to select the sky display ////////////
// SELECT THE EVENT TARGET
// document.getElementById('changeCity') || document.querySelector("#changeCity");

/////////////// METHOD (changeDisplay) BEHAVIOR ////////////////
const changeDisplay = (event) => {
    const displaySky = document.getElementById("displaySky");
    displaySky.src = document.getElementById("skySelector").value; // USER INPUT ?? does this grab the option value?

    event.preventDefault()
}
    


/* NOPE - need to import jQuery?
$("#skySelector").on("change", function(){
    let selection = $(this).val()
    let changeSky = document.getElementById("displaySky")
    changeSky.src = selection
    // $("#displaySky").text(selection)
});
*/

/*
const changeSky = (event) =>  {
    const sky = document.getElementById("skySelector").value;
    const display = document.getElementById("displaySky");
    .src
    switch(sky) {
        case "sunny":
    }
*/
// REGISTER ALL EVENTS and LISTENERS //
document.addEventListener("DOMContentLoaded", registerEventHandlers);


///////////////////////////// WAVE 4 //////////////////////////////////
///////////// A dropdown element to select the sky display ////////////
// SELECT THE EVENT TARGET
// document.getElementById('changeCity') || document.querySelector("#changeCity");



// const form = document.querySelector(".top-banner form");
// ^ this will return the form

// form.addEventListener("submit",  => {

// .then(response?)s
// .catch(() => {
//     msg.textContent = "Please search for a valid city 😩";
// });