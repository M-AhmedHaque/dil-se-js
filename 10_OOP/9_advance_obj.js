// an object has properties and these properties have descriptor, which are writable, enumerable, configurable, value
// based on these descriptor we are allowed to do operations
// descriptors are separate for each property of Object

const descripter = Object.getOwnPropertyDescriptor(Math, "PI") //we cant change it because writable:false



// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}

for (const key in chai) {
    console.log(`${key} : ${chai[key]}`)
}