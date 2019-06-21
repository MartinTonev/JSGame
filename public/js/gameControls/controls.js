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

