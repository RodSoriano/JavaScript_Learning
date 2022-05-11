//Write a program that accepts two numbers, 
//then compares their values and displays an appropriate message in all cases.

const num1 = Number(prompt("Enter first number:"));
const num2 = Number(prompt("Enter second number:"));

if (num1 > num2)
    {
      console.log(`${num1} is greater than ${num2}`);
    }
else if (num1 === num2)
    {
      console.log(`${num1} is equal to ${num2}`);
    }
else
    {
      console.log(`${num2} is greater than ${num1}`);
    }

//another solution

const number1 = Number(prompt("Enter number 1:"));
const number2 = Number(prompt("Enter number 2:"));

if (number1 < number2)
  {
    console.log(`${number1} is less than ${number2}`);
  }
else if (number1 > number2)
  {
    console.log(`${number1} is greater than ${number2}`);
  }
else
  {
    console.log(`${number1} and ${number2} are equal`);
  }