//Sets up the blind keyboard layout
function blindMode(){
    startButtonState('start');   
    document.getElementById("keyRows").innerHTML = "";
    var keys = getKeys();
    keys.forEach(row => {
        var rowHtml = document.createElement('div');
        rowHtml.className = 'row justify-content-center';
        row.forEach(key => {
            var keysHtml = document.createElement('div');
            keysHtml.className = 'col-auto';
            var button = document.createElement('a');
            button.id = key;
            button.className = 'btn btn-outline-secondary';
            button.innerHTML = " ";
            button.style.height = "28.5pt";
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