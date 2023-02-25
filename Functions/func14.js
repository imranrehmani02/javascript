/*
    D. Functional programming

    1) Pure functions:- Pure Function is a function (a block of code ) that always returns the same
    result if the same arguments are passed. It does not depend on any state, or data change during
     a program’s execution rather it only depends on its input arguments.
*/


console.log(" ***************** Pure functions ************* ")
//example

function calculateGST(productPrice){
    return productPrice * 0.05;
}
console.log(calculateGST(40))       // 2


/*
    The above function will always return the same result, if we pass the same productPrice. 
    In other words, it’s output doesn’t get effected by any other values / state changes. 
    So we can call “calculateGST” function as a Pure function.
*/




