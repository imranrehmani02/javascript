/*
     a.A  Creating empty object:- There are two different ways to create an empty object in javascript.

     1) let obj1 = {};
     2) let obj2 = new Object();
*/


console.log(" ******** Creating empty object ************ ")

// 1
let obj1 = {};
console.log("typeof(obj1):- ",typeof(obj1));  // object
console.log("obj1:- ",obj1); // {}



// 2
let obj2 = Object();
console.log("typeof(obj2):- ",typeof(obj2));    // object
console.log("obj2:- ",obj2);    // {}



/*
    Array typeof() is object
*/

let arr1 = [];
console.log("typeof(arr1):- ",typeof(arr1));    // object
console.log("arr1:- ",arr1);        // []

let arr2 = new Array();
console.log("typeof(arr2):- ",typeof(arr2));    // object
console.log("arr2:- ",arr2);    // []