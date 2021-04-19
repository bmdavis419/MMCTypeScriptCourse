"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// object
var firstPerson = {
    name: "Ben",
    age: 19,
    attendsOSU: true,
};
console.log(firstPerson.name);
// array of objects
var people = [
    firstPerson,
    {
        name: "Ben2",
        age: 12,
        attendsOSU: false,
    },
];
console.log(people[1].attendsOSU);
// foreach on an object
people.forEach(function (p) {
    console.log(p.name + " is " + p.age + ".");
    if (p.attendsOSU) {
        console.log("They attend osu");
    }
    else {
        console.log("They do not attend osu");
    }
});
// modules
var person_1 = require("./person");
var people2 = [
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
people2.forEach(person_1.printInfo);
