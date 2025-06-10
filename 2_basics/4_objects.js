// object using constructor 
let obj = Object.create({})
obj.name = "Muhammad Ahmed Haque"
obj.email = "ahmed@gmail.com"
console.log(obj)

// we can also nest objects within objects as much we want
let otherObj = {
    age:21,
    active:true,
}
console.log(otherObj)
//                              source,target1,target2,...
let combineObj = Object.assign({},obj,otherObj)
console.log(combineObj)

let anotherCombineObject = {...obj,...otherObj} //spread use hota 90% and its modern
console.log(anotherCombineObject)

//some useful functions
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

//object de-structure
let {name,email} = obj
console.log(name,email)