"use strict";
// arrays
var strDays = ["Monday", "Tuesday", "Wednesday"];
var numDigits = [1, 2, 3, 4, 5];
console.log(numDigits[2]);
// for loops
for (var i = 0; i < strDays.length; i++) {
    console.log(strDays[i]);
}
// while loops
var counter = 1;
while (counter < 10) {
    counter += counter;
}
console.log(counter);
// functions
function printName(name) {
    console.log("Your name is: " + name);
}
printName("Ben");
var printNameAnnon = function (name) {
    console.log("Your name is " + name);
};
printName("Ben2");
// foreach loops
strDays.forEach(function (day) {
    console.log(day + "s");
});
