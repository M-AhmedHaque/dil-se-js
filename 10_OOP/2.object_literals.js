// object literal is simply object that we define

const user = {
    username: "Ahmed",
    email:"ahmed@gmail.com",
    detais:function(){
        console.log(`${this.username} ${this.email}`)
    }
    // here this represents current context
}

// but if i want multiple user, i will have to copy and paste, doesnot feel good

//bari khatarnak chez dekhnay walay hain
// constructor function, basically "new" keyword is  used for creating new instances.
// it works in 4 steps:
// 1. first it creates an empty object
// 2. then it packs the attributes
// 3. puts in this, which is context and then returns it
// 4. receives returned object

function User(username, email){
    // we can add attributes
    this.username = username
    this.email =email
    // we can also create functions

    // basically this is the context of function
    return this
}

const userOne = new User("ahmed","ahmed@gmailcom")
const userTwo = new User("sadiq","sadiq@gmailcom")
console.log(userOne)
console.log(userTwo)
