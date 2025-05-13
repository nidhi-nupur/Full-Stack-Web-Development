// ________________________________________________
// ADDING THE CLICKING PROPERTY TO ONE OF THE BUTTON.
/* function handleClick() {
    alert("I got clicked!");
}
document.querySelector("button").addEventListener("click", handleClick); */ // Not calling the handleClick() method.. instead just passing the method name. This insures that the button will run the function only when the button is clicked. 

// OR

/* document.querySelector("button").addEventListener("click", function () {
    alert("I got clicked!");
}); */



// _________________________________________________
// ADDING THE CLICKING PROPERTY TO ALL OF THE BUTTON.

/* 
document.querySelectorAll("button")[0].addEventListener("click", function () {
    alert("I got clicked!");
});
document.querySelectorAll("button")[1].addEventListener("click", function () {
    alert("I got clicked!");
});
document.querySelectorAll("button")[2].addEventListener("click", function () {
    alert("I got clicked!");
});
document.querySelectorAll("button")[3].addEventListener("click", function () {
    alert("I got clicked!");
});
document.querySelectorAll("button")[4].addEventListener("click", function () {
    alert("I got clicked!");
});
document.querySelectorAll("button")[5].addEventListener("click", function () {
    alert("I got clicked!");
});
document.querySelectorAll("button")[6].addEventListener("click", function () {
    alert("I got clicked!");
});
 */

// OR


// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        /* switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio('./sounds/tom-1.mp3');
                return tom1.play();
            break;
        
            case "a":
                var tom2 = new Audio('./sounds/tom-2.mp3');
                return tom2.play();
            break;
        
            case "s":
                var tom3 = new Audio('./sounds/tom-3.mp3');
                return tom3.play();
            break;

            case "d":
                var tom4 = new Audio('./sounds/tom-4.mp3');
                return tom4.play();
            break;
        
            case "j":
                var crash = new Audio('./sounds/crash.mp3');
                return crash.play();
            break;
        
            case "k":
                var kickBass = new Audio('./sounds/kick-bass.mp3');
                return kickBass.play();
            break;
        
            case "l":
                var snare = new Audio('./sounds/snare.mp3');
                return snare.play();
            break;
        
            default: console.log(buttonInnerHTML);
        } */
    });
}



// KEYBOARD KEYPRESS 
/* document.addEventListener("keypress", function() {
    alert("Key is pressed!!");
}); */


// Detecting Keyboard Press
document.addEventListener("keypress", function(event) {
    makeSound(event.key);  // Tells which kwyboard key is pressed.

    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            return tom1.play();
        break;
    
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            return tom2.play();
        break;
    
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            return tom3.play();
        break;

        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            return tom4.play();
        break;
    
        case "j":
            var crash = new Audio('./sounds/crash.mp3');
            return crash.play();
        break;
    
        case "k":
            var kickBass = new Audio('./sounds/kick-bass.mp3');
            return kickBass.play();
        break;
    
        case "l":
            var snare = new Audio('./sounds/snare.mp3');
            return snare.play();
        break;
    
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}















/* 


// This code turns your keyboard and drum buttons on a webpage into an interactive drum kit — hit a button or key like "w", "a", "s", etc., and a specific drum sound plays.
// Detecting Button Press

// When clicked, it grabs the inner text (like w, a, s, etc.) of the button and sends it to the makeSound() function.
var numberOfDrumButtons = document.querySelectorAll(".drum").length; 
for(var i = 0; i < numberOfDrumButtons; i++) { 
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {  
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}


// Detecting Keyboard Press

document.addEventListener("keypress", function(event) {  // Listens for any keypress on the keyboard. // Sends the pressed key to the makeSound() function.
    makeSound(event.key); 
});

// Checks which key was pressed or clicked. // Plays the corresponding drum sound using JavaScript's Audio object.
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            return tom1.play();
        break;
    
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            return tom2.play();
        break;
    
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            return tom3.play();
        break;

        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            return tom4.play();
        break;
    
        case "j":
            var crash = new Audio('./sounds/crash.mp3');
            return crash.play();
        break;
    
        case "k":
            var kickBass = new Audio('./sounds/kick-bass.mp3');
            return kickBass.play();
        break;
    
        case "l":
            var snare = new Audio('./sounds/snare.mp3');
            return snare.play();
        break;
    
        default: console.log(buttonInnerHTML);
    }
} */



