/**
 * ii) Function based on number of parameters - unary, binary, naray
 * 
 * A function is a cohesive piece of code coupled to perform a specific task.
 *  The function accesses the outer world using its parameters.
 */

// 1) Function parameter

console.log(" ************* Function parameter *************** ");

// Zero parameter function
function zero() {
    console.log(0);
    return 0;
}


// One parameter function
function one(param) {
    console.log(param);
    return param;
}


// Multi parameter function
function multi(p1, p2) {
    console.log(p1 * p2);
    return p1 * p2;
}

zero();     // 0
one(100);   // 100
multi(10, 20);  // 200





/*
    you can call a function with fewer arguments than the number of parameters.
    JavaScript does not generate any errors in such a case.
    However, the parameters that have no argument on invocation are initialized with undefined value.
*/
function box(p1, p2) {
    console.log("P1:- ", p1); // 6
    console.log("P2:- ", p2);    // undefined
    console.log("Add:- ", p1 + p2);    // NaN
}
box(6)




// 2) Default parameter
/*
    The ES2015 default parameters feature allows initializing parameters with defaults. 
     It’s a better and more concise way than the one presented above.
*/
console.log(" ************ Default parameter ************ ");
function func1(p1, p2 = 3, p3 = 4) {
    console.log("p1:- ", p1);    // 1,   11
    console.log("p2:- ", p2);    // 3,   2
    console.log("p3:- ", p3);    // 4 , 4

    console.log("Multiply:- ", p1 * p2 * p3)     // 12,  88
}
func1(1)
func1(11, 2)




// 3) Parameter destructing
/*
    What I especially like in the JavaScript function parameters is the ability to destructure.
    You can destructure inline the parameter’s objects or arrays.
*/
console.log(" ************** Parameter destructing ************** ");
function school({ name, subject }) {
    console.log(`My name is ${name}, I am student of ${subject}.`);
}
let student = {
    name: "Zubair",
    subject: "Anesthesia",
    play: "Crieckt"
}
school(student)     // My name is Zubair, I am student of Anesthesia.



function playground({ play = 'Football' } = {}) {
    console.log(`I like play ${play}.`);
}

playground();   // I like play football.
playground(student);    // I like play cricket.





// 4) Arguments object
/*
    Another nice feature of JavaScript functions is the ability to call the same function
    with a variable number of arguments.
*/
console.log(" ***************** Arguments object *************** ");
function someArgs() {
    let sum = 0;
    console.log("Arguments:- ", arguments); // {'0': 3, '1': 6}
    console.log("Arguments length:- ", arguments.length);    // 2
    for (let i = 0; i < arguments.length; i++) {
        s = arguments[i] * 2;
        sum = sum + s
    }
    console.log("Sum:- ", sum);          // 18
}

someArgs(3, 6)





// 5) Rest parameters
/*
    The ES2015 rest parameter lets you collect all the 
    arguments of the function call into an array.
*/
console.log(" ************ Rest parameters ********** ");
function rest(a, b, ...restParams) {
    console.log("a:- ", a);      // 1
    console.log("b:- ", b);      // 2
    console.log("rest:- ", restParams)       // [3,4,5,6]

    let ab = restParams.reduce((sum, number) => sum + number)
    console.log("ab:- ", ab)   // 18
}
rest(1, 2, 3, 4, 5, 6)