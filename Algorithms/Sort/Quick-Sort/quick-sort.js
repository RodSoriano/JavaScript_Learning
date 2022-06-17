/*quick sort should grab a pivot from the end and then separate the list
(not included the pivot)
into two lists, smaller than the pivot  and larger than the pivot. Call quick sort on
both of them independently. Once those two lists come back sorted , concat the left
or smaller numbers list, the pivot, and the right or larger list and return that

best case is when quick sort is called on a list with length less-than-or-equal to 1.
Just return the array given. */

let nums = [10,8,6,4,7, 9, 3];

function quickSort(nums)
    {
        //base case arr.length = 1 || 0
        if(nums.length <= 1) return nums;

        //choose pivot
        const pivot = nums[nums.length - 1];

        //separate the arrays
        const left = [];
        const right = [];

        for(let i = 0; i < nums.length - 1; i++)
            {
                if(nums[i] < pivot)
                    {
                        left.push(nums[i]);
                    }
                else
                    {
                        right.push(nums[i]);
                    }
            }

        //call quick sort on left and right arrays
        const sortedLeft = quickSort(left);
        const sortedRight = quickSort(right);

        return sortedLeft.concat(pivot, sortedRight);
    }

console.log(quickSort(nums));