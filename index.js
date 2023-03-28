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

const userPinCode = 7825;

const currentPinCode = 7825;
const newPinCode = 2825;
const retypeNewPinCode = 2825;

const pinChangeComplete = ((userPinCode == currentPinCode) && (newPinCode == retypeNewPinCode));

console.log("Please enter pin code");

if(userPinCode == currentPinCode) {
    console.log("It's been a long time before you have changed pin Code - Please enter new Pin code");
    console.log("Retype new pin")
    if(newPinCode !== retypeNewPinCode) {
        console.log("New Pin code is incorrect - please enter the correct pin");
    } else {
        console.log("Pin has Changed")
    }
} else {
    console.log("Pin is incorect - please enter correct pin");
}


console.log(pinChangeComplete);