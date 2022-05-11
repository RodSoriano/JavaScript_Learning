//Write a program that accepts a month number (between 111 and 121212), 
//then show the number of days of that month. 
//Leap years are excluded. Incorrect inputs must be taken into account.

const month = Number(prompt("Enter month number:"));

switch (month)
    {
        case 1:
            console.log("Number of days: 31");
        break;

        case 2:
            console.log("Number of days: 28");
        break;

        case 3:
            console.log("Number of days: 31");
        break;

        case 4:
            console.log("Number of days: 30");
        break;

        case 5:
            console.log("Number of days: 31");
        break;

        case 6:
            console.log("Number of days: 30");
        break;

        case 7:
            console.log("Number of days: 31");
        break;

        case 8:
            console.log("Number of days: 31");
        break;

        case 9:
            console.log("Number of days: 30");
        break;

        case 10:
            console.log("Number of days: 31");
        break;

        case 11:
            console.log("Number of days: 30");
        break;

        case 12:
            console.log("Number of days: 31");
        break;

        default:
            console.log("Please enter a number from 1 to 12.");
        break;
    }

//another solutions

const month1 = Number(prompt("Enter a month number:"));

// Solution using if
if 
  (
    month1 === 1 ||
    month1 === 3 ||
    month1 === 5 ||
    month1 === 7 ||
    month1 === 8 ||
    month1 === 10 ||
    month1 === 12
  )
  {
    alert("This month has 31 days");
  }
else if (month1 === 4 || month1 === 6 || month1 === 9 || month1 === 11)
  {
    alert("This month has 30 days");
  }
else if (month1 === 2)
  {
    alert("This month has 28 days");
  }
else
  {
    alert("Unknown month!");
  }

/* Solution using a switch.
Notice the volontary absence of break statements for months having the same number of days
This limits code duplication in cases
*/
/*switch (month)
  {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert("This month has 31 days");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert("This month has 30 days");
      break;
    case 2:
      alert("This month has 28 days");
      break;
    default:
      alert("Unknown month!");
  }*/

// Solution using if and switch
/*if (month >= 1 && month <= 12)
{
  let nbdays = 31;

  switch (month)
  {
    case 4:
    case 6:
    case 9:
    case 11:
      nbdays = 30;
    break;
    case 2:
      nbdays = 28;
    break;
  }
  alert(`This month has ${nbdays} days`);
}
else
  {
    alert("Unknown month!");
  }*/