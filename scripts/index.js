const state = {
  tempClickCount: 65,
  // landscape: '☀️ 🪴 🌾 🌳 🌻'
};

/////////////////////////////////
//  Temperature Color Condition//
/////////////////////////////////
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

/////////////////////////////////////
// Landscape Temperature Condition //
////////////////////////////////////
const getLandscapes= (temp) => {
  if (temp <= 59) {
    return cools;
  }

  if (temp <= 69) {
    return wind;
  }

  if (temp <= 79) {
    return rains;
  }

  return suns;
}

/////////////////////////////////////
// Picture Change  Condition //
////////////////////////////////////
const getImage= (temp) => {
  if (temp <= 30) {
    return './assets/html/IMG_9384.jpeg';
  }

  if (temp <= 40) {
    return './assets/html/IMG_9869.jpeg';
  }
  if (temp <= 45) {
    return './assets/html/IMG_9137.jpeg';
  }
  if (temp <= 50) {
    return './assets/html/IMG_0523.jpeg';
  }

  if (temp <= 60) {
    return './assets/html/IMG_8549.jpeg';
  }

  if (temp <= 70) {
    return './assets/html/IMG_8587.jpeg';
  }
  if (temp <= 80) {
    return './assets/html/IMG_8182.jpeg';
  }
  return './assets/html/IMG_9211.jpeg';
}

/////////////////////////////////////
// Sky Theme Condition //
////////////////////////////////////
const getSky= (value) => {
  console.log(value)
  if (value === 'Sunny') {
    return `sunny-sky`;
  }

  if (value === 'Dark') {
    return `dark-sky`;
  }

  if (value === 'Cool') {
    return `cool-sky`;
  }

  if (value === 'Hot') {
    return `hot-sky`;
  }
  return ``;
}

///////////////////////////
// Increase Temperature  //
//////////////////////////
const increaseTemp = () => {
  const tempText = document.getElementById("temperature-text");
  // 1. Adds 1 to temperature, changes color to font
  state.tempClickCount+=1;
  tempText.textContent = state.tempClickCount;
  tempText.textContent = `${state.tempClickCount} °F`;

  // 2. Change color background
  const colorClass = getColorClass(state.tempClickCount);
  tempText.className = colorClass;
  // 3. Get landscape
  const landscapes = getLandscapes(state.tempClickCount)
  addLandscape(landscapes)
  changeImage()
}

////////////////////////
// Decrease Temperature//
////////////////////////
const decreaseTemp = () => {
  const tempText = document.getElementById("temperature-text");
  // 1. Decreases 1 from temperature
  state.tempClickCount-=1;
  tempText.textContent = `${state.tempClickCount} °F`;
  // 2. Change color background
  const colorClass = getColorClass(state.tempClickCount);
  tempText.className = colorClass;
  // 3. Get landscape 
  const landscapes = getLandscapes(state.tempClickCount)
  addLandscape(landscapes)
  changeImage()
}

//////////////////////
// Changing Theme   //
//////////////////////
const changeTheme = () => {
  const theme = document.getElementById("mySelect").value;
  const skyTheme = document.getElementById("weather-description");
  skyTheme.textContent = theme.toUpperCase()+ ' SKY'
  const sky = getSky(theme);
   //  Change color background
  skyTheme.className = sky;
  console.log(sky);
}

////////////////////////////////////
//    Change Picture          /////
///////////////////////////////////

const changeImage = () => {
  const imageLandscape = getImage(state.tempClickCount)
  document.getElementById("image-landscape").src = imageLandscape;

}




//////////////////////////
//      EMOJIS        ///
/////////////////////////

const bugs = ['🪲','🐝','🪱','🐞']

const suns = ['☀️','🌞','🌤','⛅️','☀️','🌞','🌤','🌵','🦋','🔥', '🐢', '🪵', '🪴', '🌴', '🌻', '🌦','🥀', '🦦', '🍀', '🐝', '🐜', '🪲','⛰', '🏕', '🏜','🐛']
const rains =['🌧','⛈','🌩','🌨','💧','🌈', '🪱', '🌥','🌲', '🌸','🌱','🦫','🍄','🍄','🌳','🐳','🪱','⛅️', '🏕', '💦', '☔️', '🌤']
const wind = ['🌬','💨', '🌫️','🌪️','☁', '🌾', '🍃', '🎋','🏕', '🪶', '🦅','🦆', '🍂', '🌊', '🏄‍♀️', '🌊', '⛵️']
const cools = ['❄️', '☃️','☁️', '🏕','🗻', '🧊','🗻','🏔', '🌁', '🚞', '☁️', '🌥', '🌦', '🌨', '🌨','🌧']

const moons = ['🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔']
const random = ['🌦','🌈']

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
/////////////////////////////////////////
//    ADDS A BUG                   /////
////////////////////////////////////////
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

////////////////////////////////////////////
//  / GET AND DISPLAY THE CITY         /////
////////////////////////////////////////////
const getAndDisplayCity = () => { 
  const cityName = document.getElementById("city").value; 
  const appearanceHeading = document.getElementById("facts__heading");
  
  appearanceHeading.textContent = "Weather in: " + cityName.toUpperCase(); 
  document.querySelector('#temperature-text').textContent = state.tempClickCount;
  // document.getElementById("demo").innerHTML = cityName;
}

//////////////////////////////////
//     RESET THE  CITY       /////
/////////////////////////////////
const resetCity = () => { 
  const cityName = document.getElementById("city").value; 
  const appearanceHeading = document.getElementById("facts__heading");
  
  appearanceHeading.textContent = "Weather:"; 
  // document.getElementById("demo").innerHTML = cityName;
}


///////////////////////////////////////////////
//      REGISTER EVENT HANDLERS           /////
///////////////////////////////////////////////
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
  // registering increase temp with click
    const upButton = document.querySelector('#up-button');
    upButton.addEventListener("click", increaseTemp);
  // registering decrease temp with click
    const downButton = document.querySelector('#down-button');
    downButton.addEventListener("click", decreaseTemp);
  // add theme 
  const selectTheme = document.querySelector('#mySelect');
  selectTheme.addEventListener("change", changeTheme);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
