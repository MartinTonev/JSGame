function blindMode(){
    startButtonState('start');   
    document.getElementById("keyRows").innerHTML = "";
    var numberRowkeys = ['1', '2', '3','4', '5', '6', '7', '8', '9', '0', '-', '='];
    var topRowkeys = ['Q', 'W','E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'];
    var midRowkeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\''];
    var bottomRowkeys = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.','/'];
    var keys = [numberRowkeys,topRowkeys,midRowkeys,bottomRowkeys];
    keys.forEach(row => {
        var rowHtml = document.createElement('div');
        rowHtml.className = 'row justify-content-center';
        row.forEach(keys => {
            var keysHtml = document.createElement('div');
            keysHtml.className = 'col-auto';
            var key = document.createElement('a');
            key.id = keys;
            key.className = 'btn btn-outline-secondary';
            key.innerHTML = " ";
            key.style.height = "28.5pt";
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