var keys = ['1', '2', '3','4', '5', '6', '7', '8', '9', '0', '-', '=',
'Q', 'W','E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'',
'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.','/'];

var running = false;

var active = [];
var remainingLives = 3;
var game;

var score = 0;


document.getElementById('game over').hidden = true;
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
        document.getElementById('game over').hidden = true;
        var startButton = document.getElementById('start');
        startButton.className = "btn btn-outline-danger";
        startButton.innerHTML = "Stop";
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
function GameOver(){
    displayScore();
}
function displayScore(){   
    var scoreHtml = document.getElementById('score');
    scoreHtml.innerHTML = 'Score: ' + score;
}
function removeLife(){

    document.getElementById('life'+remainingLives).hidden = true;
    remainingLives--;
    if(remainingLives == 0){    
        var startButton = document.getElementById('start');
        startButton.className = "btn btn-outline-warning";
        startButton.innerHTML = "Reset";
        document.getElementById('game over').hidden = false;
    }
  //  var lives = document.getElementById('livesAmount');
   // lives.innerHTML = remainingLives;

    active.length = 0;
  
    clearKeys();
}
function resetGame(){
    document.getElementById('game over').hidden = true;
    document.getElementById('life1').hidden = false;
    document.getElementById('life2').hidden = false;
    document.getElementById('life3').hidden = false;

    var startButton = document.getElementById('start');
    startButton.className = "btn btn-outline-success";
    startButton.innerHTML = "Start";
    running = false;
    active.length = 0;
    remainingLives = 3;
    clearKeys();
    GameOver();
}

function checkAlive(){
    if(remainingLives > 0){
        return true;
    }else{
        return false;
    }
}

function checkActive(){
    if(active.length < 3){
        return true;
    }else{
        
        return false;
    }
}

function getDifficulty(){
    var message = document.getElementById('message');
    message.innerHTML = "Game speed: Keys per " + document.getElementById('seconds').value/1000 + " seconds";
}

function keyStuff(event) {

    var x = event.charCode || event.keyCode;  // Get the Unicode value
    var y = String.fromCharCode(x);  // Convert the value into a character

    /*  The above 2 lines of code come from:
    http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_charcode4 */
    confirmKeyMatch(y);
}

function confirmKeyMatch(y){ 

    if(active.includes(y.toUpperCase())){


         for( var i = active.length-1; i--;){
            if ( active[i] === y.toUpperCase()){
                active.splice(i, 1);
                
            } 
        }

         active.length - 1;
         var button = document.getElementById(y.toUpperCase());

         button.style.backgroundColor = '#32CD32';
         button.style.borderColor = "#32CD32";
         button.style.boxShadow = "0 0 10px #32CD32";
         setTimeout(function(){
            button.style.backgroundColor = 'transparent';
            button.style.borderColor = "#707070";
            button.style.boxShadow = "0 0 0px #FF0000";
        },1000);
                
         score++;
         displayScore();
    }else if(checkAlive()){
        removeLife();
    }else{
        //resetGame();
    }

}

function getRandomKey(){
    var currentKey = keys[Math.floor(Math.random()*keys.length)];
    active.push(currentKey);
    LightUpKey(currentKey);
    

}

function LightUpKey(currentKey){
    var button = document.getElementById(currentKey);
    button.style.backgroundColor = "#FF0000";
    button.style.borderColor = "#FF0000";
    button.style.boxShadow = "0 0 10px #FF0000";
}

function clearKeys(){
    keys.forEach(key => {
        var button = document.getElementById(key);
        button.style.backgroundColor = 'transparent';
        button.style.borderColor = "#707070";
        button.style.boxShadow = "0 0 0px #FF0000";
    });
}

