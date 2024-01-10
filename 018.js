// let n = Number.parseInt(prompt("Enter the number of terms you want in the series : "))
let n=7;
let a = 0, b = 1,next;
for (let i = 1; i <= n; i++) {
    console.log(a);
    next = a + b;
    a = b;
    b = next;
}
