//Checks which button on the keyboard is pressed
function keyStuff(event) {
    var x = event.charCode || event.keyCode;  
    var y = String.fromCharCode(x); 
    confirmKeyMatch(y);
}
//Confirms if the key that was pressed is active and deactivates it or removes a life point
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
//Return an array with keyboard keys 
function getKeys(){
    var numberRowkeys = ['1', '2', '3','4', '5', '6', '7', '8', '9', '0', '-', '='];
    var topRowkeys = ['Q', 'W','E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'];
    var midRowkeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\''];
    var bottomRowkeys = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.','/'];
    var keys = [numberRowkeys,topRowkeys,midRowkeys,bottomRowkeys];
    return keys;
}
//Used to start and stop the game
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
//Removes a life from the playes and resets the current active keys
function removeLife(){
    removeHeart();
    remainingLives--;
    showGameOver();
    active.length = 0;
    clearKeys();
}
//Checks if the player is still alive
function checkAlive(){
    if(remainingLives > 0){
        return true;
    }else{
        return false;
    }
}
//Checks if there are any active keys 
function checkActive(){
    if(active.length < 5){       
        return true;
    }else{
        
        return false;
    }
}
//Returns random keyboard key and lights it up
//if the returned key is active returns a new key
function getRandomKey(){
    var keys = getKeys();
    var qwerty = [];
    keys.forEach(key => {
        key.forEach(element => {
            qwerty.push(element);
        });
    });
    var currentKey = qwerty[Math.floor(Math.random()*qwerty.length)];
    if(!active.includes(currentKey)){
        active.push(currentKey);
        LightUpKey(currentKey);
    }else{
        getRandomKey();
    }
}