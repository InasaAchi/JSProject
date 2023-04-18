let capsuleCount = 10;
let capsulePrice = 1.5;

let userBalance = 10;
let creditCardStatus = userBalance >= capsulePrice;

const paymentComplete = capsuleCount > 0 && creditCardStatus;

console.log(paymentComplete);