//insertion sort

//the idea is that the begining of the list is sorted and everything else is asimed
//to be an unsorted list. The outer loop goes over the whole list, the index signifies where the "sorte" 
//part od the list is. The inner loop goes over the sorted part of the list and
//insert it into the correct position in the array

//on the second loop we take the index we are at and compare it if j > current then we take j to j+1 position


let nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let numberToInsert //9[1];
let i; //9[1]
let j; //10[0]

function insertionSort(nums)
    {
        for(i = 1; i < nums.length; i ++)
            {
                numberToInsert = nums[i];

                for(j= i - 1; nums[j] > numberToInsert && j >= 0; j--)
                    {
                        nums[j + 1] = nums[j];
                    }

                nums[j + 1] = numberToInsert;
            }

        return nums;
    }

console.log(insertionSort(nums));