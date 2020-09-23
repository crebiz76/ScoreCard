const Section = document.querySelector("section")
const BASE_COLOR = "# 34495e";

function handleClick(){
    // if(Section.style.color=="red")
    // {
    //     Section.style.color="blue";
    // } 
    // else
    // {
    //     Section.style.color="red";
    // }
    console.log("clicked!")
}

function init(){
    console.log("script.js");
    Section.style.color = "# 34495e";
    Section.addEventListener("click", handleClick);
}

init();