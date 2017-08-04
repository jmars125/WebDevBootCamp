var age = prompt("What is your age?");

if(age % Math.sqrt(age) === 0){
    console.log("Perfect Square");
}

if (age % 2 != 0) {
  console.log("Your age is odd!");
}

if (age == 21) {
  console.log("Happy 21st Birthday!");
} 

if (age < 0) 
{
  console.log("invalid age entered please refresh the page");
} 

else if (age < 18) {
  console.log("Sorry, You are not old enought to enter the venue");  
} 

else if (age < 21) {
  console.log("You can enter, but cannot drink");
} 

else {
  console.log("Come on in. You can enter and drink!");
}
