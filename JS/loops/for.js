console.log("Print All Numbers Between -10 AND 19");
for(var num = -10; num < 20; num++){
    console.log(num);
}

console.log("Print All even Numbers Between 10 AND 40");
for(var evenNum = 10; evenNum <= 40; evenNum += 2){
    console.log(evenNum);
}

console.log("Print All Odd Numbers Between 300 AND 333");
for(var oddNum = 300; oddNum <= 333; oddNum++){
    if(oddNum % 2 != 0){
        console.log(oddNum);
    }
}

console.log("Print All Numbers divisible by 5 AND 3 BETWEEN 5 and 50");
for(var divBy3And5 = 5; divBy3And5 <= 50; divBy3And5++){
    if(divBy3And5 % 3 === 0 && divBy3And5 % 5 === 0){
        console.log(divBy3And5);
    }
}