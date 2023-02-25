/*
    g.B:- Map
    
    Map is a collection of keyed data items, just like an Object. 
    But the main difference is that Map allows keys of any type.

    Methods and properties are:

    new Map() – creates the map.
    map.set(key, value) – stores the value by the key.
    map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    map.has(key) – returns true if the key exists, false otherwise.
    map.delete(key) – removes the value by the key.
    map.clear() – removes everything from the map.
    map.size – returns the current element count.
*/

console.log(" ************ Map ************* ")

// Create a Map
let map = new Map();


console.log(" ********* Map.set() ************* ");
// stores the value by the key
map.set(1, "Number key");
map.set(2.6, "double key");
map.set(true, "Boolean key");
map.set('text', "String value");

console.log(map);



console.log(" ********* Map.get() ************* ");
//  returns the value by the key, undefined if key doesn’t exist in map.
console.log(map.get(2.6));
console.log(map.get(2.5));   // undefined



console.log(" ********* Map.has() ************* ");
// returns true if the key exists, false otherwise.
console.log(map.has('text'));       // true
console.log(map.has('ext'));        // false




console.log(" ********* Map.delete() ************* ");
// removes the value by the key.
map.delete('text');
console.log(map);


console.log(" ********* Map.size() ************* ");
// returns the current element count.
console.log(map.size);



console.log(" ********* Map.clear() ************* ");
// removes everything from the map
map.clear();
console.log(map);