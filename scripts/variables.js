console.log("---- Variables ----");

// String
let firstName = "Rollie";
// numerical
let myAge = 31;
// boolean
let isProfessor = false;
let isStudent = true;

// display the values
console.log(myAge);
console.log(firstName);
console.log(isProfessor);
console.log(isStudent);

// Mini challenge:
// Create a variable for your last name.
// Create a variable for your height.
// Finally, show each variable separately in the console.

let lastName = "DelaCruz";
let myHeight = 5.11;
console.log(lastName);
console.log(myHeight);

// Arithmetic operations
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;
let subs = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

// concatenation
//console.log(num1 + " + " + num2 + "="+ sum);
console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${subs}`);
console.log(`${num1} x ${num2} = ${mult}`);
console.log(`${num1} / ${num2} = ${div}`);

// calculate the area of a circle
const pi = 3.1416; 
let radius = 3;
let circleArea = pi * radius * radius;

console.log(`The area of a circle with ${radius} is ${circleArea}`);

// difference between variable and constant
let aVariable; // create a variable
aVariable = 20; // assign a value
aVariable = 5;
// create and assign value
let anotherVariable = 30;

console.log(aVariable);

const weekDays = 7;
//weekDays = 9;
console.log(weekDays);

//Declare Variables
let characterName = "gojo";
let action = "running";
let object = "mountains";
let place = "school";
let time = "night";

// using "const"
const occupation = "teacher";

//create story
console.log("funny story:");
console.log(characterName + " was " + action + " through the " + object + " near the " + place + " at " + time + ". " + characterName + " is also a " + occupation + ".");
console.log("sudenly, " + characterName + " saw a UFO!");
console.log("running away from the UFO, " + characterName + " tripped and fell.");
console.log("luckily, " + characterName + " got back up and kept " + action + " away from the UFO.");
console.log("the end.");