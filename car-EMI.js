function calculateEMI(principal,annual,tenure)
{
    let P = principal;
    let R = annual/(12*100);
    let N= tenure*12;
    let numerator= P*R*Math.pow(1+R,N);
    let denominator = Math.pow(1+R,N)-1;
    let EMI= numerator/denominator;
    return EMI;
}
let result = calculateEMI(500000,10,5);
console.log("EMI:",result);

