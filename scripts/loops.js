console.log("The loops.js file is connected");
// repeat
// for loop syntax
//for (starting point; condition; interval){
// code to be repeated
//}

//for(let i=10; i < 201; i++){
//    console.log(i);
//}

//for(let i=1; i < 11; i++){
  //  console.log(`${i} x ${2} = ${i * 2}`);
//}

//const num = prompt ("Enter a number:");
//for(let i=1; i < 11; i++){
 //   document.write(`<li>${i} x ${num} = ${i * num}</li>`);
//}

function multiTable(){
    const num = document.getElementById("txtNum").value;
    
    for(let i=1; i < 11; i++){
        document.getElementById("results").innerHTML += `<li>${i} x ${num} = ${i * num}</li>`;
    }
}

// challenge 1 print your name 5 times
// use a loop 

//for(let name =1; name < 6; name++){
//    console.log("Rollie");
//}

//challenge 2

//for (let i = 1; i < 11; i++){
 //   console.log("iteration: " + i);
//} my solution

//for(let counter=0; counter<101;counter+=10){

 //   console.log(`Iteration:  ${counter}`);

//} solution from class

// print the places from 1 ... 20 (runner places)

//for (let r = 1; r < 21; r++){
//    console.log(r);
//    if(r == 1){
 //       console.log("Gold medal");
 //   }
 //   else if(r == 2){
 //       console.log("Silver medal");
 //   }
 //   else if(r == 3){
 //       console.log("Bronze medal");
 //   }
 //   else{
 //       console.log(`${r}th place`);
 //   }
//}


function generateTable(){

    for(let c=1;c<10;c++){
        let f = (c*9/5) + 32;
        document.getElementById("temps").innerHTML+=`
            <tr>
                <td>${c}</td>
                <td>${f}</td>
            </tr>
        `;
    }
}