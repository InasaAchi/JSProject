let x = 18;
let y = 0;

for(let i = 2; i <= x; i++) {
    if(x % i == 0) {
        y++
    }
}

if(y < 3) {
    console.log("simple");
} else {
    console.log("It's not simple");
}