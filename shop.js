let userBalance = 130;
let cartTotal = 140;
let x = cartTotal - userBalance;

if(userBalance >= cartTotal) {
    console.log("გადახდა წარმატებით შესრულდა");
} else if(userBalance < cartTotal) {
    console.log("თქვენ არ გაქვთ საკმარისი თანხა, გთხოვთ დამატებით ჩარიცხოთ " + x + " ლარი ოპერაციის დასასრულებლად");
}