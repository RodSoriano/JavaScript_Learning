// Return true if the given string is a palindrome. Otherwise, return false
// Remove all non alphanumeric characters and compare.

function palindrome(str)
{
  str = str.replace(/[ _,.():/]/g, "");
  str = str.replace(/[-]/g, "");
  str = str.toLowerCase();
  let len = str.length;
  let half = Math.floor(len/2);
  let checkPalindrome = true;

  if(len % 2 !== 0)
    {
      for(let i = 0, j = len - 1; i < half, j > half; i++, j--)
        {
          if(str[i] !== str[j])
            {
              checkPalindrome = false;
            }
        }
    }
  else
    {
      for(let i = 0, j = len - 1; i <= half, j >= half; i++, j--)
        {
          if(str[i] !== str[j])
            {
              checkPalindrome = false;
            }
        }
    }

  return checkPalindrome;
}

palindrome("0_0 (: /-\ :) 0-0");