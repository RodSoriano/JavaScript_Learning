//write a factorial function with recursion
// n=1 is the base case
//n * (n-1) * (n-2)... * 3 * 2 * 1

//factorial(1) = 1
//factorial(2) = 2
//factorial(3) = 6

let n = 5;

function factorial(n)
    {
        if(n < 2) return 1;

        return n * factorial(n - 1);
    }

console.log(factorial(n));