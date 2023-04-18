let userIsLoggedIn = true;
let userIsBlocked = false;

const userCanPost = userIsLoggedIn && !userIsBlocked;

console.log(userCanPost);