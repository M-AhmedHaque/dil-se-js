// immediately invoked function expression
// protect function from getting polluted from outside scope
// is helpful when we want a fuction to be excuted immediately

// Uses:
// Encapsulation of code
// Avoid polluting global scope
// Run setup/config logic once
// Create private variables/functions (similar to closures)

//function def then args
// ()()

//unnamed iife
((port)=>{
    console.log(`DB Connected, port:${port}`)
})(4000);
//this semi colon is very important

// iife likhnay say pehlay wali statement ya piece of code par semicolon lagao
//because
//  if you write an IIFE right after another statement or function without a semicolon, the parser might misinterpret the IIFE as a function call on the previous statement.

//named iife
(function dbConnection(port){
    console.log(`DB Connected, port:${port}`)
})(4001)

