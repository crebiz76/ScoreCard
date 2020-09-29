/**********************************************************
* Variables
**********************************************************/
const section = document.querySelector("section");
const article = document.querySelector("article");
const aside = document.querySelector("aside");

var currentMenu;
var menu = document.querySelector(".menu");
/**********************************************************
* Functions
**********************************************************/
function scriptRunnable(){
    menu.addEventListener('click', clickHandler);
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

    const section_title = section.querySelector('.section');

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

function makeArticle(){
    const article_title = article.querySelector('.article');
    article_title.innerText = currentMenu.innerText + ' Register';
}

function makeAside(){
    const aside_title = aside.querySelector('.aside');
    aside_title.innerText = 'Remark';
}

/**********************************************************
* Runnables
**********************************************************/
scriptRunnable();
