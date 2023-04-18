let presidentKey = true;
let primeMinisterKey = true;
let generalOfArmiesKey = false;
let masterKey = true;

const bombWillLaunch = (presidentKey && primeMinisterKey && generalOfArmiesKey) || masterKey;

console.log(bombWillLaunch);