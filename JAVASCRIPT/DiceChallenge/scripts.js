var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);


var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSource1 = "images/" + randomDiceImage1; // images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0]; // selecting the First image on the site.
image1.setAttribute("src", randomImageSource1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - images/dice6.png
var image2 = document.querySelectorAll("img")[1]; // selecting the Second image on the site.
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!! [&#8592]";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!! [&#8594]";
} else {
    document.querySelector("h1").innerHTML = "Ohh!! It's a draw.. [&#8596]";
}