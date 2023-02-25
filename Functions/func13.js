/*
    v) Using Class keyword
    
    Classes are a template for creating objects. They encapsulate data with
    code to work on that data. Classes in JS are built on prototypes but also have some syntax and 
    semantics that are not shared with ES5 class-like semantics.
*/


console.log(" ************* CLASS ************* ");

// Class declarations
class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    // Prototypes methods
    calcArea(){
        return this.height * this.width;
    }
}

let square = new Rectangle(14,15);      // 210
console.log(square.calcArea());


let plotSize = new Rectangle(15,40);
console.log(plotSize.calcArea());       // 600



console.log(" ************ Inheritance ************** ");
// Inheritance
class Cube extends Rectangle{
        

    // We can create additional methods in child class
    calcBorder(){
        return (this.height + this.width) * 2;
    }
}

let home = new Cube(11,22);
console.log(home.calcArea())        // 242
console.log(home.calcBorder())      // 66