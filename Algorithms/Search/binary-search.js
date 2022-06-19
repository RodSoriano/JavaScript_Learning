//binary search only works if the array is sorted, you keep spliting the array 
//in half if the number you land is < || > so you go to the left or right

let array = [1,2,3,4,5,6,7,8,9];

let id = 8;

function binarySearch0(id, array)
	{
		let middle = Math.floor(array.length/2);
		let len = array.length;

		if(array[middle] === id)
			{
				return array[middle];
			}
		else if(array[middle] > id)
			{
				for(let i = middle; i >= 0; i--)
					{
						if(array[i] === id)
							{
								return array[i];
							}
					}
			}
		else
			{
				for(let i = middle; i < len; i++)
					{
						if(array[i] === id)
							{
								return array[i];
							}
					}
			}
	}

function binarySearch(id, array)
	{
		let min = 0;
		let max = array.length - 1;
		let index;
		let element;

		while(min <= max)
			{
				index = Math.floor((min + max) / 2);
				element = array[index];

				if(element < id)
					{
						min = index + 1;
					}
				else if(element > id)
					{
						max = index - 1;
					}
				else
					{
						return element;
					}
			}
		
		return void 0;
	}
