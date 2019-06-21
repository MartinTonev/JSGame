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