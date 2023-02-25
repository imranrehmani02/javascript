/*
    Block statement:- A block statement statement (or compound statement in other languages) is used to group
                    zero or more statements. The block is declimited by the pair of braces (curly brackets {})
                    and may optionally be labelled.

*/

var x = 1;
let y = 1;

if(true){
   var x = 2;
   let y = 2;
}
console.log("var x:- ",x)  // 2
console.log("let y:- ",y)  // 1

// Conclusion:-  VAR can be accessed by out of block also but LET can not be accessed by out of block


console.log(" ****** Block Scope ******* ")
// Block scoping rules with let, const or function declaration in strict mode

var b = 100;
if(true){
    var b = 200;
}
console.log("var b:- ",b) // 200


let a = 100;
if(true){
    let a = 200;
}
console.log("let a:- ",a) // 100


const c = 100;
if(true){
    const c = 200;
}
console.log("const c:- ",c) // 100

// Conclusion :- LET and CONST are block scopic variable