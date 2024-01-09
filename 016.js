let n = Number.parseInt(prompt("Enter the number : "));
if (n < 0)
    console.log("cannot calculate the factorial");
else {
    let p = 1;
    for (let i = 1; i <=n;i++){
        p*=i;
    }
    console.log(p);
}