// Write a program that asks for a temperature in degrees celsius
// then displays it on the Fahrenheit scale.
//The conversion between scales is given by the formula: [°F] = ([°C] x 9/5) + 32.

const celcius = Number(prompt("Enter Temp in Celcius:"));
let conver = ((celcius) * 9/5) + 32;

console.log(`Temp in Farhenheit: ${conver}`);