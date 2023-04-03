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

// let capsuleCount = 2;
// let capsulePrice = 4;
// let userBalance = 7;
// let creditCardStatus = (userBalance >= capsulePrice || userBalance <= capsulePrice) && (capsulePrice * capsuleCount) >= userBalance;

// if(userBalance < capsulePrice) {
//     console.log("There isn't enouhg money in your account");
// }

// if(creditCardStatus) {
//     console.log("I'm sorry, there is not enougn capsule");
// }

// const paymentComplete = userBalance >= capsulePrice && capsuleCount > 0 && !creditCardStatus;

// console.log(paymentComplete);



/* Hotel Booking */

// let availableRooms = 10;
// let roomPrice = 150;
// let discount = 20;

// let userBalance = 1100;
// let userHasDiscount = true;
// let userRoomCount = 10;


// const paymentComplete = availableRooms >= userRoomCount && userBalance >= userRoomCount * roomPrice - (userHasDiscount && roomPrice * userRoomCount * (discount/100));

// if(userHasDiscount) {
//     console.log("You have discount, 20% of the total amount will be reduced");
//     if(userRoomCount * roomPrice - (userHasDiscount && roomPrice * userRoomCount * (discount/100)) > userBalance) {
//         console.log("Unfortunately you don't have enough money in your account");
//     }
// } else {
//     console.log("Unfortunately, you don't have a discount");
// }

// console.log(paymentComplete);



/* New message */

// let message = false;

// const newMessages = massage;

// console.log("Hello shemogevle");

// if(message) {
//     console.log("You have unread messages");
// } else {
//     console.log("You don't have unread messages");
// }

// console.log(newMessages);



/* Online shop */

// let userBalance = 400;
// let cartTotal =1100;

// if(userBalance >= cartTotal) {
//     console.log("Payment complete");
// } else {
//     console.log("You don't have enough money in your account");
// }


/* Exam */

// let testScore = 95;

// const result = testScore > 50;

// if(testScore >= 95) {
//     console.log("Congratulations, You were admitted to Novator");
// } else if(testScore < 95 && testScore >= 70) {
//     console.log("Congratulations, You were admitted to Kembrij university");
// } else if(testScore < 70 && testScore > 50) {
//     console.log("Congratulations, You were admitted to GTU");
// }

// console.log(result);


/* Sale system */

// let adminSale = 50;
// let frequentClientSale = 30;
// let studentSale = 25;

// let userBalance = 400;
// let cartTotal = 450;

// let userIsAdmin = true;
// let userIsFrequentClient = false;
// let userIsStudent = false;

// let userDiscount = 0;

// if (userIsAdmin) {
//   userDiscount = adminSale;
// } else if (userIsFrequentClient) {
//   userDiscount = frequentClientSale;
// } else if (userIsStudent) {
//   userDiscount = studentSale;
// }

// let totalWithDiscount = cartTotal - userDiscount;

// if (totalWithDiscount <= userBalance) {
//   console.log("Payment completed");
// } else {
//   console.log("You don't have enough money");
// }



/* From Tbilisi to Batumi */

// let fuel = 49;

// let igoeti = 10;
// let gori = 20;
// let xashuri = 30;
// let qutaisi = 50;
// let batumi = 80;


// if(fuel >= igoeti && fuel < gori) {
//     console.log("igoetamde");
// } 

// if(fuel >= gori && fuel < xashuri) {
//     console.log("Goramde");
// }

// if(fuel >= xashuri && fuel < qutaisi) {
//     console.log("xashuri");
// }

// if(fuel >= qutaisi && fuel < batumi) {
//     console.log("qutaisi");
// }

// if(fuel >= batumi) {
//     console.log("Batumi");
// }



/* || Types of information */


/* Hello message */

// let userFirstName = "Hello world, you are so beautifull!"

// console.log(userFirstName);



/* Online shop */

// let userBalance = 30;
// let cartTotal = 100;

// if(userBalance >= cartTotal) {
//     console.log("Payment completed");
// } else {
//     console.log("Transaction isn't completed, you are missing " + (cartTotal - userBalance) + " lari");
// }


/* Exam score */

// let maxScore = 100;
// let barrier = 51;
// let studentScore = 50;

// if(studentScore >= barrier) {
//     console.log("Congratulations, you have passed " + barrier + " passsing score with " + studentScore + " score");
// } else {
//     console.log("I'm sorry, you didn't pass " + barrier + " passsing score" + " with " + studentScore + " score."); //ფასინგ სქორე, ფასინგ სქორე :დ
// }


/* Delivery service */

// let shippingIsPossible = false;

// const shipping = shippingIsPossible && "Delivery to your address is available" || !shippingIsPossible && "Delivery service to your address is not available";

// console.log(shipping);


/* Politcorection */

// let userLoggedIn = false;
// let userFirstName = "Fiona";
// let userIsFemale = true;

// if(userLoggedIn && userIsFemale) {
//     console.log("Hello mis " + userFirstName);
// } else if(!userLoggedIn && userIsFemale) {
//     console.log("Good by mis " + userFirstName);
// } else if(userLoggedIn && !userIsFemale) {
//     console.log("Hello mister " + userFirstName);
// } else if(!userLoggedIn && !userIsFemale) {
//     console.log("Good by mister " + userFirstName);
// }


/* || Array exercises */

/* ChatGPT */

// let userQuestions = [];
// let maxQuestion = 25;
// let questionCount = 25

// if(questionCount > maxQuestion) {
//     console.log("You will be bale to ask.....");
// } else {
//     console.log("next question");
// }


/* Fitness app */

// let userWeights = [59, 60, 62, 64, 67];
// let goal = 72;

// const currentWeight = userWeights[userWeights.length - 1];
// const remainWeight = -(currentWeight - goal);

// console.log("You have " + remainWeight + " killos left to reach your goal");



/* Education */

// let gigosTestResults = [12, 13, 15, 16, 17, 12];

// const progress = gigosTestResults[(gigosTestResults.length - 1)] - gigosTestResults[0];

// if(progress < 10 && progress > 0) {
//     console.log("Zarmaca");
// } else if (progress > 10) {
//     console.log("GOOD BOY"); 
// } else if(progress == 0) {
//     console.log("nwnwnwn");
// }


/* Passed */

let gigosResults = [26, 25, 24, 25];

const barrier = 25;

if(gigosResults[0] >= barrier && gigosResults[1] >= barrier && gigosResults[2] >= barrier && gigosResults[3])  {
    console.log("Passed");
} else {
    console.log("nwnwnw")
}