const arr = ["a","b","c"]
console.log(typeof arr) //object
// array is an object and it comes with some functions as well which can be used directly and these function are more aware about the array, like this we have for each loop which comes in array prototype

// forEach accepts a callback function as argument, these are function with no name and will be executed everytime on each element of array to perform specialized task

// at each iteration we will have access to value,index,arr
arr.forEach(function(value,index,arr){
    console.log(`${value}   ${index}    ${arr}`)
})

// we can also use arrow function
arr.forEach((value,index,arr)=>{
    console.log(`${value}   ${index}    ${arr}`)
})

const data = [
    {
    username: "Ahmed",
    lastSeen: new Date("2025-06-20T09:33:00"),
    DOB: new Date("2005-01-12"),
    followers: 10232
    },
    {
    username: "Sadiq",
    lastSeen: new Date("2025-06-20T09:33:00"),
    DOB: new Date("2005-01-12"),
    followers: 4303
    },
    {
    username: "Subhan",
    lastSeen: new Date("2025-06-20T09:33:00"),
    DOB: new Date("2005-01-12"),
    followers: 4316
    },
]
data.forEach((user)=>{
    console.log(user.username)
})
