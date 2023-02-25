/**
 * Map:-  Map is a collection of keyed data items, just like an object.
 *          but the main diffrence is that map allows all types of keys.
 */


// Crates the Map
let map = new Map();


// Store the value by the key
map.set(1, "One");
console.log(map)  // One


map.set(true, "boolean")
console.log(map)  // "boolean"

map.set(0.5, false)
console.log(map) // false

map.set('array', ["a",2,3,'string', false, 5.6, null])
console.log(map) // array


// returns the value by the key, undefined if key doesn’t exist in map.
console.log(map.get(true))    // "boolean"
console.log(map.get('azad'))    // undefined


// returns true if the key exists, false otherwise
console.log(map.has('array'))           // true
console.log(map.has('azad'))           // false



// removes the value by the key
console.log(map.delete(0.5))        // true
console.log(map)        // show all values except deleted one



// returns the current element count
console.log(map.size)       // 3


// removes everything from the map
map.clear()
console.log(map)    //  {} (empty object)