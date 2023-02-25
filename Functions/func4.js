/**
 * iv) Using rest operators in function arguments 
 * 
 * Rest arguments:- A function definition's last parameter can be prefixed with 
 * "..." (three U+002E FULL STOP characters), which will cause all remaining 
 * (user supplied) parameters to be placed within a "standard" JavaScript array.. 
 * Only the last parameter in a function definition can be a rest parameter.
 * 
 * 
 * example:-
 * 
 * function box(a, b, ...rest){
 * }
 */

console.log(" ************* Rest operator *********** ");

function mp(...c) {
    let sum = 0;
    for(let i of c){
        sum += i;
    }
    console.log("sum:- ",sum)  // 15
}
mp(1, 2, 3, 4, 5)




function states(...rest){
    rest.forEach(stateName=>{
        console.log("State name:- ",stateName)          // mp  rj  gj  ch
    })
}
states('mp', 'rj', 'gj', 'ch');