//All variables needed are initialised here

var running = false;
var active = [];
var remainingLives = 3;
var game;
var score = 0;

//runs the game, if the game is already running stops it 
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
