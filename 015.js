let a = Number.parseInt(prompt("Enter the starting point : "))
let b = Number.parseInt(prompt("Enter the ending point : "))
for (let n = a; n <= b; n++) {
    var flag=0   ;
    if (n < 2)
        console.log("Not a prime number.",n);
    else {
        for (let i = 2; i <= n / 2; i++) {
            if (n % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0)
            console.log("prime Number",n);
        else
            console.log("Not a prime number",n)
    }
}