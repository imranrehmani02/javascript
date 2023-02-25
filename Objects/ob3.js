/*
    Accessing properties using dot and brackets[]
*/

console.log(" **********  Accessing Properties using dot and brackets *********** ")

let car = {
    name: "BMW",
    model_name: "Q3",
    model_year: 2018,
    color: "White"
}

// Access object properties using dot(.)
// syntax:-  objectName.peropertyName
console.log("car.name : ", car.name)        // BMW
console.log("car.model_year : ",car.model_year)     // 2018



// Accessing object properties using bracket
// Syntax:- objectName['propertyName']
console.log("car['model_name'] : ",car['model_name'])       // Q3
console.log("car['color'] : ",car['color'])         // White