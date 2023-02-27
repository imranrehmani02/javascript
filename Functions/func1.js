/*
    f. Working with functions
    
    A. Function structure

    1)  Named v/s anonymous function

    Named function:- Named functions are normal functions, with name or identifier to refer to it.

    Benefits of named function:- 
    -> Named functions are very helpful in debugging, in knowing which 
    function caused an error, as you will get the function name in the error log.

    -> Named functions are more readable, thus helping your code more 
    understandable by other developers.

    -> Named Functions are easier to reuse and thus helps you in writing clear code.
*/



// 1. Named function
console.log(" **************  Named function **************** ");

function func1() {
    console.log("Named function")   // Named function
}
func1()



// 2.  Named function with parameter
console.log(" *********** Named function with parameter ********** ");

function func2(param) {
    return `Named function with ${param}`;
}
console.log(func2("parameter"));   // Named function with parameter





/*
    JavaScript anonymous functions :- An anonymous function is a function without a name.
                 An anonymous function is often not accessible after its initial creation.

    Benefits of Anonymous function :- 
        Anonymous functions are functions without names.
        Anonymous functions can be used as an argument to other functions or as an 
        immediately invoked function execution.
*/

// 3. Anonymous function
console.log(" ************** Anonymous function *************** ");

let func3 = function () {
    console.log("Anonymous function");
}
func3()     // Anonymous function





// 4. Using anonymous function as an argument of other function
console.log(" ************* Anonymous function as an argument of other function *********** ")
setTimeout(function () {
    console.log("Function execution after 1.5 second");
}, 1500)         // Function execution after 1.5 second   (print after 1.5 sec)





// 5. Immediate invoked function execution
console.log(" ************ Immediate invoked function invacation ************* ");
(function () {
    console.log("Immediate invoked function invocation");
})()    // Immediate invoked function invoation




// 6. Immediate invoked function execution with parameter
console.log(" ************ Immediate invoked function invacation with parameter ************* ");
let student = {
    "name": "Saqlain",
    "subject": "Marketing"
}

// (function(){
//     console.log(`Student name: ${student.name},  Subject: ${student.subject}`);      // ERROR
// })(student);



// 7. Arrow function
console.log("  *********** Arrow function ************* ")
let studentInfo = (student) => {
    console.log(`Student name: ${student.name},  Subject: ${student.subject}`)
}
studentInfo(student)





// 8. Arrow function with parameter
console.log(" ********** Arrouw function with parameter *********** ");
let sum = (a, b) => a + b;
console.log(sum(22, 33))   // 55