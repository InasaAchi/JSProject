let userLoggedIn = false;
let userFirstName = "james";
let userIsFemale = false;

const polit = userLoggedIn && userIsFemale && "სალამი ქალბატონო " + userFirstName ||
              !userLoggedIn && userIsFemale && "დროებით ქალბატონო " + userFirstName ||
              userLoggedIn && !userIsFemale && "სალამი ბატონო " + userFirstName ||
              !userLoggedIn && !userIsFemale && "დროებით ბატონო " + userFirstName; 

console.log(polit);