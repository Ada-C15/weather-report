const updateCityName = () => {
    const cityNameInput = document.getElementById("cityNameInput").value;
    const headerCityName = document.getElementById("headerCityName");
    headerCityName.textContent = cityNameInput;
}

const resetCityName = () => {
    const cityNameImput = document.getElementById("cityNameInput");
    cityNameImput.value = "";
    updateCityName();
}


const registerEventHandlers = () => {
    
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.addEventListener("input", updateCityName);

    const cityNameResetBtn = document.getElementById("cityNameReset");
    cityNameResetBtn.addEventListener("click", resetCityName)

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

