// in js datatypes are mainly categorized in 2 types based on how they are stored  and accessed in memory

// js is dynamic typed language. the datatypes of variables are decided on runtime

// 1. primitive ----- inki copy milti apko, ye stack main jatay
// Number, String, Boolean, null, undefined, symbol, bigInt

// 2. non primitive (referenced), ye heap main jatay
// array, object, function

let array = ["Ahmed", "Sadiq" , "Subhan" , "Irtiza"] //datatype object

let object = {  //datatype object
    name: "Ahmed",
    age : 21
}
//when you assign one object to another, you get its reference, and any changes you to new variable reflects on original object as shown below
let secondObject = object

secondObject.name = "Ahmed Haque"


let firstFunction = function(){ //datatype function object
    console.log("Hello")
}
let secondFunction = firstFunction // now secondFunction has reference of firstFunction

// acha when i did this, changes were not reflecting to other firstFunction because i did reassignment which broke reference
// Mutating a referenced object affects all variables pointing to it.
// Reassigning a variable just changes its reference — it doesn’t affect the original variable.
secondFunction = function(){ //datatype function object
    console.log("Hello World")
}
// we cannot directly change or mutate behavior of function in js
//functions in javascript are just object, you can add properties to it like this
secondFunction.purpose = "Fazool  aik dammmm"


console.log(typeof object)
console.log(object)
console.log(secondObject)

firstFunction()
secondFunction()
console.log(typeof secondFunction)
console.log(secondFunction.purpose)