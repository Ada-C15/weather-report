function registerEventHandlers() {
const upButton = document.querySelector("#upButton");
const currentTemp = document.querySelector("#value");

upButton.addEventListener("click", function () {
console.log("current value is: " + currentTemp.textContent);

currentTemp.textContent = parseInt(currentTemp.textContent) + 1;
});
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);
