//Write a program that asks the user for a number, then show the multiplication table for this number.


function multiplicationTable(number)
    {
        let i = 0;

        for(i = 1; i <= 10; i++)
            {
                console.log(`${number} x ${i} = ${number*i}`);
            }
    }

console.log(multiplicationTable(3));
