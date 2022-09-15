const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter a number: "));

console.log(num);

/*
divisible by 3 -> write fizz
divisible by 5 -> write buzz
divisible by both -> write fizz buzz
*/
if(num % 15 === 0){ //divisible by 3 and 5
    console.log("fizzbuzz");
}

else if (num % 3 === 0){
    console.log("fizz");
}
else if(num % 5 ===0){
    console.log("buzz");
}