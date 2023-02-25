// Assignment operator

/*
    Single assignment in statement
    
    syntax:- varibale = expression
*/

console.log(" ****** Single Assignment ******* ")
let x = 100;
console.log("x:- ",x)  // 100

let y = 200;
let z = y;

console.log("y:- ",y)  // 200
console.log("z = y:- ",z)  // 200


let x1 = [];

x1[3] = z

console.log("x1[3] = z:- ",x1[3]) // 200
console.log("x1[2]:- ",x1[2]) // undefined



/*
    Multiple assignment in statement

    syntax:- variable = variable = expression     // we can add multiple variable
*/


console.log(" *******  Multiple assignment ******** ")
let a = b = c = 250;
console.log("a = b = c = 250")
console.log("a:- ",a) // 250
console.log("b:- ",b) // 250
console.log("c:- ",c) // 250

let p = [];
p[1] = 866;
let q = r = s = p[1];
console.log("p[1]:- ",p)   // [<1 empty>, 866]
console.log("q:- ",q)  // 866
console.log("r:- ",r)   // 866 
console.log("s:- ",s)   // 866