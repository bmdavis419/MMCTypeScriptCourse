// interfaces
interface person {
	name: string;
	age: number;
	attendsOSU: boolean;
}

// object
let firstPerson: person = {
	name: "Ben",
	age: 19,
	attendsOSU: true,
};
console.log(firstPerson.name);

// array of objects
let people: person[] = [
	firstPerson,
	{
		name: "Ben2",
		age: 12,
		attendsOSU: false,
	},
];
console.log(people[1].attendsOSU);

// foreach on an object
people.forEach((p) => {
	console.log(`${p.name} is ${p.age}.`);
	if (p.attendsOSU) {
		console.log("They attend osu");
	} else {
		console.log("They do not attend osu");
	}
});

// modules
import { printInfo, person2 } from "./person";
let people2: person2[] = [
	{
		firstName: "Ben",
		lastName: "Davis",
		age: 19,
		birthdayMonth: 4,
	},
	{
		firstName: "John",
		lastName: "Smith",
		age: 18,
		birthdayMonth: 3,
	},
	{
		firstName: "Jane",
		lastName: "Doe",
		age: 28,
		birthdayMonth: 9,
	},
];
people2.forEach(printInfo);
