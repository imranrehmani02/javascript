/*
    Array construction:- In javascript, the constructor property returns the constructor function for an object.

    The return value is a reference for the function, not the same of the function:
    
For JavaScript arrays the constructor property returns function Array() { [native code] }

For JavaScript numbers the constructor property returns function Number() { [native code] }

For JavaScript strings the constructor property returns function String() { [native code] }
*/




console.log(" ***************** Construction ****************** ");
// 1) Construction 

let arr1 = [10, 23.56, true, "bike"];
console.log(arr1.constructor)   // [Function: Array]




// 2) Array deconstruction
console.log(" *************  Deconstruction ***************** ");
/*
    Array destructing:-  Destructuring in JavaScript is a simplified method 
   of extracting multiple properties from an array by taking the structure 
   and deconstructing it down into its own constituent parts through
   assignments by using a syntax that looks similar to array literals.
*/


// Basic variable assignment
console.log(" ************** Basic variable assignment ************* ");
const foo = ['one', 'two', 'three', 'four'];
const [red, green, blue, yellow] = foo;

console.log("red:- ", red);      // one
console.log("green:- ", green);  // two
console.log("blue:- ", blue);    // three
console.log("yellow:- ", yellow);    // four




//  Assignment separate from declaration
console.log(" ************** Assignment separate from declaration *************** ");
let i, j, k
[i, j, k] = ['Ink', 'Jocker', 'King'];
console.log("i:- ", i);      // Ink
console.log("j:- ", j);      // Jocker
console.log("k:- ", k);      // King





// Swapping variables
console.log(" **************** Swapping varibales ************* ");

let a = "Test_1";
let b = "Test_2";
console.log("a = ", a)   // "Test_1"
console.log("b = ", b)   // "Test_2"

//[a,b] = [b,a]

console.log("a = ", a)       // "Test_2"
console.log("b = ", b)       // "Test_1"




// Parsing an array returned from a function
console.log(" **************** Parsing an array returned from a function ******************* ");

function z() {
    return [563, 983, 223];
}

let p, q;
[p, q, r] = z();
console.log("p:- ", p)       // 563
console.log("q:- ", q)       // 983
console.log("r:- ", r)       // 223





// Assigning the rest of an array to a variable
console.log(" ************ Assigning the rest of an array to a variable ****************** ")
let arr5 = [a, ...b] = [23, 56, 89, 11];

console.log(a)      // 23
console.log(b)      // [56, 89, 11]