//Write a program that asks for a time under the form of three information (hours, minutes, seconds).
//The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

//not sure about this solution

const hours     = Number(prompt("Enter the hours:"));
const minutes   = Number(prompt("Enter the minutes:"));
const seconds   = Number(prompt("Enter the seconds:"));

if(Number.isInteger(hours) && Number.isInteger(minutes) && Number.isInteger(seconds))
    {
        seconds ++;

        if(seconds >= 60)
            {
                minutes++;
                seconds = 0;

                console.log(`In a second, time will be ${hours} hours, ${minutes} minutes and ${seconds} seconds.`);

                if (minutes >= 60)
                    {
                        hours++;
                        minutes = 0;
                        seconds = 0;

                        console.log(`In a second, time will be ${hours} hours, ${minutes} minutes and ${seconds} seconds.`);
                    }
            }
        else
            {
                console.log(`In a second, time will be ${hours} hours, ${minutes} minutes and ${seconds} seconds.`);
            }
    }
else
    {
        console.log("Incorrect input, time must be a number.");
    }

//another solution might be

// We start by testing errors cases
if (
        hours >= 0 &&
        hours <= 23 &&
        minutes >= 0 &&
        seconds >= 0 &&
        seconds <= 59
   )
    {
        seconds++; // Incrementing the seconds
        
        if (seconds === 60)
            {
                // Next minute: seconds are reset to 0
                seconds = 0;
                minutes <= 59 &&
                minutes++;
                if (minutes === 60)
                    {
                        // Next hour: minutes are reset to 0
                        minutes = 0;
                        hours++;
                        if (hours === 24)
                            {
                                // Next second is midnight
                                hours = 0;
                            }
                    }
            }

        console.log(`In a second, time will be ${hours} hours, ${minutes} minutes and ${seconds} seconds.`);
     }
else
    {
        console.log("Incorrect input!");
    }