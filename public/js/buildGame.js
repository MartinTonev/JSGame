var numberRowkeys = ['1', '2', '3','4', '5', '6', '7', '8', '9', '0', '-', '='];
var topRowkeys = ['Q', 'W','E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'];
var midRowkeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\''];
var bottomRowkeys = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.','/'];
var keys = [numberRowkeys,topRowkeys,midRowkeys,bottomRowkeys];
var running = false;
var active = [];
var remainingLives = 3;
var game;
var score = 0;


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