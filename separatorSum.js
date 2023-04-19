let x = 1000000;
let y = 0;

for(let i = 1; i <= x; i++) {
    if(x % i ==0) {
        y += i;
    }
}

console.log(y);