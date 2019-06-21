function defaultMode(){
    startButtonState('start');  
    document.getElementById("keyRows").innerHTML = "";

    keys.forEach(row => {
        var rowHtml = document.createElement('div');
        rowHtml.className = 'row justify-content-center';
        row.forEach(keys => {
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
function resetGameVisual(){
    document.getElementById('game over').hidden = true;
    document.getElementById('life1').hidden = false;
    document.getElementById('life2').hidden = false;
    document.getElementById('life3').hidden = false;
    startButtonState('start');
    clearKeys();
    displayScore();
}