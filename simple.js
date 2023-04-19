let x = 100;
let isPrime = true;
if(x < 2) {
  isPrime = false;
}
for(let i = 2; i <= Math.sqrt(x); i++) {
  if(x % i == 0) {
    isPrime = false;
  }
}

console.log(isPrime);