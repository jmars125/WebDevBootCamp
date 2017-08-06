var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            // change h1 color to match clicked color
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    });
}

function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    // change each color to match correct color
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomColor(){
    // pick a red from 0 to 255
   var red = Math.floor(Math.random() * 256 );
    // pick a green from 0 to 255
    var green = Math.floor(Math.random() * 256 );
    // pick a blue from 0 to 255
    var blue = Math.floor(Math.random() * 256 );

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function generateRandomColors(num){
    //make an array
    var arr = [];

    // add num random colors to Array
    for(var i = 0; i < num; i++){
        // get random color and push into array
        arr.push(randomColor());
    }

    // return that array
    return arr;
}