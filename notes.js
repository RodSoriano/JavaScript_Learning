
//  VARIABLES

// Declaring a variable
//we use let, const, var

let a;
console.log(a);

// Assign values we declare it first and then we give its value to it 

a = 3.14;
console.log(a);

//  Declaring a constant

const aa = 3.14; // The value of a cannot be modified
aa = 6.28;       // Impossible!

// Increment a number variable

let b = 0;      // b contains 0
b += 1;         // b contains 1
b++;            // b contains 2
console.log(b); // Shows 2

//  When we use const and let this variables will be blocked-scoped their visibility will be limited to the block they are declared in

let num1 = 0;
{
  num1 = 1; // OK : num1 is declared in the parent block
  const num2 = 0;
}
console.log(num1); // OK : num1 is declared in the current block
console.log(num2); // Error! num2 is not visible here


//  EXPRESSIONS 
// An expression is an algorithm that produces a value

// 3 is an expression whose value is 3
const c = 3;
// c is an expression whose value is the value of c (3 here)
let d = c;
// (d + 1) is an expression whose value is d's + 1 (4 here)
d = d + 1; // d now contains the value 4
console.log(d); // Show 4


// It is possible to include expressions in a string by using backticks (`) to delimit the string. 
// Such a string is called a template literal. Inside a template literal, expressions are identified by the ${expression} syntax.
// This is often used to create strings containing the values of some variables.

const country = "France";
console.log(`I live in ${country}`); // Show "I live in France"
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`); // Show "3 + 7 = 10"

// Sometimes conversions dont go as espected due to stdin being a non numeric character it gives the error NaN (Not a number)

//  CONVERSION

//JS it means that the output will change because there was an operation intended without the programmer has to do anything like when we use the + operator into a string

const f = 100;
// Show "Variable f contains the value 100"
console.log("Variable f contains the value " + f);

//  CONDITIONS

//if its a condition that evaluates something as true,if false skips if block
const number0 = Number(prompt("Enter a number:"));
if (number0 > 0) {
  console.log(`${number0} is positive`);
}
else {
  console.log(`${number0} is negative or zero`);
}

//  SWITCH
//When a program should trigger a block from several operations depending on the value of an expression, 
//you can write it using the JavaScript statement switch to do the same thing.

switch (expression) {
  case value1:
    // Code to run when the expression matches value1
    break;
  case value2:
    // Code to run when the expression matches value2
    break;
  // ...
  default:
  // Code to run when neither case matches
}

//  COMPARISON OPERATORS

//its better to use === in js like !== instead of == and !=

// === | > | < | >= | <=


//  LOGICAL OPERATORS

// AND = &&         checks that both conditions are cumplidas to be true
//OR = ||           cheks that at least one of the conditions are meet to be true
//NOT = !           this is when we dont want something to be true
//logical nullish assignment ??= 
//                  In the below expression, y assigns to x only if x is null or undefined.


console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

console.log(!true);  // false
console.log(!false); // true

x ??= y;

















//  METHODS
//not sure if correct that all functions over here are methods but
// I will keep them here until I learn more and know exactly what they are


Number("string");         //this will convert the string into a number

const h = "5";
console.log(h + 1); // Concatenation: show the string "51"
const i = Number("5");
console.log(i + 1); // Numerical addition: show the number 6










Boolean(string);          //It can convert both Number and String into boolean and vice versa. 
                          //Lets run the below code to see how it works.

const string = 'string';
let boolstring=Boolean(string); // true
console.log(boolstring);

const number = 100;
let boolnumber=Boolean(number); // true
console.log(boolnumber);










prompt(text,defaultText);       //text una cadena que se muestra al usuario, OOP Window soli a user que ingrese soemthing, this will always return a string so it must be converted with number() if needed
                                //aqui intercambiamos info con el user asking them to enter a value that will be saved into the variable that has prompt in it

const name = prompt("Enter your first name:");
alert(`Hello, ${name}`);        //alert nos muestra algo en la window asi como prompt 









