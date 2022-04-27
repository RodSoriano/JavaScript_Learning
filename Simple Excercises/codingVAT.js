// Write a program that asks the user for a raw price. 
// After that, it calculates the corresponding final price using a VAT rate of 20.6
// VAT is Value Added Tax, basicaly the tax added to each ithem purchase

const rawPrice0 = Number(prompt("Enter Raw Price:"));
let calcVAT = (rawPrice * 20.6) / 100;
let finalPrice0 = rawPrice + calcVAT;

console.log(`Final Price: ${finalPrice0}`);

//another solution

const rawPrice = Number(prompt("Enter the raw price:"));
// VAT rate = 20.6%
const vatRate = 20.6 / 100;
const finalPrice = rawPrice * (1 + vatRate);
console.log(`The final price is ${finalPrice}`);