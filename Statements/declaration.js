/*
    VAR:- var declared are globally scopped or function scoped.

    LET:- let declared are restricted scope can not be redeclared
    CONST:- cannot be reassigned. scopic variable
*/


console.log("******  VAR  **********")
// VAR:- globally scoped or function scoped
var a = 10;
console.log("a:- ",a); // 10

var a = 850;
console.log("a:- ",a); // 850


function apple(){
    var b = 255
    console.log("a:- ",a) // 850
}
apple()

// console.log("b:- ",b)   // b is undefined


console.log("******  LET  **********")
// LET:- Restricted scope and can not be redeclared
let p = 100;
console.log("p:- ",p) // 100

// let p = 255;  // ERROR Already declared
p = 200
console.log("p:- ",p) // 200

function box(){
    let q = 355
    console.log("P:- ",p) // 200
}
box()

// console.log("q:- ",q)     // ERROR q of undefined




console.log(" ********  CONST  *********")
// CONST:- can not be reassigned
const x = 963;
console.log("x:- ",x)

// const x = 255;  // ERROR:- x already been declared
console.log("x:- ",x) // 963


// x = 666;    // ERROR:- Assignment to constant value
console.log("x:- ",x) // 963

function circle(){
    const         y = 256;
    console.log("y:- ",y) // 256
}
circle()

// console.log("Y:- ",y)  // Error:- y is not defined


const  y = 253
console.log("Y:- ",y)  // 253