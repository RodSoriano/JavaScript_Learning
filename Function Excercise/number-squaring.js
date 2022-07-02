//compute the square of the number to get more familiar with 
//Simple functions (Named functions) and arrow functions (Without name)
//Complete the below program in which the square1() will use the simple function and
// square2() use the arrow functions.

// Square the given number x using simple function
function square1(x) {
    return x * x;
  }
  
  // Square the given number x using arrow function
  const square2 = x => x * x;


console.log(square2(5));


// Square the given number x
function square(x) {
  return x*x;
}
// Call the above function repeatedly to print square of every number
// between 0 and 10
for(let i = 1; i < 10; i++)
{console.log(square(i));}