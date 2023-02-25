/*
    vi)  Using spread operator while invoking function

    Spread operator(...) :-- The spread operator is a useful and quick syntax for
    adding items to arrays, combining arrays or objects, and spreading
    an array out into a function’s arguments.

    “Spread operator to the rescue! It looks similar to rest parameters,
    also using ..., but does quite the opposite.” — JavaScript.info
*/

console.log(" ****************  Spread operator ***************** ");
console.log(Math.max(1,2,3))    // 3
console.log(Math.max([1,2,3]))  // NaN
console.log(Math.max(...[1,2,3]))   // 3



/*
     The … spread operator is useful for many different routine tasks in JavaScript, including the following:
        Copying an array
        Concatenating or combining arrays
        Using Math functions
        Using an array as arguments
        Adding an item to a list
        Adding to state in React
        Combining objects
        Converting NodeList to an array

    In each case, the spread syntax expands an iterable object, usually an array,
    though it can be used on any interable, including a string.
*/


// 1) Concatenating and combining objects
console.log(" ********* Concatenating and combaning objects ********** ")
let hello = {hello:"Hello"};
let world = {world: "World"};

let word = {...hello, ...world};
console.log("word:- ",word)         // { hello: 'hello', world: 'world'}



/*
    2) Copying an array:- Using the ... spread operator is a convenient way to copy an array or combine arrays,
    and it can even add new items.
*/ 
console.log(" ************ Copying an array ************** ");
let num = ['four', 'five', 'six'];
let morenum = ['one', 'two', 'three', ...num];
console.log(morenum)        // ['one', 'two', 'three','four', 'five', 'six'];






/*
    3) Concatenating arrays :-- As seen in the last example, the spread operator can quickly combine two arrays,
        an operation known as array concatenation: 
*/
console.log(" ********** Concatenating arrays ************** ");
let num1 = [1,2,3];
let num2 = [4,5,6];
let newNum = [...num1, ...num2];
console.log(newNum)         // [1,2,3,4,5,6]






/*
    4) Using Math functions
    “The Math object's set of functions are a perfect example of the
    spread operator as the only argument to a function.” 
*/
console.log(" ********* Using Math functions ************** ");
let numbers = [9856, 7845, 8659, 9812, 9895, 9586];
console.log(Math.max(...numbers));  // 9895
console.log(Math.min(...numbers));  //7845





/*
    Using an array as arguments
    Since the spread operator “spreads” an array into different arguments, 
    any functions that accepts multiple any number of arguments can benefit 
    from use of the spread operator.
*/
console.log(" ********* Using an array as arguments *********** ");
let cars = ['mercedes', 'bmw', 'audi', 'kia'];
function printCar(cars){
   for(i=0; i<cars.length; i++){
       console.log(cars[i])
   }
}
printCar(cars)  // mercedes    bmw    audi   kia



/*
    Adding an item to a list :--  The spread operator can add an item to an
    another array with a natural, easy-to-understand.
*/
console.log(" ********* Adding an item to a list ************ ");
let t1 = ['books', 'copies', 'bags'];
let t2 = [...t1, 'pencil', 'pen'];
console.log("t2:- ",t2)     //  ['books', 'copies', 'bags', 'pencil', 'pen']