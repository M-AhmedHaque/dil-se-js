// promises are objects, which tells completions or failures of asynchronous events and its resulting values.
// there are tasks that may take longer like db access, encryption and file reads, we do them async 
// So, promises are integrated in ES6, so before it Q and bluebird libraries were used for async programing

//there 2 things: 1. Creating promises 2. consuming promises

//creating a promise
const promiseOne = new Promise(function(resolve,reject){
    //do any async task
    setTimeout(function(){
        console.log('Asyc task completed')
        // as out async task is completed we will add resolve(), it sets some values in background
        resolve()

    },1000)
})
//the above will return something in then()
// so a promise is created
//Lets consume a promise

promiseOne.then(function(){
    console.log('promise consumed')
})
// then takes a callback/handler/function
// then is direclty related to resolve
// at this point we have not connected then with resolve, so we will add resolve() after the aysnc code 

//now we will create and consume in one step
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Asyc task 2 completed')
        resolve()
    },2000)
}).then(function(){
    console.log('promise 2 consumed')
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        //suppose it get some data from database
        //now it has to return so that it can be available in then when promise is consumed
        const user = { name:"Ahmed" , email:"ahmed@gmail.com"}
        resolve(user)
    },3000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = false
    if(!error){
        const user = { name:"Ahmed" , email:"ahmed@gmail.com"}
        resolve(user)
    }else{
        const message = {code:404 , message:"User not found"}
        reject(message)
    }
    },4000)
})
promiseFour
.then((user)=>{
    console.log(user)
    return user.email
})
.then((name)=>{
    console.log(name)
})
.catch((error)=>{
    console.log(error)
})
.finally(function(){
    console.log('Do what needs to be done finally')
})


//now we will write the same code using async await syntax
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = true
    if(!error){
        const user = { name:"Ronaldo" , email:"ronaldo@gmail.com"}
        resolve(user)
    }else{
        const message = {code:404 , message:"Ronaldo not found"}
        reject(message)
    }
    },4000)
})

const consumePromiseFive = async()=>{
    //when using this synax it is necesary to use try catch to gracefully handle the errors
    try {
        const user = await promiseFive
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()


//lets use fetch object now using .then().catch()
//fetch returns a promise 
// just like promiseFive return in above function returns a promise
fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json()
})
.then(function(jsonData){
    console.log(jsonData)
})
.catch(function(error){
    console.log(error)
})

// lets use fetch in try catch syntax
const fetchData = async ()=>{
    try {
        const data = await fetch('https://api.github.com/users/M-AHmed-Haque') ///wont be found, so will go in error catch
        const jsonData = await data.json()
        console.log(jsonData)
    } catch (error) {
        console.log(error)
    }
}
fetchData()