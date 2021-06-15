let temp = 71;
const update = temp=>{
    const tempContainer=document.getElementById("temp")
    tempContainer.textContent=`${temp}`;
}

const increatTemp = ()=>{
    temp +=1;
    update(temp)
};
const decreatTemp = ()=>{
    temp -=1;
    update(temp)
};
const registerEventHandlers=()=>{
    update(temp);
    const increaseTempValue=document.getElementById("plustemp")
    increaseTempValue.addEventListener("click",increatTemp )

    const decreaseTempValue=document.getElementById("subtemp")
    decreaseTempValue.addEventListener("click",decreatTemp )
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);
