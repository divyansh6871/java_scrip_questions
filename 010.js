let a=Number.parseInt(prompt("Enter the coefficient of x to the power 2 : "))
let b=Number.parseInt(prompt("Enter the coefficient of x to the power 1 : "))
let c=Number.parseInt(prompt("Enter the coefficient of x to the power 0 : "))
let d=b*b-4*a*c;
console.log("root 1=",(-b+Math.sqrt(d))/2*a);
console.log("root 2=",(-b-Math.sqrt(d))/2*a);
