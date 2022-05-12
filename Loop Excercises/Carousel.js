//Write a program that launches a carousel for 10 turns, showing the turn number each time.

let carousel;

//for loop
for(carousel = 1; carousel < 11; carousel++)
    {
        console.log(`Turn number: ${carousel}`);
    }
//while loop
while (carousel < 11)
    {
        console.log(`Turn number: ${carousel}`);
        carousel++;
    }

//another solution with the while loop
var i = 1;
while (i <= 10)
    {
    console.log("Turn number: " + i);
    i++;
    }

//another solution with the for loop
for (var i = 1; i <= 10; i++)
    {
        console.log("Turn number: " + i);
    }

//Let’s improve the above code. 
//Now, instead of defining the number of turns, we will take it as input from the user.

const turnCount = Number(prompt("How many turns?"));

// Solution using a for loop
for (let turn = 1; turn <= turnCount; turn++)
    {
    console.log(`This is turn number ${turn}`);
    }

// Solution using a while loop
let turn = 1;
while (turn <= turnCount)
    {
      console.log(`This is turn number ${turn}`);
      turn++;
    } 