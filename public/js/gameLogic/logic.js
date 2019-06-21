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