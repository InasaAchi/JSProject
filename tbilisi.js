let fuel = 9;
let igoeti = 10;
let gori = 20;
let xashuri = 30;
let kutaisi = 50;
let batumi = 80;
let x;
if(fuel >= batumi) {
    x = " Batumshi";
} else if(fuel >= kutaisi && fuel < batumi) {
    x = " Kutaisshi";
} else if(fuel < kutaisi && fuel >= xashuri) {
    x = " Xashurshi"
} else if(fuel < xashuri && fuel >= gori) {
    x = " Gorshi";
} else if(fuel < gori && fuel >= igoeti) {
    x = " Igoetshi";
} else {
    x = "nwnwnwnwnw";
}


console.log("ამ წვეთებით " + x + " თუ მოახერხებ ჩაგორებას ჩემო ძმაო");