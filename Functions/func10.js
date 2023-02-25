/*
    ii) Prototypal:- 

    In prototypal inheritance, we directly create a new object from an existing object, 
    without any notion of classes. Here we use “Object.create” to create a new object; 
    it takes a parameter object which will be the prototype for the new object.


    Reference:= http://theoryapp.com/javascript-inheritance-pseudoclassical-vs-prototypal/
*/

console.log(" ************* Prototypal *************** ")
let point = {
    x: 0,
    y: 0,
    add: function () {
        return this.x + this.y;
    }
}

let p = Object.create(point);
p.x = 3;
p.y = 4;
console.log(p.add())        // 7

let point_3d = Object.create(point);
point_3d.z = 0;
point_3d.add_3d = function () {
    return this.x + this.y + this.z;
}

let q = Object.create(point_3d);
q.x = 3;
q.y = 4;
q.z = 5;
console.log(q.add());       // 7
console.log(q.add_3d())     // 12