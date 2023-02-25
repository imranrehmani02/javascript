/*
    Javascript array iteration methods:- Array iteration methods operate on every array item.
*/

console.log(" ******************* Javascript array iteration methods ***************** ");

// 1) Array.forEach()
/*
    The forEach() method calls a function (a callback function) once for each array element.
*/

let numbers = ['one', 'two', 'three', 'four', 'five'];

numbers.forEach(n => {
    console.log("forEach number:- ", n)  // one    two    three      four    five
})

let decimal = [1.2, 5.66, 89.32];

decimal.forEach(decimalForEach)

function decimalForEach(decimalNumber) {
    console.log("decimalNumber:- ", decimalNumber)       // 1.2      5.66        89.32
}


console.log(" ************* Array.map() **************** ")
// 2) Array.map()
/*
    A map applies a function over every array element and then returns the new array.

    The map() method creates a new array by performing a function on each array element.
    The map method does not execute the function for array element without values.
    The map method does not change the original array.
*/

let decimalNumber = [1.1, 2.2, 3.3, 4.4, 5.5];
let decimalArray = decimalNumber.map(n => n * 2);
console.log("decimalArray:- ", decimalArray)  // [ 2.2, 4.4, 6.6, 8.8, 11 ]




console.log(" *********** Array.filter() ************* ");
// 3) Array.filter():- The array filter method creates a new array with array elements that passes a test.


let mixValue = [22, 13, 58, 47, 32, 46, 23];
let evenValue = mixValue.filter(n => {
    return n % 2 == 0;
})
console.log("evenValue:- ", evenValue)   // [22,58,32,46]


let testNumber = mixValue.filter(n => {
    return n < 20 && n > 10
})
console.log("testNumber:- ", testNumber)     // [13]




console.log(" ************* Array.reduce() ************* ");
/*
    4) Array.reduce():-  The reduce method runs a function on each array element to produce (reduce it to)
                        a single value. (left to right)

                    The reduce method works from left-to-right in the array. See also reduceRight()
                    The reduce method does not reduce the original array.
*/

let num = [10, 20, 30, 40, 50, 60];
let reduceLeft = num.reduce(nm => {
    return nm
});
console.log("reduceLeft:- ", reduceLeft) //10

let reduceRight = num.reduceRight(nm => {
    return nm;
})
console.log("reduceRight:- ", reduceRight) // 60






console.log(" ********** Array.every() *************** ");
/*
    5) Array.every():- The array.every() method check if all array values pass a test.
*/

let allOver18 = num.every((nm) => {
    return nm > 20
})

console.log("allOver18:- ", allOver18) // false






console.log(" *************** Array.some() ************* ");
/*
    6) Array.some():- Array.some() method return true when some element pass a test;
*/

let arraySome = num.some((nm) => {
    return nm > 30;
})

console.log("arraySome:- ", arraySome)       // true






console.log(" ********** Array.find() ************** ");
/*
    7) Array.find():- The find method returns the first value of the array element that passes a test function.
*/
let allFind = num.find((nm) => {
    return nm > 35
})
console.log("allFind:- ", allFind)   // 40








console.log(" ************ Tranducer ************* ");
/*
    Clubbing multiple iterations into single iteration using transducer

    Tranducer:- A transducer is a composable higher-order reducer.
                It takes a reducer as input, and returns another reducer.

                Reducers fold multiple inputs into single outputs, 
                where “fold” can be replaced with virtually any binary operation that produces a single output.
*/


let nums = [10, 22, 33, 44, 55, 66];
let  transducerResult = nums.map(n=>n+1)
    .filter(n=>n%2===0)
    .reduce(n=> n)

console.log(transducerResult)   // 34