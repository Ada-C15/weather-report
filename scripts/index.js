
//////////////////////////////
// Changing the Text Content//
/////////////////////////////

// const appearanceHeading = document.getElementById("facts__heading");

// appearanceHeading.textContent = "WEATHER IN" ;

const state = {
  tempClickCount: 65,
  // landscape: '☀️ 🪴 🌾 🌳 🌻'
};

// const updateTempCount = () => {
//   const tempText = document.querySelector("#temperature-text");
//   tempText.textContent = `${state.tempCount}°F`;
// }

const getColorClass = (temp) => {
  if (temp <= 49) {
    return "freezing";
  }

  if (temp <= 59) {
    return "cool";
  }

  if (temp <= 69) {
    return "sunlight";
  }

  if (temp <= 79) {
    return "warm";
  }

  return "hot";
}

const getLandscapes= (temp) => {
  if (temp <= 59) {
    return cools;
  }

  if (temp <= 69) {
    return rains;
  }

  if (temp <= 79) {
    return wind;
  }

  return suns;
}

const increaseTemp = () => {
  const tempText = document.getElementById("temperature-text");
  // 1. Adds 1 to temperature
  state.tempClickCount+=1;
  // 2. Change color
  const colorClass = getColorClass(state.tempClickCount);
  tempText.className = colorClass;
  // 3. Get landscape
  const landscape = document.getElementById("landscape");
  const landscapes = getLandscapes(state.tempClickCount)

  
}

////////////////////////
// Changing Appearance//
////////////////////////

const importantFact = document.getElementById("facts__fact--important");
importantFact.className = `${importantFact.className} sunlight`;

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


//////////////////////////
// Delete   Element     //
//////////////////////////
const listNum5 = document.getElementById('5');
listNum5.remove();

////////////////////////////////////////
// Select all children of an element //  DOES NOT WORK
///////////////////////////////////////

let firstChild = document.getElementById('facts__list');


//////////////////////////
//      EMOJIS        ///
/////////////////////////

const bugs = ['🪲','🐝','🪱','🐞']

const suns = ['☀️','🌞','🌤','⛅️','🌥']
const rains =['🌧','⛈','🌩','🌨']
const wind = ['🌬','💨']
const cools = ['❄️', '☃️']

const moons = ['🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔']
const random = ['🌦']

const addLandscape = (landscapes) => {
  const newBug = document.createElement("span");
  const crabContainer = document.querySelector("#landscape");
  newBug.textContent = landscapes[getRandomInt(landscapes.length)]
  crabContainer.appendChild(newBug);
};

//////////////////////////////////
// GET RANDOM BUG FROM OPTIONS  //
//////////////////////////////////
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getRandomSun = (max) => {
  return Math.floor(Math.random() * max);
}
///////////////////////////////////////////////////////
//    ADDS A BUG                              /////
///////////////////////////////////////////////////////
const addBug = () => {
  const newBug = document.createElement("span");
  const crabContainer = document.querySelector("#landscape");
  newBug.textContent = bugs[getRandomInt(bugs.length)]
  crabContainer.appendChild(newBug);
//   alert("One more bug");
};
///////////////////////////////
//  / ADDS  ALL  BUGS     /////
///////////////////////////////

const addAllBugs = () => {
    const containsAllBugs = document.querySelector("#weather-description");
    for(let bug of bugs) {
      const bugSpan = document.createElement("span");
      bugSpan.textContent = bug
      containsAllBugs.appendChild(bugSpan);
    }
//   alert("One more bug");
};

///////////////////////////////////////////////////////
//  / GET AND DISPLAY THE CITY                    /////
///////////////////////////////////////////////////////
const getAndDisplayCity = () => { 
  const cityName = document.getElementById("city").value; 
  const appearanceHeading = document.getElementById("facts__heading");
  
  appearanceHeading.textContent = "Weather in: " + cityName.toUpperCase(); 
  document.querySelector('#temperature-text').textContent = state.tempClickCount;
  // document.getElementById("demo").innerHTML = cityName;
}

/////////////////////////////////////////////
//     RESET THE  CITY                   /////
//////////////////////////////////////////////
const resetCity = () => { 
  const cityName = document.getElementById("city").value; 
  const appearanceHeading = document.getElementById("facts__heading");
  
  appearanceHeading.textContent = "Weather:"; 
  // document.getElementById("demo").innerHTML = cityName;
}

///////////////////////////////////////////////////////
//      REGISTER EVENT HANDLERS                   /////
///////////////////////////////////////////////////////
const registerEventHandlers = () => {
  // 
  const crabButton = document.querySelector("#addCrabButton");
    crabButton.addEventListener("click", addBug);
  const allBugsButton = document.querySelector("#addPossibleBugsButton");
    allBugsButton.addEventListener("click", addAllBugs);
  // registering add city with click
  const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener("click", getAndDisplayCity);
    const resetButton = document.querySelector('#resetButton');
    resetButton.addEventListener("click", resetCity);

  
  

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

