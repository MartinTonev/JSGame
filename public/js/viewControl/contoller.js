document.getElementById('game over').hidden = true;
//Displays the score in HTML 
function displayScore(){   
    var scoreHtml = document.getElementById('score');
    scoreHtml.innerHTML = 'Score: ' + score;
}
//Removes one heart image based on remaining lives
function removeHeart(){   
    document.getElementById('life' + remainingLives).hidden = true;
    
}
//If the player loses all lives displays game over image
function showGameOver(){
    if(remainingLives == 0){    
        startButtonState('reset');
        document.getElementById('game over').hidden = false;
    }
}
//When sliding the seconds slider updates the seconds value
function getDifficulty(){
    var message = document.getElementById('message');
    message.innerHTML = "Game speed: Keys per " + document.getElementById('seconds').value/1000 + " seconds";
}
//Lights up the inputed key making it red aka active
function LightUpKey(currentKey){
    var button = document.getElementById(currentKey);
    button.style.backgroundColor = "#FF0000";
    button.style.borderColor = "#FF0000";
    button.style.boxShadow = "0 0 10px #FF0000";
}
//Lights key upon successful match
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
//Resets the look of all keys
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
//Resets look of specific key
function clearKey(key){
    var button = document.getElementById(key.toUpperCase());
    button.style.height = "28.5pt";
    button.style.width = "26pt";
    button.style.backgroundColor = "#FFFFA2";
    button.style.borderColor = "#707070";
    button.style.boxShadow = "0 0 0px #FF0000";

}
//Changes the look of the start button based on input
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
//Show the game rules modal
function showRules(){
    var modal = document.createElement('div');
    modal.className = "modal";

    var modalContent = document.createElement('div');
    modalContent.className = "modal-content";
    modalContent.style = "margin: auto; margin-top: 90px; width: 70%; padding: 10px;";
    modalContent.innerHTML = "<h1 class='text-center text-warning mb-5'>Rules of the game</h1>"
    modalContent.innerHTML += "<p class='text-center text-secondary'>1: As keys light-up, press the corresponding key</p><br>";
    modalContent.innerHTML += "<p class='text-center text-secondary'>2: Pressing the wrong key makes you lose a life</p><br>"; 
    modalContent.innerHTML += "<p class='text-center text-secondary'>3: A maximum of 5 keys are allowed to be lit up, otherwise you lose a life</p><br>";
    modalContent.innerHTML += "<h1 class='text-center text-warning'>Have fun</h1>"
    modalContent.innerHTML += "<h5 class='text-center text-info'>Press anywhere outside this window to dismiss it</h5>"

    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }

    modal.appendChild(modalContent);
    document.getElementsByClassName("content")[0].appendChild(modal);   
    modal.style.display = "block";  

}
//resets hearts, game over image and keys 
function resetGameVisual(){
    document.getElementById('game over').hidden = true;
    document.getElementById('life1').hidden = false;
    document.getElementById('life2').hidden = false;
    document.getElementById('life3').hidden = false;
    startButtonState('start');
    clearKeys();
    displayScore();
}
//reset the game to default state 
function resetGame(){
    running = false;
    active = [];
    remainingLives = 3;
    resetGameVisual();
}
