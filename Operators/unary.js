/*
    Unary:- The simplest operator in javascript are unary operator. A unary operator works on one operand.


    The unary operators in javascript are: 
    Unary plus (+) :- convert a operand into a number
    Unary minus  (-) :- convert an operand into a number and negate the value after that.
    perfix / postfix increment (++):- add one to ita operand
    prefix / postfix decrement (--):-  substract one from its operand
*/


// Unary plus
let a = 10;
console.log("a:- ",a) // 10
let c = +a;  // 10
console.log("Unary plus +a:- ",+a)



// Unary minus
let b = 10;
console.log("b:- ",b); // 10
c = -b; // -10
console.log("unary minus  -b:- ",-b);


// Increment / Decrement
c = ++a;  // 11
console.log("increment ++a:- ",c);


c = b++  // 10
console.log("increment b++:- ",c);



c = --a // 10
console.log("Decrement --a:- ",c)


c= b-- // 11
console.log("Decrement --b:- ",c)


let x = 20;
let y = 15;
let z = x - --y  // 6
console.log("x - --y:- ",z)


let p = 25;
let q = 15;
let r = p + --q; // 39
console.log("r:- ",r)