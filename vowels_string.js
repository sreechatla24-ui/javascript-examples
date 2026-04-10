


/*let vowels = "aeiouAEIOU";
function containsVowels(str)
{
for(let char in str)
{
    if(vowels.includes(char))
    {
        console.log("includes vowel");
        return;
    }
    else
    {
        console.log("Doesnot include vowel");
       // return;
    }
}
}

console.log(containsVowels("Hema"));*/
function containsVowels(str) {
  let vowels = "aeiou";

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      console.log("includes vowels");
        //return true;
    }
  }
  console.log("doesnot include vowels");
  //return false;
}

console.log(containsVowels("APPLE")); // true
//console.log(containsVowels("rhythm")); // false

