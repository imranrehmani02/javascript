/*
    B. Function Invocation
*/

// 1) Invoking a function as a function
console.log(" ************* Invoking a function as a function ******************* ");
function func1(a, b) {
    console.log("a*b:- ", a * b);
}
func1(3, 15)     // a*b:- 45






// 2) Invoking a function as a method
console.log(" ************* Invoking a function as a method ************** ");
let fullname = {
    first_name: "Aman",
    last_name: "Shaikh",
    namewithsurname: function () {
        return `Full Name:- ${this.first_name} ${this.last_name}`
    }
}
console.log(fullname.namewithsurname());  // Full Name:- Aman Shaikh


// Invoking a function as an object method, causes the value of this to be the object itself.
let car = {
    car_name: "Kia",
    cname: function () {
        return this
    }
}
console.log(car.cname()) // <print whole object>



// 3) Invoking a Function with a Function Constructor
/*
    If a function invocation is preceded with the new keyword, 
    it is a constructor invocation.

    It looks like you create a new function, 
    but since JavaScript functions are objects you actually create a new object 

    A constructor invocation creates a new object. 
    The new object inherits the properties and methods from its constructor.

    The this keyword in the constructor does not have a value.
    The value of this will be the new object created when the function is invoked.
*/
console.log(" *********** Invoking a Function with a Function Constructor ************** ");

function myFunc(a, b) {
    this.fname = a;
    this.lname = b;
}
let res = new myFunc('Adil', 'Khan');
console.log(res);    // {fname: 'Adil', lname: 'Khan'}








// 4) Call, Apply and Bind method
/*
    The Function constructor creates a new Function object.
    Calling the constructor directly can create functions dynamically, which can be executed in the global scope.

    As functions are objects in JavaScript, their invocation is controlled by the 
    apply, call, and bind methods.

    To check if a function is a Function object, we can use the code in the 
    following snippet, which returns true. 
*/
console.log(" ************ Call, Apply and Bind method **************** ")
let result = (function () { }).constructor === Function ? true : false;
console.log('Result:- ', result)             // true







// APPLY
/*
    The apply() method is an important method of the function prototype and is used to 
    call other functions with a provided this keyword value and arguments provided in the 
    form of array or an array like object.
*/
// syntax :- function.apply(this, [argumentsArray])
console.log(" ************** APPLY ************** ");
let arr1 = [11, 22, 33];
let arr2 = [44, 55, 66];

// arr1.push(arr2);
// console.log(arr1)       // [11,22,33,[44,55,66]]

arr1.push.apply(arr1, arr2);
console.log(arr1);      // [11, 22, 33, 44, 55, 66];

let numbers = [458, 457, 985, 562, 256];
console.log(Math.max.apply(null, numbers))  // 985





// CALL
/*
    The call() method is used to call a function with a given this and 
    arguments provided to it individually.

    syntax :- function.call(thisArg, arg1, arg2, ...)
*/
console.log(" ************ CALL ************* ");
function product(name, price) {
    this.name = name;
    this.price = price;
}

function Pizza(name, price) {
    product.call(this, name, price);
    this.category = 'Pizza';
}
let pizza = new Pizza('Paneer masala', 480);
console.log("pizza:- ", pizza)       // {name: 'Paneer masala', price: 480, category: 'Pizza'}


function Car(name, price) {
    product.call(this, name, price);
}
let _car = new Car('Kia', 800000);
console.log("car:- ", _car);         // {name: 'Kia', price: 800000}






// BIND
/*
    The bind() method creates a new function that, when called, has its this keyword 
    set to the provided value, with a given sequence of arguments preceding 
    any provided when the new function is called.

    syntax:- function.bind(this, arg1, arg2, arg3);
*/
console.log(" ************** BIND **************** ");
let p = 9;
let _module = {
    p: 81,
    getP: function () { return this.p }
};

console.log(_module.getP())         // 81

let retrieveP = _module.getP;
console.log(retrieveP());       // 9


let boundGetP = retrieveP.bind(_module);
console.log(boundGetP());           // 81