let gigosResults = [51, 50, 75, 90];
const barrier = 51;

// if(gigosResults[0] >= barrier && gigosResults[1] >= barrier && gigosResults[2] >= barrier && gigosResults[3] >= barrier) {
//     console.log("Congrats");
// } else {
//     console.log("Failed");
// }

for(let i = 0; i < gigosResults.length; i++) {
    if(gigosResults[i] >= barrier) {
        console.log("congrats");
    } else {
        console.log("failed");
    }
} 