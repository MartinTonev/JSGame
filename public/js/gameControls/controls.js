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

