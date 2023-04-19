let gigosTestResults = [52, 54, 59, 73, 55];
let x = gigosTestResults[gigosTestResults.length-1] - gigosTestResults[0];

if(x < 10 && x > 1) {
    console.log("რავიცი, ნიჭიერია მარა ზარმაცი");
} else if(x > 10) {
    console.log("კარგი შვილი გყავთ ქალბატონო, ნუ ნერვიულობთ");
} else if(x <= 0) {
    console.log("უხ გიგო გიგოოო");
}