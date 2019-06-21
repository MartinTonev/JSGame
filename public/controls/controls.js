var qwerty = ['1', '2', '3','4', '5', '6', '7', '8', '9', '0', '-', '=',
'Q', 'W','E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'',
'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.','/'];
var running = false;
var active = [];
var remainingLives = 3;
var game;
var score = 0;

function start(){ 
    var interval = document.getElementById('seconds').value;
    if(running){
        resetGame();
        runGameLoop(interval,false);
    }else{
        resetGame();
        runGameLoop(interval,true);
    }
}

function runGameLoop(interval,run){
    if(run){
        startButtonState('stop');
        running = true;
        score = 0;
        game = setInterval(() =>{             
            if(checkActive() && checkAlive()){
                getRandomKey();
            }else if(checkAlive()){
                removeLife();
            }else{
                clearInterval(game);
            }           
        },interval);  
    }else{     
        running = false;
 
        clearInterval(game);   
    }
}

function removeLife(){
    removeHeart();
    remainingLives--;
    showGameOver();
    active.length = 0;
    clearKeys();
}

function checkAlive(){
    if(remainingLives > 0){
        return true;
    }else{
        return false;
    }
}

function checkActive(){
    if(active.length < 5){       
        return true;
    }else{
        
        return false;
    }
}

function keyStuff(event) {
    var x = event.charCode || event.keyCode;  
    var y = String.fromCharCode(x); 
    confirmKeyMatch(y);
}

function confirmKeyMatch(y){ 
    if(active.includes(y.toUpperCase())){
         active.splice(active.indexOf(y.toUpperCase()), 1);
         active.length - 1;     
         score++;
         LightUpKeySuccess(y);   
         displayScore();
    }else if(checkAlive()){
        removeLife();
    }else{
        
    }

}

function getRandomKey(){
    var currentKey = qwerty[Math.floor(Math.random()*qwerty.length)];
    if(!active.includes(currentKey)){
        active.push(currentKey);
        LightUpKey(currentKey);
    }else{
        getRandomKey();
    }
}