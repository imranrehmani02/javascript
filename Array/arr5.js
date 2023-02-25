/*
    Serializing / Deserializing array

    JSON.stringify();
    JSON.parse();
*/

console.log(" ********* Serializing / Deserializing array *********** ");

let numbers = [11, 22, 33, 44, 55];
let serializeArray = JSON.stringify(numbers);
let typeOfSA = typeof (serializeArray)
console.log("serializeArray:- ", serializeArray) // [11,22,33,44,55]  (string)
console.log("typeOfSA:- ", typeOfSA)  // string


let deserializeArray = JSON.parse(serializeArray);
let typeOfDA = typeof (deserializeArray);
console.log("deserializeArray:- ", deserializeArray); // [11,22,33,44,55]  (array)
console.log("typeOfDA:- ", typeOfDA);  // object