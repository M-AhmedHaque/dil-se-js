// first see the picture 4_.png
// you would hear words like call, bind frequently in JS
// used in react but they are not used much now because of updates and overlay abstraction

function setUsername(username){
    //some DB calls
    this.username = username
}

function createUser(username,email,password){
    setUsername(username)
    this.email = email
    this.password = password
}

const user = new createUser('mahmed','Ahmed','ahmed@gmail.com')
console.log(user)

//by seeing above code we would think that we will get a new object with all three properties,
// but that doesnot really happens we get this: createUser { email: 'Ahmed', password: 'ahmed@gmail.com' }
// it is because we are not getting the context of setUsername, its context gets popped out of call stack and the information is lost
// so to counter this issue, we use .call and pass context "this" of outer function so that the inner function gets the context

function setUsername2(username){
    //some DB calls
    this.username = username
}

function createUser2(username,email,password){
    setUsername2.call(this, username)
    this.email = email
    this.password = password
}

const user2 = new createUser2('mahmed','Ahmed','ahmed@gmail.com')
console.log(user2)