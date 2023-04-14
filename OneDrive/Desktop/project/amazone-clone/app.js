const sildebar=document.querySelector(".slider");
const slider=document.querySelector(".main-slidebar");
const close=document.querySelector(".close");
sildebar.addEventListener("click",()=>{
    console.log("clicked")
    slider.style.display="block"
    slider.style.transition="all 0.5s"
})

close.addEventListener("click",()=>{
    console.log("lll");
    slider.style.display="none"
})

const product=[
    {
        id:1,
        img:"src",
        description:"product describe",
    },
    {
        id:1,
        img:"src",
        description:"product describe",
    },
    {
        id:1,
        img:"src",
        description:"product describe",
    },
    {
        id:1,
        img:"src",
        description:"product describe",
    },
    {
        id:1,
        img:"src",
        description:"product describe",
    },
]