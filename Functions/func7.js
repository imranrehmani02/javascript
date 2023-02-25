/*
    vii) Passing function as an argument
*/

console.log(" *********** Passing function as an argument *********** ");

// 1
console.log(" ******* Callback ******** ")
function unbox(mobile){
    mobile()
}

function mobile(){
    console.log("Galaxy S21");
}
unbox(mobile)   // Galaxy S21


// 2
console.log(" ********* setTimeout ********* ");
function car(){
    console.log("  CAR  ");
}
setTimeout(car, 500) // CAR (after .5 sec)



// 3
console.log(" ********** Pass arguments properly with callbacks ************* ");
function square(n){
    console.log(`${n} squared is ${n*n}`);
}
let arr = [1,2,3,4,5];
arr.forEach(n=>{
    square(n)      // 1 squared is 1 | 2 squared is 4 | 3 squared is 9 | 4 squared is 16 | 5 squared is 25
})




// 4
console.log("*********** Index and value ************* ");
function indexAndValue (value, index){
    console.log(`${value} is situated on index ${index}`);
}

let arr2 = ['BMW', false, 3.56, 895]
arr2.forEach(indexAndValue) 
// BMW is situated on index 0 | false is situated on index 1 |  3.56 is situated on index 2 | 895 is situated on index 3