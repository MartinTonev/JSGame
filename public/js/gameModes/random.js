//Sets up the random keyboard layout
function randomMode(){   
    startButtonState('start');  
    document.getElementById("keyRows").innerHTML = "";

    keys.forEach(row => {
        var rowHtml = document.createElement('div');
        rowHtml.className = 'row justify-content-center';
        var newrow = shuffle(row);
        newrow.forEach(keys => {
            var keysHtml = document.createElement('div');
            keysHtml.className = 'col-auto';
            var key = document.createElement('a');
            key.id = keys;
            key.className = 'btn btn-outline-secondary';
            key.innerHTML = keys;
            key.style.width = "26pt";
            key.style.backgroundColor = "#FFFFA2";
            key.addEventListener('keyup',function(){
                key.style.borderColor = "#000000";
                key.style.boxShadow = "0 0 10px #000000";
            });
    
            keysHtml.style = 'width: 15px; margin: 10px';
            keysHtml.appendChild(key);
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