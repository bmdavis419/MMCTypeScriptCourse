// Console Log
console.log("Hello world!");

// vars
let strFirstVar = "var";
console.log(strFirstVar);

// Types
let strName: string = "Ben";
let numAge = 19;
let boolIsInstructor = true;
let strAge: string = numAge.toString();
let numStrongTypedAge: number = Number(strAge);

// expressions
numAge = numAge + 1;

// User Input
// Import the prompt module
const inputSource = require("prompt-sync")();
strName = inputSource("Enter a new name: ");
console.log(strName);

// Condidtionals
if (strName.length > 5) {
	console.log("The name you entered is long");
} else {
	console.log("The name you entered is short");
}

// conditional with statement
if (numAge % 2 == 0) {
	console.log("Your age is even");
} else {
	console.log("Your age is odd");
}

// Embedded expressons in strings
console.log(
	`The name you entered was ${strName}, it has a length of ${strName.length}`
);
