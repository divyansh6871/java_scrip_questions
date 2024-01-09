// prime number
let n = Number.parseInt(prompt("Enter the number : "));
var flag = 0;
if (n < 2)
console.log("Not a prime number.");
else {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            flag = 1;
            break;
        }
    }
    if(flag==0)
    console.log("prime Number");
else
console.log("Not a prime number")
}