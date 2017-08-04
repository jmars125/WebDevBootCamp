var isEven = function(num){
    if(num %2 ===0){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

console.log("Checking if numbers are even for 40, 21, 68. and 333");
isEven(40);
isEven(21);
isEven(68);
isEven(333);

function factorial(num){

    var final = 1;

    while(num >= 1){
        final = final * num;
        num--;
    }
    console.log(final);
}

console.log("Checking for factorial of input number");
factorial(5);


function kebabToSnake(str){
  str =  str.replace(/-/g, "_");
  console.log(str);
}

console.log("Checking if function replaces - with _")
kebabToSnake("Hello-world");
kebabToSnake("dogs-are-awesome");
kebabToSnake("blah");

