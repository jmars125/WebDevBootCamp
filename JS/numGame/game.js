// create secret number

// with rand numbers
// var secretNumber = Math.floor(Math.random() * 20);

var secretNumber = 5;

// ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

// check if guess is right
if(guess === secretNumber){
    alert("Correct Number");
}

// check if guess is too high
else if(guess > secretNumber){
    alert("Too high. Guess Again!");
}

// check if guess is too low
else{
    alert("too Low. Guess Again!");
}