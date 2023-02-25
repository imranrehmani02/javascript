/*
    Ternary:- A ternary operator can be used to replace an if...else statement in certain situations.
              A ternary operator evalutes a condition and executes a block of code based on the condition.

    Syntax :- condition ? executeIfConditionTrue : executeIfConditionFalse
*/


let car = {
    name: "Kia",
    color: "white"
}
console.log("CAR:- ", car)

let isMyCar = car.color === "white" && car.name === "Kia" ? "This is my car" : "This is not my car.";
console.log("isMyCar:- ", isMyCar)


car = {
    name: "Kia",
    color: "black"
}

console.log("CAR:- ", car)
isMyCar = car.color === "white" && car.name === "Kia" ? "This is my car" : "This is not my car.";
console.log("isMyCar:- ", isMyCar)