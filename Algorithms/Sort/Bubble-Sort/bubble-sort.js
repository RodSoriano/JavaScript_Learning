//write a bubble sort
//return sorted array

//bubble sort: works by comparing two adjacent numbers next to each other
//and then swapping their places if the smaller index's value is larget
//than the larger index's. Continue looping through until all values are in ascending order

let nums = [5,4,3,2];

function bubbleSort(nums)
    {
        let swapped = false;

        do
            {
                swapped = false;
                
                for(let i = 0; i < nums.length; i++ )
                    {
                        if(nums[i] > nums[i + 1])
                            {
                                const temp = nums[i];
                                nums[i] = nums[i + 1];
                                nums[i + 1] = temp;
                                swapped = true;
                            }
                    }
            }
        while(swapped);

        return nums;
    }

console.log(bubbleSort(nums));