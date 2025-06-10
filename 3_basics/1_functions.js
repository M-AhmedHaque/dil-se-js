function greet(message){
    console.log(message)
}

function add(num1,num2){
    return num1+ num2
}

//this parameter demonstrate rest operation, it combines all multiple args into one array
function calculateCartPrice(...values){
    let total = 0
    values.map((vals)=>{
        total+=vals
    })
    return total
}

//function taking object
function takesObject(user){
    return `username: ${user.name}  email: ${user.email}`
}

//take array 
function takeArray(array){
    array.map((val)=>{
        console.log(`${val}`)
    })
}

greet("Hello, how are you?")

console.log(add(1,2))

console.log(calculateCartPrice(1,2,3,4,5))

let obj = Object.create({})
obj.name = "Muhammad Ahmed Haque"
obj.email = "ahmed@gmail.com"
console.log(takesObject(obj))

let array = [1,2,3,4,5]
takeArray(array)
