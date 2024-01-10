let y = Number.parseInt(prompt("Enter the starting number : "));
let z = Number.parseInt(prompt("Enter the ending number : "));

for (let n = y; n <= z; n++) {
    var p = 0, sum = 0;
    let a = n, b = n;
    while (a > 0) {
        p++;
        a = Number.parseInt(a / 10);
    }
    while (b > 0) {
        let rem = b % 10;
        let toadd = 1
        for (let i = 1; i <= p; i++)
            toadd = toadd * rem;
        sum += toadd;
        b = Number.parseInt(b / 10);
    }
    if (sum == n)
        console.log(n+" is Armstrong Number.")
    else
        console.log(n+" is not an Armstrong number.")
}