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
const chai = new menu('Chai',70)
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