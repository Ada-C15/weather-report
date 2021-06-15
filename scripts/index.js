
const registerEventHandlers = () => {
    const crabButton = document.querySelector("#up-arrow");
    crabButton.addEventListener("click", upArrow);
};
document.addEventListener("DOMContentLoaded", registerEventHandlers);