const userPinCode = 1119;
const currentPinCode = 1119;
const newPinCode = 3231;
const retypeNewPinCode = 3231;

const pinChangeComplete = userPinCode == currentPinCode && newPinCode == retypeNewPinCode;

console.log(pinChangeComplete);