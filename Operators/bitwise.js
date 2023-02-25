// Bitwise:- 


let a = 5;
let b = 6;
/*
    bitwise AND:-  ( A & B)

    A   B       A&B
    0   0       0
    0   1       0
    1   0       0
    1   1       1
*/

let c = a & b; // 4
console.log("Bitwise AND:- ", c)


/*
    bitwise OR:-  (A | B)

    A   B       A|B
    0   0       0
    0   1       1
    1   0       1
    1   1       1    
*/

c = a | b; // 7
console.log("Bitwise OR:- ", c)


/*
    bitwise not ( ~A)

    A   ~A
    0   1
    1   0
*/

c = ~a // -6
console.log("Bitwise NOT:- ", c)



/*
    Bitwise XOR (^)

    A   B       A^B
    0   0       0
    0   1       1
    1   0       1
    1   1       1
*/

c = a ^ b;  // 3
console.log("Bitwise XOR:- ", c)


/*
    Left Shift (A<<B)
*/

c = a << b;  // 320
console.log("shift left << :- ", c);


/*
    Shift right (A>>B)
*/

c = a >> b; // 0
console.log("Shift Right >> :- ", c)