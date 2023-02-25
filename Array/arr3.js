/*
    Using array methods: pop, push, peek :-
*/

console.log(" ************* Using array methods: pop, push, peek  ************* ")

let arr1 = new Array();
console.log("arr1:- ", arr1) // []


// 1) Push:- The push() method adds an element to an array (at the last).
arr1.push(111);
arr1.push(222);
arr1.push(333);
console.log("arr1:- ", arr1) // [111, 222, 333]


//2) Pop:- The pop() method returns the value that was "popped out".
let x = arr1.pop()
console.log("X:- ", x) // 333 (the last one)

console.log("arr1:- ", arr1) // [111, 222]


// 3) Peek:- Returns the value at the beginning of a collection, the value that would be returned by shift().

// Reference:- https://melvingeorge.me/blog/peek-operation-arrays-stacks-javascript
// Adding peek method to the array
// prototype chain
Array.prototype.peek = function () {
    if (this.length === 0) {
        throw new error("Out of bounds");
    }
    else {
        return this[this.length - 1]
    }
}

let v3 = arr1.peek();
console.log("v3:- ", v3);   // 222
console.log("arr1:- ", arr1) // [111, 222]