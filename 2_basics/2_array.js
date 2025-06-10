// push, concat, spread, is from of, 
let array1 = [1,2,3,4,5,6]
let array2 = [7,8,9,10,11]
array1.push(array2)
console.log(array1) //[ 1, 2, 3, 4, 5, 6, [ 7, 8, 9, 10, 11 ] ] but we didnot want this
array1.pop()

let newarr = array1.concat(array2) // return new array tameez ki
// [
//    1, 2, 3, 4,  5,
//    6, 7, 8, 9, 10,
//   11
// ]
console.log(newarr)

// one more method is by spreading
let newarr2 = [...array1,...array2]
console.log(newarr2) //same result as concat

//flat function flattens array with in array, you can specify depth to which nested array should be flattened or give infinity if you dont care

let test =  Array.isArray(1,2,3,4,5)
console.log(test) //false
let test2 =  Array.isArray([1,2,3,4,5])
console.log(test2) //true
let test3 =  Array.from([1,2,3,4,5]) //array banaday ga, but ye kaam tu wesay bhi hojata
console.log(test3)
let test33 =  Array.from("Ahmed") //array banaday ga, but ye kaam tu wesay bhi hojata
console.log(test33)
let test4 =  Array.of(1,2,3,4,5)
console.log(test4) //false 