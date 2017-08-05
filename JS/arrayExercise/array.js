var intArray = [1, 2, 3, 4];
var uniform = [1, 1, 1, 1];
var sumNum = [1,2,3];
var maxArray = [14, 18, 21, 22];

var input = prompt("Which function would you like to run?");

while(input !== "quit"){

    if(input == 1){
        printReverse();
    }
    else if(input == 2){
        console.log("Is the array uniform: " + isUniform(uniform));
    }
    else if(input == 3){
        //console.log(sumArray(sumNum));
        console.log("Sum of the array = " + sumArray(sumNum));
    }
    else if(input == 4){
        console.log("Max of the array = " + max(maxArray) );
    }
    // ask for input again
    input = prompt("Which function would you like to run?");
}

function printReverse(){
    var reverseIntArray = intArray.slice();
    reverseIntArray.reverse();
    console.log("Your array has been reversed : " + reverseIntArray);
}

function isUniform(array){
    if(!array.length) return true;
    return array.reduce(function(a, b){return (a===b)?a:(!b);}) === array[0];
}

function sumArray(array){
   var s = 0;
   for(var i = 0; i < array.length; i++){
       s = s + array[i];
   }
    return s;

}

function max(array){
    return Math.max.apply(null, array);
}


