var tempTrack = 0
const incrementTemp = () => {
    const newTemp = document.createElement("span");
    const tempContainor = document.querySelector("#add-temp");
    const tempCountContainer = document.querySelector("#tempCount")
    tempTrack += 1;
    tempCountContainer.textContent = `${tempTrack}`;
    console.log("It Works")
    
    console.log(tempTrack)
};
const registerEventHandlers = () => {
    const upArrow = document.querySelector("#add-temp");
    upArrow.addEventListener("click", incrementTemp);
};
document.addEventListener("DOMContentLoaded", registerEventHandlers);

