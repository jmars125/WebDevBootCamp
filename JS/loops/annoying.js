// var questionPrompt = prompt("Are we there yet?");

// while(questionPrompt !== "yes" && questionPrompt !== "yeah"){
//     var questionPrompt = prompt("Are we there yet?");
// }

// alert("Yay, we finnaly made it!");

var questionPrompt = prompt("Are we there yet?");

while(questionPrompt.indexOf("yes") && questionPrompt.indexOf("yeah")){
    var questionPrompt = prompt("Are we there yet?");
}

alert("Yay, we finnaly made it!");



