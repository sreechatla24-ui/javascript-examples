/*function add(num1,num2,num3)
{
    let result = num1+num2+num3;
    return result;
}
let value = add(12,4,8,7,8,3);
console.log(`Result of  numbers ${value}`);//24 */

/*function add(num1,num2,...num3)
{
    let result = num1+num2+num3[0]+num[1]+num[2]+num[3];
    return result;
}
let value = add(12,4,8,7,8,3);
console.log(value);// showing not defined  */

/*function value(num1,num2)
    {
        let result1 = num1 + num2;
        return result1;
    }
function value(num1,num2)
{
    let result2 = num1 * num2;
    return result2;
}
let x = value(3,4,5);// 12
console.log(x);*/

/*function value(num1,num2){
    
        let result1 = num1 + num2;
        return result1;
    }
function value(num1,num2,...num3)
{
    let result2 = num1 * num2*num3[0]*num3[2];
    return result2;
}
let x = value(3,4,5,2,7);
console.log(x);//420 skipped second position in array*/

function value(num1,num2,...num3)
{
    let result2 = num1 * num2*num3[0]*num3[2];
    return result2;
}
let x = value(3,4);
console.log(x); //NAN
