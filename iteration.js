/* odd */

// for(i = 1; i <= 2000; i += 2){
//     console.log(`${i} is odd`);
// }


/* even */

// for(i = 2; i >= -2000; i -= 2) {
//     console.log(`${i} is even`);
// }


/* Checkpoint */

// for(i = 0; i <= 100; i++) {
//     if(i == 10 || i == 25 || i == 75 || i == 90) {
//         console.log(`Congratulations, You have passed ${i} checkpoint`);
//     }
// }


/* Odd number sum */

// let sum = 0;

// for(let i = 1; i <= 25000; i += 2) {
//     sum += i;
// }

// console.log(sum);


/* even number sum */

// let sum = 0;

// for(let i = 0; i <= 25000; i += 2) {
//     sum += i;
// }

// console.log(sum);


/* sum and sum */

// let sumOdd = 0;
// let sumEven = 0

// for(let i = 501; i <= 800; i += 2) {
//     sumOdd += i;
// }

// for(let x = 1000; x <= 2000; x += 2) {
//     sumEven += x;
// }
// const totalSum = sumEven + sumOdd;

// console.log(totalSum);


/* ! */

// let x = 5;
// let y = 1;


// for(let i = 2; i <= x; i++) {
//     y *= i;
// }

// console.log(y);


/* 300 */

// let x = 300;

// for(let i = 1; i <= x; i++) {
//     if(x % i == 0) {
//         console.log(i);
//     }
// }


/* Separatot */

// let x = 100;
// let y = 0;

// for(let i = 0; i <= x; i++) {
//     if(x % i == 0) {
//         y += i;
//     }
// }

// console.log(y);


/* Simple numbers */

let x = 23;
let y = 0;

for (let i = 1; i <= x; i++) {
    if(x % i == 0) {
        y++;
    }
}

if(y == 2) {
    console.log("simple");
} else {
    console.log("Isn't simple");
}
