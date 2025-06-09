// math operations 
// math is kind of library which has functions
// u can  see those function by logging Math on browser

// let talk about random
let min = 100
let max = 200
let randomNumber = Math.floor(Math.random()*(max-min+1)) + min
console.log(randomNumber)
console.log(Math.round(2.112312312))
console.log(Math.floor(2.112312312))
console.log(Math.ceil(2.112312312))
console.log(Math.min(1,2,3,4,5))
console.log(Math.max(1,2,3,4,5))

// some  number operaetions
let number = new Number(123.12345)
console.log(number.toFixed(2))
console.log(number.toPrecision(4)) //return string containing number=precision, remember it by precise.

let numberToString = number.toString() //after converting to string we can apply all the string operations
number = String(number) // method 1
console.log(typeof number) //method 2
console.log(typeof numberToString)