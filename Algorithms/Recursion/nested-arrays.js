//write a function that sums all numbers in the array
//the array can contain numbers and arrays only

//base case is when we add a number not an array

let arr = [1, 2, [3], [4, [5]]]; //total = 16

function nestedAdd(arr)
    {
        let sum = 0;
        let len = arr.length;

        for(let i = 0; i < len; i++)
            {
                const current = arr[i];

                if(Array.isArray(current)) // base case != array
                    {
                        sum += nestedAdd(current); //here we call the function back to the for loop basicaly(need some research?)
                    }
                else
                    {
                        sum += current;
                    }
            }

        return sum;
    }

console.log(nestedAdd(arr));
