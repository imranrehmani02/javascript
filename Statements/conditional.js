/*
    Conditional Statements in JavaScript:- The conditional statements included in the JavaScript 
                code assist with decision making, based on certain conditions. The condition specified
                in the conditional statement can either be true or false.
                The conditional statements execute the associated piece of code
                 only if the condition is true.
*/

// If
console.log(" ******  If  ******* ")
let age = 18;
if (age >= 18) {
    console.log("Votable age");
}



// If else
console.log(" ********* If else  ************")
let isVerified = false;
if (isVerified) {
    console.log("Varified")
}
else {
    console.log("Unverified")
}


// Else if
console.log("***** Else if ********* ")
let a1 = 8;
if (a1 < 18) {
    console.log("Kid")
}
else if (a1 >= 18 && a1 <= 45) {
    console.log("Adult")
}
else if (a1 > 45 && a1 <= 60) {
    console.log("Uncle");
}
else {
    console.log("Old age")
}




// For loop
console.log(" ********** For Loop **************")
/*
    Syntax:- 
    for(initialization; condition; inc/dec){
        
        <code>
    }
*/


for (let i = 1; i <= 5; i++) {
    console.log("i :- ", i)         // 1 2 3 4 5
}




// While loop
console.log(" *********** While loop *************** ")
/*
    Syntax:- 
    initialization
    while(condition){
        //code
        inc/dec
    }
*/

let b = 2;
while (b <= 10) {
    console.log("b:- ", b)    // 2 4 6 8 10
    b = b + 2
}



// Do while loop
console.log(" ********** Do while loop ************ ")
/*
    Syntax:- 

    initialization
    do{
        // code
        inc/dec
    }
    while(condition)
*/


let c = 20;
do {
    console.log("c:- ", c)       // 20 17 14 11
    c = c - 3;
}
while (c > 10)




// For...in loop
// For...in loop use for object
console.log(" ********* For in *************** ")
let profile = {
    "name": "Imran",
    "age": 24
}
for (var pr in profile) {

    console.log(pr + " " + profile[pr])    // pr is object key and profile[pr] is object value respect of key
}


let arr1 = ['car', 'bike', 'plane', 'cruze'];
for (let vh in arr1) {
    console.log(vh, " ", arr1[vh])    // vh use for key and arr1 use for its value
}



// For....of loop (ES6)
console.log(" ********* For...of loop ************")
let i = [100, 200, 300, 400];
for (let j of i) {
    console.log(j)   // (value)   100, 200, 300, 400
}



// For each loop
console.log(" *********  For each loop ********** ");

// 1st
let numbers = [11, 22, 33, 44];
numbers.forEach((n, index) => {
    console.log(index, ":- ", n)
})

// 2nd
let fruits = ['apple', 'banana', 'orange', 'mango'];
fruits.forEach(fruitFunction)

function fruitFunction(fruit, index) {
    console.log(index, ":- ", fruit)
}





// Switch
console.log(" ****** Switch ********")
let flavourCode = 4;

switch (flavourCode) {
    case 1:
        console.log("You picked apple.");
        break;
    case 2:
        console.log("You picked mango.");
        break;
    case 3:
        console.log("You picked pineapple");
        break;
    case 4:
        console.log("You picked strawberry");
        break;
    default:
        console.log("Please pick correct flavour.")
}