/**********************************************************
* Variables
**********************************************************/
const section = document.querySelector("section");
const article = document.querySelector("article");
const aside = document.querySelector("aside");

const player1_form = document.createElement('form');
const player1_name = document.createElement('input');
            

var currentMenu;
var menu = document.querySelector(".menu");
var menu_act = document.querySelector(".menu-active");
// var player_name = document.querySelector(".input");
/**********************************************************
* Functions
**********************************************************/
function scriptRunnable(){
    menu.addEventListener('click', clickHandler);
    player1_form.addEventListener('submit', submitHandler);
    // Round
}

function clickHandler(e){
    if(currentMenu){
        currentMenu.classList.remove('menu-active');
    }
    e.target.classList.add('menu-active');
    currentMenu = e.target;
    console.log(currentMenu);

    makeSection();
    makeArticle();
    makeAside();
}

function makeSection(){

    var section_title = section.querySelector('.section');

    switch(currentMenu.innerText)
    {
        case 'Player1':
                console.log("Player1");
                section_title.innerText = 'Player1';
        break;
        
        case 'Player2':
            console.log("Player2");
            section_title.innerText = 'Player2';
        break;
            
        case 'Player3':
            console.log("Player3");
            section_title.innerText = 'Player3';
        break;
                
        case 'Player4':
            console.log("Player4");
            section_title.innerText = 'Player4';
        break;
            
        case 'Round':
            console.log("Round");
            section_title.innerText = 'Round';
        break;
            
        case 'Record':
            console.log("Record");
            section_title.innerText = 'Record';
        break;
        
        case 'Result':
            console.log("Result");
            section_title.innerText = 'Result';            
        break;

        default:
            console.log('init');
        break;
    }
}

function drawName(text){
    console.log(menu_act);
    menu_act.innerText = `${text}`;
    // menu_act.innerText = text;
}

function saveName(text){
    localStorage.setItem('current_user', text);
}

function submitHandler(evt){
    evt.preventDefault();
    var currentValue = player1_name.value;
    section.innerText = currentValue;

    console.log(currentValue, evt);
    // paintGreeting(currentValue);
    saveName(currentValue);
    // drawName(currentValue);
}

function makeArticle(){
    
    // Sub-title
    const article_title = article.querySelector('.article');
    article_title.innerText = currentMenu.innerText + ' Register';

    // add contents
    const article_item = document.createElement('div');
    article_title.appendChild(article_item);
    article_item.className = 'item';

    switch(currentMenu.innerText)
    {
        case 'Player1':
            article_item.innerText = 'Player1\'s Name: ';
            // const player1_form = document.createElement('form');
            article_item.appendChild(player1_form);
            player1_form.className = "player_name";
            
            // const player1_name = document.createElement('input');
            player1_name.type = "text";
            player1_name.placeholder="Write a player\'s name."
            player1_form.appendChild(player1_name);
        break;
        
        case 'Player2':
            article_item.innerText = 'Player2\'s Name';
        break;
        
        case 'Player3':
            article_item.innerText = 'Player\'3 Name';
        break;
        
        case 'Player4':
            article_item.innerText = 'Player\'4 Name';
        break;

        case 'Round':
            article_item.innerText = 'Round info';
        break;

        case 'Record':
            article_item.innerText = 'Record info';
        break;

        case 'Result':
            article_item.innerText = 'Result info';
        break;
        default:
            console.log('init');
        break;
    }
}

function makeAside(){
    const aside_title = aside.querySelector('.aside');
    aside_title.innerText = 'Remark';
}

/**********************************************************
* Runnables
**********************************************************/
scriptRunnable();
