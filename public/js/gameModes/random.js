//Sets up the random keyboard layout
function randomMode(){   
    startButtonState('start');  
    document.getElementById("keyRows").innerHTML = "";
    var keys = getKeys();
    keys.forEach(row => {
        var rowHtml = document.createElement('div');
        rowHtml.className = 'row justify-content-center';
        shuffle(row);
        row.forEach(key => {
            var keysHtml = document.createElement('div');
            keysHtml.className = 'col-auto';
            var button = document.createElement('a');
            button.id = key;
            button.className = 'btn btn-outline-secondary';
            button.innerHTML = key;
            button.style.width = "26pt";
            button.style.backgroundColor = "#FFFFA2";
            button.addEventListener('keyup',function(){
                button.style.borderColor = "#000000";
                button.style.boxShadow = "0 0 10px #000000";
            });
    
            keysHtml.style = 'width: 15px; margin: 10px';
            keysHtml.appendChild(button);
            rowHtml.appendChild(keysHtml);
        });
        document.getElementById("keyRows").appendChild(rowHtml);
    });
}


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}