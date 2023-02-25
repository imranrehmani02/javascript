/**
 * Stack:- A stack is a data structure that holds a list of elements.
 *         A stack works based on the LIFO principle i.e., Last In, First out,
 *          meaning that the most recently added element is the first one to remove.
 */


let stack = []; 

stack.push(1);
stack.push(20);
stack.push(true)
console.log(stack)          // [1, 20, true]


stack.pop()
console.log(stack)          // [1, 20]





 // Create Stack
 class Stack {
    constructor(){
           this.items = [];
           this.top = 0;
    }

    push(element) {
           this.items.push(element);
    }

    pop(){
           if(this.items.length == 0)
           returns -1;
           return this.items.pop();
    }

    peek(){
           return this.items[this.items.length -1];
    }

    isEmpty(){
           return this.items.length == 0;
    }
}