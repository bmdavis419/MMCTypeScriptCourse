let days = ["monday", "tuesday", "wednesday"];
let numbers: number[] = [1, 2, 3];
console.log(numbers[1]);

numbers.push(4);
console.log(numbers);

let intCounter = 1;
while (intCounter < 10) {
	// console.log(intCounter);
	intCounter++;
}

for (let i = 1; i < 10; i++) {
	// console.log(i);
}

function printTest(value: string) {
	console.log(
		`You entered ${
			value.length > 5
				? "a string with length greater than 5"
				: "a string with length less than or equal to 5"
		}`
	);
}

printTest("SIXCHR");

const printTestTwo = (value: string) => {
	console.log(
		`You entered ${
			value.length > 5
				? "a string with length greater than 5 test"
				: "a string with length less than or equal to 5"
		}`
	);
};

printTestTwo("less");

numbers.forEach((num) => {
	console.log(num + 1);
});

interface PersonInterface {
	name: string;
	age: number;
	attendsOSU: boolean;
}

let FirstPerson: PersonInterface = {
	name: "Ben",
	age: 19,
	attendsOSU: true,
};

FirstPerson.name = "Ben Davis";

let PersonArray: PersonInterface[] = [
	FirstPerson,
	{
		name: "Bob",
		age: 20,
		attendsOSU: false,
	},
];

PersonArray.forEach((person) => {
	console.log(
		`This person's name is ${person.name}, they are ${person.age}, and they ${
			person.attendsOSU ? "do" : "don't"
		} attend osu.`
	);
});

interface EnhancedPersonInterface extends PersonInterface {
	prettyPrint: Function;
}

class EnhancedPersonClass implements EnhancedPersonInterface {
	// instance vars
	name = "";
	age = 0;
	attendsOSU = false;

	// constructor called on init
	constructor(name: string, age: number, attendsOSU: boolean) {
		this.name = name;
		this.age = age;
		this.attendsOSU = attendsOSU;
	}

	// methods
	prettyPrint = () => {
		console.log(
			`This person's name is ${this.name}, they are ${this.age}, and they ${
				this.attendsOSU ? "do" : "don't"
			} attend osu.`
		);
	};
}

let NewEnhancedPerson = new EnhancedPersonClass("Billy", 23, true);
NewEnhancedPerson.prettyPrint();
