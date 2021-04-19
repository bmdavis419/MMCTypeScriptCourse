"use strict";
// Console Log
console.log("Hello world!");
// vars
var strFirstVar = "var";
console.log(strFirstVar);
// Types
var strName = "Ben";
var numAge = "19";
var boolIsInstructor = true;
// User Input
// Import the prompt module
var inputSource = require("prompt-sync")();
strName = inputSource("Enter a new name: ");
console.log(strName);
// Condidtionals
if (strName.length > 5) {
    console.log("The name you entered is long");
}
else {
    console.log("The name you entered is short");
}
// Embedded expressons in strings
console.log("The name you entered was " + strName + ", it has a length of " + strName.length);
