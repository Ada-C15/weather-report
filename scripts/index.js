const increaseTemp = () => {
  const newTemp = document.createElement("span");
  const tempContainer = document.querySelector("#tempContainer");
  newTemp.textContent = "	🌡";
  tempContainer.appendChild(newTemp);
};