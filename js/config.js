const selectConfig = document.querySelectorAll("nav .nav-player");

const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const player3 = document.querySelector(".player3");
const player4 = document.querySelector(".player4");

const round = document.querySelector(".round");
const register = document.querySelector(".register");
const result = document.querySelector(".result");

const section = document.querySelector("section");
const article = document.querySelector("article");
const aside = document.querySelector("aside");


function DisplayPlayer(){
    console.log("DisplayPlayer");   
}

function handleClick1(){
    console.log(player1)
    section.innerHTML = "Player1"
    article.innerHTML = "Player1's score"
}

function handleClick2(){
    console.log(player2);
    section.innerHTML = "Player2"
    article.innerHTML = "Player2's score"
}

function handleClick3(){
    console.log(player3);
    section.innerHTML = "Player3"
    article.innerHTML = "Player3's score"
}

function handleClick4(){
    console.log(player4);
    section.innerHTML = "Player4"
    article.innerHTML = "Player4's score"
}

function roundClick(){
    console.log(round);
    section.innerHTML = "ROUND"
    article.innerHTML = "ROUND description"
}

function registerClick(){
    console.log(register);
    section.innerHTML = "REGISTER"
    article.innerHTML = "REGISTER description"
}

function resultClick(){
    console.log(result);
    section.innerHTML = "RESULT"
    article.innerHTML = "RESULT description"
}

DisplayPlayer();
player1.addEventListener("click", handleClick1);
player2.addEventListener("click", handleClick2);
player3.addEventListener("click", handleClick3);
player4.addEventListener("click", handleClick4);

round.addEventListener("click", roundClick);
register.addEventListener("click", registerClick);
result.addEventListener("click", resultClick);
