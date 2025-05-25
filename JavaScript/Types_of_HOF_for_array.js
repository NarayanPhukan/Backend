/**
 * forEach method
 */

players = ["ZeroSync", "UltraSync", "AbsoluteSync", "NormSync"]

players.forEach(player => {
    console.log(player)
});

/**
 * map method ------> creates a new transform array
 */

arr = [1,2,3,4,5,6]
cube_arr = arr.map(num =>
    num ** 3
)
console.log(arr)
console.log(cube_arr)

/**
 * filter method
 */

let arr1 = [1,2,3,4,5,]
let even = arr1.filter(num => 
    num % 2 == 0
)
console.log(even)