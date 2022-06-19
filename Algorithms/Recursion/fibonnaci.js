//first we need to set our base case or the fisrt parameters we already know
//in this case fib[0] = 1 && fib[1] = 0

function fib0(n)
    {
        if(n === 2 || n === 1)
            {
                return 1;
            }
        else if(n <= 0)
            {
                return 0;
            }
        
        return fib(n - 2) + fib(n - 1);
    }

//iterative solution

function fibonacci(n)
    {
        const sequence = [0, 1];

        for(let i = 2; i < n + 1; i++)
            {
                sequence.push(sequence[i - 2] + sequence[i - 1]);
            }
        
        return sequence[n];
    }

console.log(fibonacci(3));

//0,1,2,3,4,5,6,7 ->index
//0,1,1,2,3,5,8,13..->array