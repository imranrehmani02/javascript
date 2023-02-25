/*
    Object counstruction and decounstruction
*/


// Destructuring assignment
console.log(" ********  Destructuring assignment  ******** ");
let a, b, rest;
[a, b] = [1, 2]

console.log("a:- ", a);      // 1
console.log("b:- ", b);      // 2

[a, b, ...rest] = [11, 22, 33, 44, 55]
console.log("...rest:- ", ...rest)       // 33 44 55
console.log("rest:- ", rest)     // [33 44 55]


// Structuring assignment
console.log(" ********  Structuring assignment  ******** ");
let x = [11, 22, 33, 44, 55];
let [p, q, ...r] = x;
console.log("p:- ", p); // 11
console.log("q:- ", q); // 22
console.log("r:- ", r); // [33 ,44, 55]
