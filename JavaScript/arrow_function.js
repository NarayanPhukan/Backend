// /**
//  * Function with no arguments
//  */
// let hello = () => console.log('Hello World !!')

// /**
//  * Function with parameters and return
//  */

// let sum = (a,b) => a + b
// console.log(sum(5,7))

// /**
//  * Function with arguments, multiple lines
//  */
// let process = (a,b) => {
//     console.log('Needed process : ', a * b)
// }
// process(10, 10)

/**
 * To use only once OR
 * To execute the function as soon as it was created, we use IIFE -------> It's important for interviews
 * IIFE --------> Imidiately Invoked Function Expression
 */
(function(){
    console.log('It is IIFE function')
})() //------> Used () at last to execute it