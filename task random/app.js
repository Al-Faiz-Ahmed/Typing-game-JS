var alphacapital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var divFalling = document.querySelectorAll('.div__falling');
var innerSpan = document.querySelectorAll('.div__falling span');



function randomFalling() {
    setInterval(function () {

        var randomNumber = Math.floor(Math.random() * 26);
        var alphabet = alphacapital[randomNumber].toLowerCase()

        var randomContainerNum = Math.floor(Math.random() * 5)

        for (var i = 0; i < divFalling.length; i++) {

            if (randomContainerNum === i) {
                for (var j = 0; j < innerSpan.length; j++) {
                    innerSpan[j].innerHTML = ''
                    
                }
                innerSpan[i].innerHTML = alphabet
            }


        }
        }, 1499)
}
randomFalling();
