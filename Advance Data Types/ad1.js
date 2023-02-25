/*
    g. Advance Datatypes in Javascript

    A. Stack:- Stacks are an elementary data structure, they are the last item in, 
                the first item out (LIFO). The last item added into the stack will be the first 
                one taken out of the stack.

        Stacks are basically arrays where the only thing you can do, more or less, is to push and pop.



        Interface:
        1. Constructor function
            1. Storage

        2. Methods
            1. push(el)     // Adds an element to an stack
            2. pop()        // Removes and returns the last element of the stack
            3. peek()       // Returns the last element of the stack
            4. size()       // Returns an integer with the size of the stack
*/


let stack1 = [];

console.log(" ************** stack.push() ************** ")
stack1.push(11);
stack1.push(22);
stack1.push(33);
stack1.push(44);
stack1.push(55);

console.log("stack.push():- ",stack1)



console.log(" ************* stack.pop() *************** ")
console.log(stack1.pop())
console.log("stack1:- ",stack1)




// console.log(" *************** stack.peek() ************* ")
// console.log(stack1.peek())



// console.log(" *********** stack.size() ************* ")
// console.log(stack1.size())