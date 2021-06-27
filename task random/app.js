var alphacapital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
];
var divFalling = document.querySelectorAll(".div__falling");
var innerSpan = document.querySelectorAll(".div__falling span");

var alphabetCharacter;
var alphabet;

function characterCode(event) {
  alphabetCharacter = String.fromCharCode(event.charCode);
  clearInterval(hasToBeClear);

  if (alphabet === alphabetCharacter) {
    innerSpan[coloumntobeshown].style.cssText = "transition:none;bottom:100%;";
    hasToBeClear = setInterval(mainFunc, 3000);
    randomNumberFunction();

  } else if (coloumntobeshown < 10) {
    innerSpan[coloumntobeshown].style.cssText ="transition:none;bottom:0px;color:red;";
    coloumntobeshown++;
    randomNumberFunction();
    hasToBeClear = setInterval(mainFunc, 3000);
  }
}

var coloumntobeshown = 0;

function randomNumberFunction() {
  var randomNumber = Math.floor(Math.random() * alphacapital.length);
  alphabet = alphacapital[randomNumber].toLowerCase();

  if (coloumntobeshown < 10) {
    innerSpan[coloumntobeshown].innerHTML = alphabet;
    setTimeout(function () {
      innerSpan[coloumntobeshown].style.cssText = "bottom:0px;transition:bottom 3s linear;";
    }, 20);
  }
}
randomNumberFunction();

var mainFunc = function () {
  if (coloumntobeshown > 9) {
    clearInterval(hasToBeClear);
  }
    if (alphabet !== alphabetCharacter) {
      innerSpan[coloumntobeshown].style.bottom = "0px";
      innerSpan[coloumntobeshown].style.color = "red";

      coloumntobeshown++;
      randomNumberFunction();
      alphabetCharacter = undefined;
    }
};

var hasToBeClear = setInterval(mainFunc, 3000);
