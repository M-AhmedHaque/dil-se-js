// data structure that can store data of same datatype as well as mixed datatype
let array = ["Ahmed" , "Haque" , "ahmed@gmail.com" , 21 , true , 3.73]
console.log(array)

let array1 = [1,2,3,4,5,6]
array1.push(7) // from end
array1.pop() //from end
array1.unshift(0) //inserts in the begining, not effcient cause every element needs to be shifted forward
array1.shift() // removes from begining and shifts every element to left
console.log(array1)

console.log(array1.includes(6))
console.log(array1.indexOf(6))

let array3 = array1.join() // join function return string with comma separated array contents 
console.log(array3)

let array4 = new Array(100,200,300,400,500,600)
let newArr1 = array4.slice(1,4) // wohi old, start from first index till 3rd
console.log(array4)
console.log(newArr1)

let newArr2 = array4.splice(1,4) // splice alters original array, it will transfer elements in mentioned range inclusive to new array leaving behinf remaining in the original 
console.log(array4) //100
console.log(newArr2) //200, 300, 400, 500