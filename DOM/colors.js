
var button = document.querySelector("button");
var clickColor = "purple";
var bod = document.querySelector("body");

button.addEventListener("click", changeColor);

function changeColor(){
	if(clickColor == "white"){
		clickColor = "purple";
		bod.style.background = clickColor;
	}
	else if(clickColor == "purple"){
		clickColor = "white";
		bod.style.background = clickColor;
	}
	 
}