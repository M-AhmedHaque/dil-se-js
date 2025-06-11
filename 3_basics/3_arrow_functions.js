// for arrow fun we need to know about this and for this we will go back to objects

// this refers to current context
const user = {
    username: "Ahmed",
    age: 21,
    greeting: function(){
        console.log(`${this.username}, Welcome Back.`)
    }
}

// okay so in object this current context was its attributes
//but what will be the current context conext here in global?

console.log(this) //no current context {} in nodeJs environement
// if we do this on brower we get windows and some other in current context

function check(){
    console.log("Check 1")
    console.log(this) // we get some functions and getter/setter in the current context of functions
}
check()

let check2 = function(){
    console.log("Check 2")
    console.log(this) // we get some functions and getter/setter in the current context of functions
}
check2()

// now lets see arrow function
const check3 = ()=>{
    console.log("Check 3")
    console.log(this)
}
check3() //no current context in arrow functions

const add = (num1,num2) => {
    return num1+num2 //explicit return
}
const subtract = (num1,num2) => (num1-num2) //implicit return
const subtracto = (num1,num2) => num1-num2 //implicit return
const returno = ()=>({ user:"Ahmed" , age:21 }) //implicit return