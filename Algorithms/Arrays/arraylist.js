//we need to make an ArrayList object
//with the following parameters
//length integer = length of the array
//push  = insert an element at the end of the array
//pop   = remove the last item in the array and returns it
//get(index) = return tthe index search item on the array
//delete(index) = removes item from the array and collapses the array
//so there is no empty values or missing indexes
//this is basically what an array does

class ArrayList	
	{
		constructor()
			{
				this.data = {};
				this.length = 0;
			}

		push(value) //add an item to the end of the array
			{
				this.data[this.length] = value;
				this.length++;
			}

		pop() // remove the last item in the array and returns it
			{
				const response = this.data[this.length - 1];
				delete this.data[this.length - 1];
				this.length--;

				return response;
			}

		get(index) //return that item from the array
			{
				return this.data[index];
			}

		delete(index) // removes item from the array and collapses the array
			{
				const response = this.data[index];
				this._collapseTo(index);

				return response;
			}

		_collapseTo(index) //move to the side each element so there is no missing indexes once we delete an item
			{
				for(let i = index; i < this.length; i++)
					{
						this.data[i] = this.data[i + 1];
					}

				delete this.data[this.length -1];
				this.length--;
			}
	}