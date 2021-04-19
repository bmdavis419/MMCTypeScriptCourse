// new person interface
export interface person2 {
	firstName: string;
	lastName: string;
	age: number;
	birthdayMonth: number;
}

// function to print the person's info
let printInfo = (p: person2) => {
	console.log(
		`${p.firstName} ${p.lastName} is ${p.age} and their birthday is in the month numbered ${p.birthdayMonth}`
	);
};

// create the export
export { printInfo };
