const updateCityName = () => {
    const cityNameInput = document.getElementById("cityNameInput").value;
    const headerCityName = document.getElementById("headerCityName");
    headerCityName.textContent = cityNameInput;
}


const registerEventHandlers = () => {
    updateCityName();
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.addEventListener("input", updateCityName);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

