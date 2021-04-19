// arrays
let strDays = ["Monday", "Tuesday", "Wednesday"];
let numDigits: number[] = [1, 2, 3, 4, 5];
console.log(numDigits[2]);

// for loops
for (let i = 0; i < strDays.length; i++) {
	console.log(strDays[i]);
}

// while loops
let counter = 1;
while (counter < 10) {
	counter += counter;
}
console.log(counter);

// functions
function printName(name: string) {
	console.log(`Your name is: ${name}`);
}
printName("Ben");

let printNameAnnon = (name: string) => {
	console.log(`Your name is ${name}`);
};
printName("Ben2");

// foreach loops
strDays.forEach((day) => {
	console.log(day + "s");
});
