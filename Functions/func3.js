/*
    iii) Arguments of function

     A JavaScript function does not perform any checking on parameter values (arguments).
     Function parameters are the names listed in the function definition.

    Function arguments are the real values passed to (and received by) the function.

    Default Parameters :-
    If a function is called with missing arguments (less than declared),
    the missing values are set to undefined.
*/

// 1) Default parameter function
console.log(" ******** Default parameter function *********** ");
function apple(a, b, c = 10) {
    console.log("a*b*c:- ", a * b * c);
}

apple(2, 3)      // 60
apple(2, 3, 4)    //24





/**
 * The Arguments Object :--
    JavaScript functions have a built-in object called the arguments object.

    The argument object contains an array of the arguments used when the function was called (invoked).
 */

// 2) Argument object
console.log(" ************* Arguments object *********** ");
function findMax() {
    let maxValue = 0;
    for (let i = 0; i < arguments.length; i++) {
        maxValue = maxValue > arguments[i] ? maxValue : arguments[i];
    }
    console.log("maxValue:- ", maxValue);   // 112
}
findMax(111, 11, 5, 78, 25, 36, 77, 112);