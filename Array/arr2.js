/*
    e.B :-  Creating an array with initial values
*/

console.log(" ************* Creating an array with initial values *************** ")

// Array constructor
let arr1 = new Array();
let arr2 = new Array(6);
let arr3 = new Array(111, 222, 333, 444);

let numericArray = [1, 20, 300, 4000];
console.log("numericArray:- ", numericArray);


let decimalArray = [2.5, 3.6, 89.63];
console.log("decimalArray:- ", decimalArray);


let stringArray = ["ABC", "DEF", "GHI"];
console.log("stringArray:- ", stringArray);

let mixedArray = [1, 78.36, 'India', true];
console.log("mixedArray:- ", mixedArray);

// Accessing array properties
console.log(mixedArray[1]);     // 78.36
console.log(numericArray[0]);     // 1
console.log(stringArray[2]);     // GHI