
var len = document.querySelectorAll(".drum").length;

for( var i = 0; i<len; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonText = this.innerHTML;
        playSoundLogic(buttonText);
        buttonAnimation(buttonText);
    });
}


document.addEventListener("keypress", function(event) {
    playSoundLogic(event.key);
    buttonAnimation(event.key);
});


function playSoundLogic(keyPressed){

    switch (keyPressed) {
            case "w":
                playSound("sounds/crash.mp3");
                break;
            case "a":
                playSound("sounds/tom-1.mp3");
                break;
            case "s":
                playSound("sounds/kick-bass.mp3");
                break;
            case "d":
                playSound("sounds/tom-2.mp3");
                break;
            case "j":
                playSound("sounds/tom-3.mp3"); 
                break;
            case "k":
                playSound("sounds/tom-4.mp3");    
                break;
            case "l":
                playSound("sounds/snare.mp3");    
                break;
            default:
                console.log("No Sound Played");
                break;
        }

}

function buttonAnimation(keyPressed){
    var activeButton = document.querySelector("." + keyPressed);
    activeButton.classList.add("pressed");

    setTimeout( function(){
        activeButton.classList.remove("pressed");
    }, 100 );

}

function playSound(audioFile){
    var audio = new Audio(audioFile);
    audio.play();
}