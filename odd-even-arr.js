let even=[];
let odd=[];
for(let i=0;i<100;i++)
{
    if(i%2 == 0)
    {
        even.push(i);
    }
    else
    {
        odd.push(i);
    }
  
}
console.log("total even numbers:",even.length);
console.log("List of even numbers",even);
console.log("list of total odd numers",odd.length);
console.log ("list of odd numbers",odd);