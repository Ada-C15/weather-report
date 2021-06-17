const api = {
    key: "e98d70f23dbbc7c8585ab61f5eeccd93",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

//set evenListener on search box keypress event
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);


//Key is looking to be pressed at 13, based on ASCII it's CR aka Enter-Return key
function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

//when keypress event initialized it will run a fetch request. Get API,attach weather info based on our query that've entered to searchbox value
function getResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        console.log(weather);
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);
    const city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    const now = new Date();
    const date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
    //temp
    const temp = document.querySelector('.current #temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    const weather_elem = document.querySelector('.current .weather');
    weather_elem.innerText = weather.weather[0].main;

    const hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder (date_attr) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = days[date_attr.getDay()];
    const date = date_attr.getDate();
    const month = months[date_attr.getMonth()];
    const year = date_attr.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

const updateCityName = () => {
    const inputName = document.getElementById("inputSearchBox").value;
    const headerCityName = document.getElementById("headerCity");
    headerCityName.textContent = inputName;
};

const resetCityName = () => {
    const resetSearchBox = document.getElementById("inputSearchBox");
    resetSearchBox.value = "Search for a city";
}