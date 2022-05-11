//Write a program that asks for a time under the form of three information (hours, minutes, seconds).
//The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

//still working

const hours     = Number(prompt("Enter the hours:"));
const minutes   = Number(prompt("Enter the minutes:"));
const seconds   = Number(prompt("Enter the seconds:"));

if(Number.isInteger(hours) && Number.isInteger(minutes) && Number.isInteger(seconds))
    {
        if(seconds > 60)
            {
                minutes++;
                seconds = 0;
            }
        else if (minutes > 60)
            {
                hours++;
                minutes = 0;
                seconds = 0;
            }
    }
else
    {
        console.log("Incorrect input, time must be a number.");
    }