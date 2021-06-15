let temp = 71;
const update = temp=>{
    const tempContainer=document.getElementById("temp")
    tempContainer.textContent=`${temp}`;
    updateColorofTemp(temp);
    updateGarden(temp);
}

const increatTemp = ()=>{
    temp +=1;
    update(temp)
};
const decreatTemp = ()=>{
    temp -=1;
    update(temp)
};
const updateColorofTemp=(currentTemp)=>{
    const tempContainer=document.getElementById("temp");
    let color="teal";
    if (currentTemp>=100) {
        color="red";
    }else if(currentTemp>=90){
        color="purple";
    }else if(currentTemp>=80){
        color="blue"
    }else if(currentTemp>=70){
        color="green"
    }else if(currentTemp>=60){
        color="orange"
    }
    tempContainer.classList=color;
}
const updateGarden=(currentTemp)=>{
    const gardenContainer=document.getElementById("landscape");
    let garden="🌵🌻";
    if (currentTemp>=100) {
        gardern="🌾"
    }else if(currentTemp>=90){
        garden="🍀";
    }else if(currentTemp>=80){
        garden="💐"
    }else if(currentTemp>=70){
        garden="🌸"
    }else if(currentTemp>=60){
        garden="🌼"
    }
    gardenContainer.textContent=garden;
}
const registerEventHandlers=()=>{
    update(temp);
    const increaseTempValue=document.getElementById("plustemp")
    increaseTempValue.addEventListener("click",increatTemp )

    const decreaseTempValue=document.getElementById("subtemp")
    decreaseTempValue.addEventListener("click",decreatTemp )
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);
