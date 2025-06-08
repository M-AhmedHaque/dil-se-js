let name = 'Ahmed'
// or
let email = new String("ahmed@gmail.com")

// one more things, use backticks syntax for formatted output instead fo using + for cancatinations

console.log(email.length)
console.log(email.charAt(2))
console.log(email.indexOf('d'))
console.log(email.includes('gmail.com'))
console.log(email.replace('gmail.com','hotmail.com'))

let newEmail = email.substring(0,5)  //this doesnot support -ve values 
console.log(newEmail) //the upper bound is exclusive you can say

let anotherEmail = name.slice(-2,5) //first arg tell from which index to start,second arg tell till which index of string to include but exclusive means k-1 place
console.log(anotherEmail)

// toremove wwhtite spaces use trim
console.log(email.trim())

// split function splits the string based on separator OR separator with limiter
let anotherName  = "Muhammad Ahmed Haque"
console.log(anotherName.split(' ',2)) //[ 'Muhammad', 'Ahmed' ]
