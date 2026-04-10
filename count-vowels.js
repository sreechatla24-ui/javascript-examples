const str = "Automation";
const vowels="aeiouAEIOU";
let count = 0;
for(const char of str )
{
    if(vowels.includes(char))
        count++;
}
console.log("Number of vowels in the string:",count);
