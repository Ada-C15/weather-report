const up = document.getElementById("up")
const down = document.getElementById("down")
const temp = document.getElementById("temp")
const landscape = document.getElementById("landscape")
const landscapetext = document.getElementById("landscapetext")
const city = document.getElementById("city")
const form = document.getElementById('filltown');
const sky = document.getElementById("sky")
const state = {tempCount: 70};
const skyscene = document.getElementById('gardenactivity')
const garden = document.getElementsByClassName('garden')

const changeTempColor = () => {
    if (state.tempCount<=32){
        temp.setAttribute('class', 'winter');
        landscape.textContent="⛄️⛄️🗻⛷🏂⛄️⛄️🗻⛷🏂⛄️⛄️";
        landscapetext.textContent="Its a bit chilly! Time to ski?!?";
        document.getElementById('gardenchange').style.background="center / cover no-repeat url(../assets/leavenworth/winter.jpeg)"
    } else if (state.tempCount>32 && state.tempCount<=60){
        temp.setAttribute('class', 'fall');
        landscape.textContent="🍁🚵🏾‍♂️⛰🍁🚵🏽‍♀️🍁🚵🏾‍♂️⛰🍁🚵🏽‍♀️🍁🚵🏾‍♂️";
        landscapetext.textContent="Shoulder season whats up! Time for some more mountain biking???";
        document.getElementById('gardenchange').style.background="center / cover no-repeat url(../assets/leavenworth/fall.jpeg)"
    } else if (state.tempCount>60 && state.tempCount<=80){
        temp.setAttribute('class', 'spring')
        landscape.textContent="🌲🧗🏾‍♀️🏔🌲🌲🧗🏾‍♀️🏔🌲🌲🧗🏾‍♀️🏔🌲";
        landscapetext.textContent="PRIME CLIMBING TEMPS!!!";
        document.getElementById('gardenchange').style.background="center / cover no-repeat url(../assets/leavenworth/spring.jpeg)"
    } else if (state.tempCount>80 && state.tempCount<=100){
        temp.setAttribute('class', 'summer')
        landscape.textContent="🌻🏄🏾‍♀️🏝🛶🌻🏄🏾‍♀️🌻🏝🛶🌻🏄🏾‍♀️🌻";
        landscapetext.textContent="Its getting hotttttt, maybe time for a plunge???";
        document.getElementById('gardenchange').style.background="center / cover no-repeat url(../assets/leavenworth/summer.jpeg)"
    } else {
        temp.setAttribute('class', 'tooextreme')
        landscape.textContent="🍻📚🛋📺🍻📚🛋📺🍻📚🛋📺";
        landscapetext.textContent="WAY TOO HOT TO LEAVE THE HOUSE! Time for beer or a book (or both?)!";
        document.getElementById('gardenchange').style.background="center / cover no-repeat url(../assets/leavenworth/toohot.jpeg)"
    }
}

const changeCity = (event) => {
    const inputCity = document.getElementById("filltownval").value;
    city.textContent = inputCity;
    event.preventDefault();
}

const changeSky = (event) =>{
    if (sky.value == "cloudy"){
        skyscene.textContent="☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️"
    }else if (sky.value == "sunny"){
        skyscene.textContent="☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️";
    }else if (sky.value == "rainy"){
        skyscene.textContent="🌦🌦🌦🌦🌦🌦🌦🌦🌦🌦🌦🌦"
    }else if (sky.value == "snowy"){
        skyscene.textContent="❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️"
    }else{
        skyscene.textContent="🛸🛸🛸🛸🛸🛸🛸🛸🛸🛸🛸🛸"
    }
    event.preventDefault();
}

sky.addEventListener('change', changeSky)

form.addEventListener('input', changeCity)

up.addEventListener('click', ()=>{
    state.tempCount += 1;
    temp.textContent = `${state.tempCount}`;
    changeTempColor();   
})

down.addEventListener('click', () => {
    state.tempCount -= 1;
    temp.textContent = `${state.tempCount}`;
    changeTempColor();
    })


