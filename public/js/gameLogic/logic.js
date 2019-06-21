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