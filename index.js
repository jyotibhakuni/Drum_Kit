
// detecting button press

var y = document.querySelectorAll(".drum");
var x = document.querySelectorAll(".drum").length;

for (var i = 0; i < x; i++) {
    y[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        soundButton(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//  detecting keyboard press

document.addEventListener("keypress", (event) => {
    soundButton(event.key);
    buttonAnimation(event.key);

});


function soundButton(key) {
    switch (key) {
        case "w":

            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();

            break;
        case "a":

            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();

            break;
        case "s":

            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();

            break;
        case "d":

            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();

            break;
        case "j":

            var snare = new Audio('sounds/snare.mp3');
            snare.play();

            break;

        case "k":

            var crash = new Audio('sounds/crash.mp3');
            crash.play();

            break;
        case "l":

            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();

            break;


        default:
            console.log();
            break;
    }

}


function buttonAnimation(currentKey) {
    var active = document.querySelector("." + currentKey);
    active.classList.add("pressed");

    setTimeout(() => {

        active.classList.remove("pressed");

    }, 100);

}
