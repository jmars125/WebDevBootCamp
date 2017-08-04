var num = -10;
var evenNum = 10;
var oddNum = 301;
var divBy3And5 = 6;

console.log("Print All Numbers Between -10 AND 19");
while(num < 20 ){
    console.log(num);
    num++;
}

console.log("Print All even Numbers Between 10 AND 40");
while(evenNum <= 40){
    console.log(evenNum);
    evenNum += 2;
}

console.log("Print All Odd Numbers Between 300 AND 333");
while( oddNum <= 333 ){
    if(oddNum % 2 != 0)
    console.log(oddNum);
    oddNum ++;
}

console.log("Print All Numbers divisible by 5 AND 3 BETWEEN 5 and 50");
while( divBy3And5 <= 50){
    if(divBy3And5 % 3 === 0 && divBy3And5 % 5 === 0){
        console.log(divBy3And5);
    }
    divBy3And5++;
}

