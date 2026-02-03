console.log("Running the if statement file");

// if-statement condition (y/n)
//styntax
//if(condition){
//comde to be runif condition is true
//}

let result =50;
if(result > 80){
    console.log("You passed the Exam");
}

let result2 = 50;
if (result == result2){
    console.log(" Both Values are the same");
}

// ------ 
// == compare 
// case 1: 5 == 5 // true
// case 2: 5 == "5" // checks the value - TRUE
// case 3: 5 === "5" // checks the value and data type - FALSE

// if-else statement condition (y/n)
//styntax
//if condition){
// code to be run if condition is true
//} else{
// code to be run if condition is false
//}

result = 30;
if(result > 40){
    console.log("You passed the Exam");
}else{
    console.error("You failed the Exam");
}

let waterTemp = 95;
if (waterTemp > 100){
    console.log("Water is boiling");
}else{
    console.log("Water is not boiling");
}

// else-if statemnts
//styntax
// if(condition1){
// code to be run if the condition is true 
//} else if (condition2){
// code to be run if condition2 is true
//} else{
// code to be run if both conditions are false
//}

function ageCalculator(){
    let age = 23;

    if(age < 13){
        console.log("you are a child");
    }else if(age < 21){
        console.log("you are a teenager");
    }else if(age < 64){
        console.log("you are an adult");
    }else{
        console.log("you are a senior");
    }
}

// challenge 1
// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color  (use a prompt)
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)


function traffic(){
    let light = prompt("Enter a color:");

    if(light.toLowerCase() == "green"){ 
        console.log("Go!");
    }else if(light.toLowerCase() == "yellow"){
        console.log("Slow Down!");
    }else if(light.toLowerCase() == "red"){
        console.log("Stop!");
    }else{
        console.error("Unknown light color. Please proceed with caution.");
    }
}

//challenge 1
//Movie ticket price calculator

function ticketPrice(){
    let age = prompt("Enter your age:");

    if(age < 12){
        console.log("Ticket price is $5");
    }else if(age < 19){
        console.log("Ticket price is $8");
    }else{
        console.log("Ticket price is $10");
    }
}

//challenge 2
// User Access Role 

function userAccess(){
    let role = prompt("Enter your role:");

    if (role == "admin"){
        console.log("You have full access");
        document.write("Welcome Admin</h2>");
    }else if (role == "editor"){
        console.log("You have limited access");
        document.write("Welcome Editor");
    }else if (role == "viewer"){
        console.error("You do not have access");
        document.write("No Access");
    }
}


// 
function weatherOutfit(){
    console.log("Weather outfit");
    const DIV = document.getElementById("results");
    let tmp = prompt("Enter the weather");

    //clear the CSS
    DIV.classList.remove("hot","cold");

    if(tmp < 15){
        DIV.innerHTML="Jacket";
        DIV.classList.add("cold");
    }else if(tmp < 25){
        DIV.innerHTML="Sweater";
    }else{
        DIV.innerHTML="T-Shirt";
        DIV.classList.add("hot");
    }

}