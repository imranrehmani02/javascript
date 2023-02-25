/*
    Symbol type:- By specification, object property keys may be either of string type,
     or of symbol type. Not numbers, not booleans, only strings or symbols, these two types.

     A “symbol” represents a unique identifier.

    A value of this type can be created using Symbol():
     */

// let id = Symbol();

console.log(" *********** Symbol() ***************** ");
let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1)
console.log(id2)

console.log(id1 == id2)     // false