/*
    E. Role and prototypal object in reading and writing properties
*/

console.log(" ***************  Role and prototypal object in reading and writing properties *******************")
// 1) Using the object literal syntax
let ob1 = {
    name: "Shaan",
    work: "Developer"
}

console.log("ob1:- ", ob1)   // print object


// 2) Object constructor
let student = new Object();

student.name = "Akram";
student.class = "11th D";

student.info = function(){
    return `${student.name} is student of class ${student.class}`
}

console.log("Student.info():- ",student.info()) // Akram is student of class 11th D


// 3) Constructor
function vehicle(name, maker){
    this.name= name,
    this.maker = maker
}

let car1 = new vehicle("Baleno", "Suzuki")
console.log("car1:- ",car1)     // vehicle{name : "Baleno", maker: "Suzuki"}



// 4) Prototypes
let company = {
    name: "Infobeans",
    address: "Indore"
}

console.log("company:- ",company)       // {name:"Infobeans", address:"Indore"}

let obj5 = company;
console.log("obj5:- ",obj5.address)     // Indore

let obj6 = Object.create(company)
console.log("obj6:- ",obj6)         // {}
console.log("obj6.name:- ",obj6.name)       // Infobeans