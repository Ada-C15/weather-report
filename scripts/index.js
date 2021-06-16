// console.log("hello!!!")

const formatTemp = (temp) => {
    // let color = "red"
    // let landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    if (temp > 80) {
        // color = "red";
        landscape = "🔥🔥🔥🔥🔥🔥🔥🔥";
    } else if (temp > 72) {
        // color = "orange";
        landscape = "🌷🌷🌷🌻🌻🌻🌷🌷🌷"; 
    } else if (temp > 60){
        color = "yellow";
        landscape = "🌾🌾🌾🌾🌾🌾🌾";
    } else if (temp > 40){
        color = "green";
        landscape = "🌲🌲🌲🌲🌲🌲🌲";
    } else {
        color = "teal";
        landscape = "⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️";
    }

    const newLandscape = document.querySelector("#weather_garden");
    newLandscape.textContent = landscape
    return color
}

const displaySky = (sky) => {
    let sky_image =  "☀️☀️☀️☀️☀️☀️"
    if (sky=="sunny"){
        sky_image = "☀️☀️☀️☀️☀️☀️";
    } else if (sky=="partly_cloudy") {
        sky_image = "🌤 🌤 🌤 🌤 🌤 🌤";
    } else if (sky=="cloudy") {
        sky_image = "☁️☁️☁️☁️☁️☁️";
    } else if (sky=="rainy") {
        sky_image = "🌧️🌧️🌧️🌧️🌧️🌧️"
    }

    const newSky = document.querySelector("#garden_sky");
    newSky.textContent = sky_image
}

