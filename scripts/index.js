const api = {
    key: "e98d70f23dbbc7c8585ab61f5eeccd93",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

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

//set evenListener on search box keypress event
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);