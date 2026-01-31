console.log("Functions");

// Function Declaration (creating the fn)
function sayHello() {
    console.log("Hello cohort 65");
}

//2. call/trigger/run/execute function(code,console,user)
sayHello();
sayHello();
sayHello();

// Function with 1 parameter
function greetBird(birdName) {
    document.write("<p>Hello ${birdName}! Ready to destroy some pigs?</p>");
}
greetBird("Red");
greetBird("Blue");
greetBird("Yellow");

// Function with 2 parameters
function greetPlayer(firstName,lastName){
    document.write(`<p>Welcome back ${firstName} ${lastName}!</p>`);
}

greetPlayer("Rollie","Delacruz");
greetPlayer("Nathalia","Delacruz");

function doubleScore(score){
    let total = score * 2;
    console.log(`Your new score is: ${total}`);
}

doubleScore(10);
doubleScore(12);
doubleScore(8);

//Example 4. fn with prompt

function askCharacterName(){
    let characterName = prompt ("Enter your name:");

    document.write(`Welcome ${characterName}`);
}

//trigger the fn from the console 

//Example 5 fn with defualt parameters
function add(num1=0,num2=0){
    let total = num1 + num2;
    console.log(`The total is: ${total}`);
}
add(2,3);
add(5,22.5);
add();

// Challenge 2: Combine Names
// Task:
// - Create a function called `combineNames` that takes two parameters: `firstName` and `lastName`.
// - The function should return the full name in the format: `"Hello firstName lastName"`.
// - If either parameter is missing, it should use the default value `"Unknown"` for that parameter.

function combineNames(firstName="Unknown", lastName="Unknown"){
    console.log(`Hello ${firstName} ${lastName}`);
}
combineNames("Alice","Johnson"); // Alice Johnson
combineNames("Alice");// Alice Unknown
combineNames(); // Unknown Unknown

// Challenge 3: Convert Minutes to Seconds

// Task:
// - Create a function called `convertToSeconds` that takes one parameter, `minutes`.
// - The function should calculate the seconds by multiplying the minutes by 60. 
// - Call the function with different values of minutes and print the results.

// function convertToSeconds(mins){
//     let secs = mins * 60;
//     console.log(`${mins} mins are ${secs} secs`)
// }

// convertToSeconds(1);
// convertToSeconds(10);
// convertToSeconds(3);

function convertSeconds(){
    console.log("Succesful connection to the server");
    let mins = prompt("Enter mins: ");
    let secs = mins * 60;
    document.getElementById("results").innerHTML =
    `The conversion is: --- ${mins} mins are ${secs} secs`;
}