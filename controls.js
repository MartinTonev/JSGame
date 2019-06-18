var keys = ['1', '2', '3','4', '5', '6', '7', '8', '9', '0', '-', '=',
'Q', 'W','E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'',
'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.','/'];

var active = 0;
var running = false;

function keyStuff(event) {

    var x = event.charCode || event.keyCode;  // Get the Unicode value
    var y = String.fromCharCode(x);  // Convert the value into a character

    /*  The above 2 lines of code come from:
    http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_charcode4 */
    confirm(y);

}
function start(){ 
    var startButton = document.getElementById('start');
    startButton.className = "btn btn-outline-danger";
    startButton.innerHTML = "Stop";

    var interval = document.getElementById('seconds').value;
    //console.log(interval);
    var remainingLives = 3;
    var lives = document.getElementById('livesAmount');
    lives.innerHTML = remainingLives;

   
    if(running){      
        startButton.className = "btn btn-outline-success";
                startButton.innerHTML = "Start";
        running = false;
        clearKeys();
        clearInterval(game);
        //console.log(running);
    }else{
        running = true;
        var game = setInterval(() =>{
            if(remainingLives > 0 || running){
                getRandomKey();
               // console.log(running);
            }else{
              
                startButton.className = "btn btn-outline-success";
                startButton.innerHTML = "Start";
                running = false;
                clearKeys();
                clearInterval(game);
              //  console.log(running);
            }         
        },interval);
    }

    setInterval(() =>{
        if(active <= 3){

        }else{
            var text = document.getElementById('lives');
            this.backgroundColor = "#FF0000";
            
            text.style.borderColor = "#FF0000";
            text.style.boxShadow = "0 0 10px #FF0000";
            setTimeout(function(){
                this.backgroundColor = "#FFFFFF";
                text.style.borderColor = "#707070";
                text.style.boxShadow = "0 0 0px #FF0000";
            },500);
            remainingLives--;
            lives.innerHTML = remainingLives;
            active = 0;
            clearKeys();
        }
    },100);
}
function confirm(y){
    var button = document.getElementById(y.toUpperCase());
    button.style.backgroundColor = 'transparent';
    button.style.borderColor = "#707070";
    button.style.boxShadow = "0 0 0px #FF0000";
    active--;
}
function getRandomKey(){
    var currentKey = keys[Math.floor(Math.random()*keys.length)];
    LightUpKey(currentKey);
    active++;
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
function getDifficulty(){
    var message = document.getElementById('message');
    message.innerHTML = "Game speed: " + document.getElementById('seconds').value/1000 + " second per key";
}