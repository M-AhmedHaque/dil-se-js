// yahan user ha

// js kabhi har nhi manti
// osko agar koi chez nhi milti tu wo uper layer main dekhay gi aur uper layer main daikhay gi jab tak osko null na mil jaye
// this is prototypal behavior of JS
// arrow function main this nhi hota kiokay prototype osmy ajata ha
// new, this, classes, prototype inheritance sab prototype say mili ha

//JS main har chez aik object hoti ha: array, string, function
// and they have prototype within a prototype within a prototype within a prototype ...

function menu(name,price){
    this.name = name
    this.price = price
}
menu.prototype.display = function(){
    console.log(`${this.name} - ${this.price}`)
}
const chai = new menu('Chai',70)//menu() is constructor function
console.log(chai)
// while calling function we dont need to use prototype JS resolves it automatically because JS har nhi manti
chai.display()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// --------------------------------------------------------------------------------------------------------------------

// matlab we want to inject a function in Object of JS, so it will result in all other things getting that function because they are also made from object
// asal prototype yahan say shru ha

 let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

//demo: prototypal inheritance can be seen

// heroPower.hitesh()
// myHeros.hitesh()              gets from object
// myHeros.heyHitesh()
// heroPower.heyHitesh()         this is in array only so its not present in Object


// --------------------------------------------------------------------------------------------------------------------
// inheritance in JS

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    //the syntax of inheritance is a bit wierd but this is how its done using proto,
    __proto__: TeachingSupport
}

//the syntax of inheritance is a bit wierd but this is how its done using proto,
// teacher gets the properties and methods of User
Teacher.__proto__ = User

// modern syntax
// teaching support main Teacher ki properties and attributes agaye
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`); //this kia ha jisnay call kia, yani string. this actually points to the string
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()