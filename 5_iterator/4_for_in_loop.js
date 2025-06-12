// for of loop => array map
// for in loop => array objects

// as we saw we cannot iterate over objects using for of loop
// so we will use for in loop for objects which will iterate over keys
const user = {
    username: "Ahmed",
    lastSeen: new Date("2025-06-20T09:33:00"),
    DOB: new Date("2005-01-12"),
    followers: 10232
}
console.log(user["lastSeen"].toLocaleString())
console.log(user["DOB"].toLocaleString())
console.log(user)
for (const key in user) {
    console.log(`${key} : ${user[key]}`)
}

//can we use for in on array? Yea because array is also key value if you remember basics where key is index
const arr = ["a","b","c"]
for (const key in arr) {
    console.log(`index as key of array ${key} and its value ${arr[key]}`)
}

// but for in loop can not be used in maps