for (var i = 0; i < 7; ++i) {



    document.getElementsByClassName("drum")[i].addEventListener("click", function() {
        var b = this.innerHTML;
        addAnimation(b);
        switch (b) {
            case 'w':


                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();

                break;
            case 'a':




                var tom2 = new Audio('sounds/tom-2.mp3')
                tom2.play();
                break;
            case 's':




                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play()

                break;



            case 'd':

                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play()

                break;

            case 'j':

                var crash = new Audio('sounds/crash.mp3');
                crash.play()

                break;
            case 'k':

                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play()

                break;
            case 'l':

                var snare = new Audio('sounds/snare.mp3');
                snare.play()

                break;

            default:
                alert("fuck");
        }
    })
}


// document.addEventListener("keydown", event => {
//     logMessage(`Key "${e.key}" pressed [event: keydown]`);
// });


document.addEventListener("keydown", function(keydown) {

    addAnimation(keydown.key);
    switch (keydown.key) {
        case 'w':


            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();

            break;
        case 'a':




            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
        case 's':




            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play()

            break;



        case 'd':

            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play()

            break;

        case 'j':

            var crash = new Audio('sounds/crash.mp3');
            crash.play()

            break;
        case 'k':

            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play()

            break;
        case 'l':

            var snare = new Audio('sounds/snare.mp3');
            snare.play()

            break;

        default:
            alert("fuck");
    }
})

function addAnimation(currentKey) {
    var active = document.querySelector("." + currentKey);
    active.classList.add("pressed");

    setTimeout(function() {
        active.classList.remove("pressed");
    }, 100);

}