let availableRooms = 15;
let roomPrice = 200;
let discount = 0.2;
let userBalance = 1600;
let userHasDiscount = true;
let userRoomCount = 10;

const paymentComplete = availableRooms >= userRoomCount && (userBalance >= (roomPrice*userRoomCount - roomPrice*userRoomCount*discount) && userHasDiscount);

console.log(paymentComplete);