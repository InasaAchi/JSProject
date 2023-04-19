let x = 1;
let isPrime = true;
if(x < 2) {
  isPrime = false;
}
for(let i = 2; i <= x/2; i++) {
  if(x % i == 0) {
    isPrime = false;
  }
}

console.log(isPrime);