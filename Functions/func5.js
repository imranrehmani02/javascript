/**
 * v) Using default values in arguments 
 * 
 * Default parameters :-- 
    Default function parameters allow named parameters to be initialized with 
    default values if no value or undefined is passed.
 */


console.log(" ********** Default function ********** ")
function func1(a, b=10){
    return a * b;
}

console.log(func1(2))       // 20
console.log(func1(2,3))     // 6