
//////////////////////////////
// Changing the Text Content//
/////////////////////////////

// const appearanceHeading = document.getElementById("facts__heading");

// appearanceHeading.textContent = "WEATHER IN" ;

////////////////////////
// Changing Appearance//
////////////////////////

const importantFact = document.getElementById("facts__fact--important");

importantFact.className = `${importantFact.className} highlight`;

///////////////////////////
// Creating a New Element//
///////////////////////////

const newAppearanceFact1 = document.createElement("li");

newAppearanceFact1.textContent = "covered in sand (when on a sandy beach) 🦗"

const appearanceList1 = document.getElementById("facts__list");

appearanceList1.appendChild(newAppearanceFact1);

//---------------------------------------

const newAppearanceFact2 = document.createElement("li");

newAppearanceFact2.textContent = "Funny Looking 🐛"

const appearanceList2 = document.getElementById("facts__list");

appearanceList2.appendChild(newAppearanceFact2);


///////////////////////////
// Delete a New Element//
///////////////////////////
// const listNum5 = document.getElementById('5');
// listNum5.remove();

////////////////////////////////////////
// Select all children of an element //  DOES NOT WORK
///////////////////////////////////////

let firstChild = document.getElementById('facts__list');


///////////////////////////////////////////////////////
//  GET RANDOM BUG FROM OPTIONS                   /////
///////////////////////////////////////////////////////

const bugs = ['🪲','🐝','🪱','🐞']
const suns = ['☀️','🌤','⛅️','🌥','🌦','🌧','⛈','🌩','🌨','❄️','🌬','💨']
const moons = ['🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔']

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getRandomSun = (max) => {
  return Math.floor(Math.random() * max);
}

const addBug = () => {
  const newBug = document.createElement("span");
  const crabContainer = document.querySelector("#tips-recommendations");
  newBug.textContent = bugs[getRandomInt(bugs.length)]
  crabContainer.appendChild(newBug);
//   alert("One more bug");
};
// add button that adds all bugs
const addAllBugs = () => {
    const containsAllBugs = document.querySelector("#weather-description");
    for(let bug of bugs) {
      const bugSpan = document.createElement("span");
      bugSpan.textContent = bug
      containsAllBugs.appendChild(bugSpan);
    }
//   alert("One more bug");
};

//  COMMENT OUT THIS SECTION OR WON'T WORK WHAT'S ALREADY DONE
// const addBugCOPY = () => {
//   const newBug = document.createElement("span");
//   const crabContainer = document.querySelector("#crabContainer");
//   newBug.textContent = bugs[getRandomInt(bugs.length)]
//   crabContainer.appendChild(newBug);
// //   alert("One more bug");
// };

const getAndDisplayCity = () => { 
  const cityName = document.getElementById("city").value; 
  const appearanceHeading = document.getElementById("facts__heading");
  
  appearanceHeading.textContent = "Weather in: " + cityName.toUpperCase(); 
  // document.getElementById("demo").innerHTML = cityName;
}

const resetCity = () => { 
  const cityName = document.getElementById("city").value; 
  const appearanceHeading = document.getElementById("facts__heading");
  
  appearanceHeading.textContent = "Weather:"; 
  // document.getElementById("demo").innerHTML = cityName;
}

// add a line that adds all bugs on click or something else 
const registerEventHandlers = () => {
  const crabButton = document.querySelector("#addCrabButton");
    crabButton.addEventListener("click", addBug);
  const allBugsButton = document.querySelector("#addPossibleBugsButton");
    allBugsButton.addEventListener("click", addAllBugs);
  //newButton.addEventListener('hover', addAllBugs)
  // // insert here 
  // registering add city with click
  const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener("click", getAndDisplayCity);
    const resetButton = document.querySelector('#resetButton');
    resetButton.addEventListener("click", resetCity);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

