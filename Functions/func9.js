/*
    C. Inheritance models/patterns using functions

    i)  Pseudoclassical Inheritance:- 

    The pattern of pseudoclassical inheritance uses “constructor function” and the 
    “new” operator to create objects, and uses the “prototype” property to build the inheritance chain.
     A constructor function is given a “prototype” property; this property is inherited by all instances.

    The following code creates a constructor function (pseudoclass) “Point”, and then uses 
    the “new” operator to create an instance. It also adds a method to the “prototype” property 
    of “Point”; this is inherited in the instance.



    // Reference = http://theoryapp.com/javascript-inheritance-pseudoclassical-vs-prototypal/
*/

console.log(" ************** Pseudoclassical Inheritance **************** ");

function point(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

point.prototype.add = function () {
    return this.x + this.y;
};

let p = new point(3, 4);
console.log(p instanceof point);        // true
console.log(p.add());       // 7