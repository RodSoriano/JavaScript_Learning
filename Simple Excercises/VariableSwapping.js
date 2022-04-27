//swap variables

let number10 = 5;
let number20 = 3;

number20 = 5;
number10 = 3;


console.log(number10); // Should show 3
console.log(number20); // Should show 5

//another solution

let number1 = 5;
let number2 = 3;

let temp = number1;
number1 = number2;
number2 = temp;

console.log(number1); // Should show 3
console.log(number2); // Should show 5