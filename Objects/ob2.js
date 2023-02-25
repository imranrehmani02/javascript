// Creating prototypal linked object


console.log(" ********  Prototypal Linked Object  ********* ")
let obj1 = {
    name: "Aman",
    age: 20,
    course: "Neet"
}

// obj1.prototype.getName = ()=>{   // ERROR:- getName is not a function
//     return this.name
// }


function obj2(givenName) {
    this.name = givenName
}

let obj3 = obj2("Ram");
console.log("obj3:- ", obj3) //undefined

let obj4 = new obj2("Sadik");
console.log("obj4:- ", obj4)   // obj2 {name: 'Sadik'}


obj2.prototype.getName = function () {
    return this.name;
}

console.log("obj.prototype:- ", obj2.prototype) // {getName: <function>}