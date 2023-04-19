let gigosTestResults = [52, 54, 59, 73, 51];

if(gigosTestResults[gigosTestResults.length-1] - gigosTestResults[0] < 10 && 
    gigosTestResults[gigosTestResults.length-1] - gigosTestResults[0] > 1) {
    console.log("რავიცი, ნიჭიერია მარა ზარმაცი");
} else if(gigosTestResults[gigosTestResults.length-1] - gigosTestResults[0] > 10) {
    console.log("კარგი შვილი გყავთ ქალბატონო, ნუ ნერვიულობთ");
} else if(gigosTestResults[gigosTestResults.length-1] - gigosTestResults[0] <= 0) {
    console.log("უხ გიგო გიგოოო");
}