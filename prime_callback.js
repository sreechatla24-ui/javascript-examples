function check_prime(num,callback)
{
    let n = num;
    if(n==1|| n==0)
        callback("notprime");
    
  for(let i=2;i<=n/2;++i)
         {
            if(n%i==0)
            callback("notprime");
            
         else 
            callback("prime");
        return;
         }
}
check_prime(11,prime);
function prime(value)
{
    console.log("Number is:",value);
}
 