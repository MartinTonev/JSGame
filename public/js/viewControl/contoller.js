document.getElementById('game over').hidden = true;

function displayScore(){   
    var scoreHtml = document.getElementById('score');
    scoreHtml.innerHTML = 'Score: ' + score;
}

function removeHeart(){   
    document.getElementById('life' + remainingLives).hidden = true;
    
}
function showGameOver(){
    if(remainingLives == 0){    
        startButtonState('reset');
        document.getElementById('game over').hidden = false;
    }
}
function getDifficulty(){
    var message = document.getElementById('message');
    message.innerHTML = "Game speed: Keys per " + document.getElementById('seconds').value/1000 + " seconds";
}

function LightUpKey(currentKey){
    var button = document.getElementById(currentKey);
    button.style.backgroundColor = "#FF0000";
    button.style.borderColor = "#FF0000";
    button.style.boxShadow = "0 0 10px #FF0000";
}

function LightUpKeySuccess(y){
    var button = document.getElementById(y.toUpperCase());
    button.style.backgroundColor = '#32CD32';
    button.style.borderColor = "#32CD32";
    button.style.boxShadow = "0 0 10px #32CD32";
    setTimeout(function(){
       button.style.backgroundColor = 'transparent';
       button.style.borderColor = "#707070";
       button.style.boxShadow = "0 0 0px #FF0000";
       clearKey(y);
   },1000);
}

function clearKeys(){
    keys.forEach(row => {
        row.forEach(element => {
            var button = document.getElementById(element);
            button.style.height = "28.5pt";
            button.style.width = "26pt";
            button.style.backgroundColor = "#FFFFA2";
            button.style.borderColor = "#707070";
            button.style.boxShadow = "0 0 0px #FF0000";
        });
       
    });
}

function clearKey(key){
    var button = document.getElementById(key.toUpperCase());
    button.style.height = "28.5pt";
    button.style.width = "26pt";
    button.style.backgroundColor = "#FFFFA2";
    button.style.borderColor = "#707070";
    button.style.boxShadow = "0 0 0px #FF0000";

}

function startButtonState(state){
    var startButton = document.getElementById('start');
    switch (state) {
        case 'start':
            startButton.hidden = false;
            startButton.className = "btn btn-outline-success text-white btn-lg";
            startButton.innerHTML = "Start";
            break;
        case 'stop':
            startButton.hidden = false;
            startButton.className = "btn btn-outline-danger text-white btn-lg";
            startButton.innerHTML = "Stop";
            break;
        case 'reset':
            startButton.hidden = false;
            startButton.className = "btn btn-outline-warning text-white btn-lg";
            startButton.innerHTML = "Reset";
            break;
        case 'hidden':
                startButton.hidden = true;
                break;
        default:
            startButton.hidden = false;
            startButton.className = "btn btn-outline-success text-white btn-lg";
            startButton.innerHTML = "Start";
            break;
    }
}

function resetGame(){
    running = false;
    active = [];
    remainingLives = 3;
    resetGameVisual();
}
