//this algorithm works by comparing the ones, tens, hundres, thousands on each loop
//first sort the items that are within the unit of a number then tens, and so on

let array = [10,11,15,5,4,22,2,1];

function getDigit(number, place, longestNumber)
	{
		const string = number.toString();
		const size = string.length;

		const mod = longestNumber - size;
		return string[place - mod] || 0;
	}

function getLongestNumber(array)
	{
		let longest = 0;

		for(let i = 0; i < array.length; i++)
			{		//for loop for each bucket
				//dequeue all of the items out of the bucket
				const currentLength = array[i].toString().length;
				
				longest = currentLength > longest ? currentLength: longest;
			}

		return longest;
	}

function radixSort(array)
	{
		//find longest number
		const longestNumber = getLongestNumber(array);

		//create how many buckets you need
		//an array of 10 empty arrays
		const buckets = new Array(10).fill().map(() => []);

		//for loop for how many iterations you need to do
		//while loop
		//enqueue the numbers into their buckets
		for(let i = longestNumber - 1; i >= 0; i--)
			{
				while(array.length)
					{
						const current = array.shift();
						buckets[getDigit(current, i, longestNumber)].push(current);
					}
				
				for(let j = 0; j < 10; j++)
					{
						while(buckets[j].length)
							{
								array.push(buckets[j].shift());
							}
					}
			}

		return array;
	}

console.log(radixSort(array));