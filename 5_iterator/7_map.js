// map mujhay ziada sahi lagay, return bhi kardetay hain aur kam bhi wesi hojata

const array = [1,2,3,4,5,6,7,8]
const newArr = array.map( (value)=> ( value+10) )
console.log(newArr)

// chaining
const anotherArr = array
.map((value) => (value*10))
.map((value) => (value-1))
console.log(anotherArr)