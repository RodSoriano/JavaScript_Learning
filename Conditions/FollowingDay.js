//Write a program that accepts a day name from the user in the variable
//then shows the name of the following day
//Incorrect inputs must be taken into account

const userDay = prompt("Enter a day:");

switch (userDay)
    {
        case "Monday":
            console.log("Following day: Tuesday");
        break;

        case "Tuesday":
            console.log("Following day: Wednesday");
        break;

        case "Wednesday":
            console.log("Following day: Thursday");
        break;

                case "Thursday":
            console.log("Following day: Friday");
        break;

                case "Friday":
            console.log("Following day: Saturday");
        break;

                case "Saturday":
            console.log("Following day: Sunday");
        break;

                case "Sunday":
            console.log("Following day: Monday");
        break;

        //not sure of the coding from this point on
                case isNaN(userDay):
            console.log("Numbers are not accepted");
        break;

                default:
            console.log("Please enter a day");
        break;
    }

    //another solution

    const day = prompt("Enter a day of the week:");

    // Solution using an if
    if (day === "monday" || day === "Monday") 
        {
            console.log("Tomorrow is Tuesday");
        } 
    else if (day === "tuesday" || day === "Tuesday") 
        {
            console.log("Tomorrow is Wednesday");
        } 
    else if (day === "wednesday" || day === "Wednesday") 
        {
            console.log("Tomorrow is Thursday");
        } 
    else if (day === "thursday" || day === "Thursday") 
        {
            console.log("Tomorrow is Friday");
        } 
    else if (day === "friday" || day === "Friday") 
        {
            console.log("Tomorrow is Saturday");
        } 
    else if (day === "saturday" || day === "Saturday") 
        {
            console.log("Tomorrow is Sunday");
        } 
    else if (day === "sunday" || day === "Sunday") 
        {
            console.log("Tomorrow is Monday");
        } 
    else 
        {
            console.log("Unrecognized day!");
        }