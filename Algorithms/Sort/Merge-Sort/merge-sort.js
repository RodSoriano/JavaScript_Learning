//write a function that performs mergeSort
//it will take an array of numbers and return a sorted array

//you'll need to write more than one function

let nums = [10,9,8,7,6,5,4,3,2,1];

const mergeSort = (nums) =>
    {
        //best case
        if(nums.length < 2)
            {
                return nums;
            }

        //break into two smaller arrats
        const length = nums.length;
        const middle = Math.floor(length / 2);
        const left = nums.slice(0, middle);
        const right = nums.slice(middle);

        //call mergeSort on left and right
        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(right);

        return merge(sortedLeft,sortedRight);
    };

const merge = (sortedLeft, sortedRight) =>
    {
        const results = [];

        while(sortedLeft.length && sortedRight.length)
            {
                if(sortedLeft[0] <= sortedRight[0])
                    {
                        results.push(sortedLeft.shift()); //this will take the first element on left and push it to the end of var results;
                    }
                else
                    {
                        results.push(sortedRight.shift());
                    }
            }

        return results.concat(sortedLeft, sortedRight);
    }

console.log(mergeSort(nums));