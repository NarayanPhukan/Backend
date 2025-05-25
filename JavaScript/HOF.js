/**
 * First Variation of HOD
 
 function operation(operatorFn, a, b) {
    return operatorFn(a,b)
}

function add(a,b){
    return a + b
}

let result = operation(add, 10,10)
console.log(result)
*/

/**
 * Second Variation
 */

function getGreetMethod() {
    return function() {
        console.log("Hello World !!!")
    }
}

let greet = getGreetMethod()
console.log(typeof greet)
greet()