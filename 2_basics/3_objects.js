// 2 ways: literal and constructor
// sigleton => when we make using constructor
// Object.create

// we will talk about the literal method
const sym = Symbol("key1")
const user = {
    // key:value  key is treated as string
    name: "Muhammad Ahmed Haque",
    "institute name": " FAST-NUCES", //aikk baat, but cant be accessed using obj.attributeName 
    "age": 21, //can be accessed as user.age
    location: "Karachi",
    email: "ahmed@gmail.com",
    //to add symbol in a object follow a specific syntax
    [sym]:"mykey1"
}

// generally this syntax is used
console.log(user.name) //works but not every time, coz you cant access institute name using this syntax

console.log(user["institute name"]) // this the only way to access institute name in this case

console.log(user["name"])
console.log(user[sym])
console.log(typeof user[sym])
// if I log user i can see symbol referenced
console.log(user)

// if we want to stop object from being getting changed we can freeze
// Object.freeze(user)
//modify
user.email = "ahmed@google.com"
// add function
user.greet = function(){
    console.log(`Welcome Back, ${this.name}`)
}
console.log(user.greet())