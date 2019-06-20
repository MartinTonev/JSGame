var keys = ['1', '2', '3','4', '5', '6', '7', '8', '9', '0', '-', '=',
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
        runGameLoop(interval,false);
    }else{
        runGameLoop(interval,true);
    }
}
function runGameLoop(interval,run){
    if(run){
        var startButton = document.getElementById('start');
        startButton.className = "btn btn-outline-danger";
        startButton.innerHTML = "Stop";
        running = true;
        game = setInterval(() =>{   
            //console.log(active);
            if(checkActive() && checkAlive()){
                getRandomKey();
            }else if(checkAlive()){
                removeLife();
            }else{

                resetGame();
                clearInterval(game);
            }
            
        },interval);  

    }else{
       
        running = false;
   
        clearInterval(game);
        resetGame();
    }
}
function GameOver(){
    displayScore();
}
function displayScore(){   
    var scoreHtml = document.getElementById('score');
    scoreHtml.innerHTML = 'Final score: ' + score;
}
function removeLife(){
    var text = document.getElementById('lives');
    this.backgroundColor = "#FF0000";
    
    text.style.borderColor = "#FF0000";
    text.style.boxShadow = "0 0 10px #FF0000";
    setTimeout(function(){
        this.backgroundColor = "#FFFFFF";
        text.style.borderColor = "#707070";
        text.style.boxShadow = "0 0 0px #FF0000";
    },1000);

    remainingLives--;

    var lives = document.getElementById('livesAmount');
    lives.innerHTML = remainingLives;

    active = [];
  
    clearKeys();
}

function resetGame(){
    var startButton = document.getElementById('start');
    startButton.className = "btn btn-outline-success";
    startButton.innerHTML = "Start";
    running = false;
    active = [];
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
    message.innerHTML = "Game speed: " + document.getElementById('seconds').value/1000 + " keys per second";
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
        console.log('it does');

        for( var i = 0; i < active.length; i++){ 
            if ( active[i] === y.toUpperCase()) {
                console.log(y.toUpperCase()); 
                active.splice(i,1);
                var button = document.getElementById(y.toUpperCase());
                button.style.backgroundColor = 'transparent';
                button.style.borderColor = "#707070";
                button.style.boxShadow = "0 0 0px #FF0000";
                       
                score++;
            }
         }
  
    }else if(checkAlive()){
        removeLife();
    }else{
        resetGame();
    }

    //active--;
   
}

function getRandomKey(){
    var currentKey = keys[Math.floor(Math.random()*keys.length)];
    active += currentKey;
    LightUpKey(currentKey);
    
    //console.log(active);
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

