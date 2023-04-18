let adminSale = 40;
let frequentClientSale = 20;
let studentSale = 30;

let userDiscount = 0;

let userBalance = 150;
let cartTotal = 160;

let userIsAdmin = false;
let userIsFrequentClient = true;
let userIsStudent = false;

if(userIsAdmin) {
    userDiscount = adminSale;
} else if(frequentClientSale) {
    userDiscount = frequentClientSale;
} else if(userIsStudent) {
    userDiscount = userIsStudent;
}

let totalDiscaount = cartTotal - userDiscount;

if(totalDiscaount <= userBalance) {
    console.log("გადახდა შესრულებულია");
} else {
    console.log("You don't have enough money");
}