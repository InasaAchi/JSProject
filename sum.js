let even = 0;
let odd = 0;

for(let i = 501; i <= 800; i += 2) {
    even += i;
}

for(let i = 1000; i <= 2000; i += 2) {
    odd += i;
}

const sum = even + odd;

console.log(sum);