/* First Homework - Youtube */

// let userIsLoggedIn = true;
// let videoIsCommentable = true;

// const userCanComment = userIsLoggedIn && videoIsCommentable;

// console.log(userCanComment);



/* Second Homework - Social media */

// let userIsLoggedIn = true;
// let userIsBlocked = false;

// const userCanPost = userIsLoggedIn && !userIsBlocked;

// console.log(userCanPost);



/* Third Homework - Online Shop */

// let balance = 2;
// let userCartTotal = 4;

// const paymentComplite = balance >= userCartTotal;

// console.log(paymentComplite);


/* Forth Homework - Delete coment */

// let userIsAdmin = false;
// let userIsModerator = false;
// let userIsComentAuthor = false;

// const userCanDelete = userIsAdmin || userIsModerator || userIsComentAuthor;

// console.log(userCanDelete);



/* Fifth Homework - Atomic bomb */

// let presidentKey = true;
// let primeMinisterKey = false;
// let generalOfArmiesKey = true;
// let masterKey = false;

// const bombWillLaunch = (presidentKey && primeMinisterKey && generalOfArmiesKey) || masterKey;

// console.log(bombWillLaunch);



/* Pin code */

// const userPinCode = 7825;

// const currentPinCode = 7825;
// const newPinCode = 2825;
// const retypeNewPinCode = 2825;

// const pinChangeComplete = ((userPinCode == currentPinCode) && (newPinCode == retypeNewPinCode));

// console.log("Please enter pin code");

// if(userPinCode == currentPinCode) {
//     console.log("It's been a long time before you have changed pin Code - Please enter new Pin code");
//     console.log("Retype new pin")
//     if(newPinCode !== retypeNewPinCode) {
//         console.log("New Pin code is incorrect - please enter the correct pin");
//     } else {
//         console.log("Pin has Changed")
//     }
// } else {
//     console.log("Pin is incorect - please enter correct pin");
// }


// console.log(pinChangeComplete);



/* GAME OVER */

// let health = 0;
// let lives = 1;

// const gameOver = (health == 0 && lives == 0) || (lives < 3 == 0 && health);

// console.log(gameOver);



/* MEAMA */

let capsuleCount = 2;
let capsulePrice = 4;
let userBalance = 7;
let creditCardStatus = (userBalance >= capsulePrice || userBalance <= capsulePrice) && (capsulePrice * capsuleCount) >= userBalance;

if(userBalance < capsulePrice) {
    console.log("There isn't enouhg money in your account");
}

if(creditCardStatus) {
    console.log("I'm sorry, there is not enougn capsule");
}

const paymentComplete = userBalance >= capsulePrice && capsuleCount > 0 && !creditCardStatus;

console.log(paymentComplete);



/* Hotel Booking */

// let availableRooms = 10;
// let roomPrice = 150;
// let discount = (30/150)*100;

// let userBalance = 1400;
// let userHasDiscount = true;
// let userRoomCount = 10;


// const userDiscount = (userHasDiscount == true && ((userRoomCount * roomPrice)-(roomPrice * discount * userRoomCount))) <= userBalance;
// const paymentComplete = userBalance >= roomPrice && availableRooms >= userRoomCount && ((userRoomCount * roomPrice) - (discount && userDiscount) <= userBalance);

// if(userHasDiscount) {
//     console.log("You have discount, 20% of the total amount will be reduced");
// } else {
//     console.log("Unfortunately, you don't have a discount");
// }

// console.log(paymentComplete);