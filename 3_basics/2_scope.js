let num1 = 1;
const num2 = 2;
var num3 = 3;

// any parenthesis is a block

if(true) {
  let num1 = 10;
  const num2 = 20;
  var num3 = 30;
}

// faulty var demo
console.log(num1)
console.log(num2)
console.log(num3)

// mini hoisting
one(3) //can do
function one(num){
    return num+1
}

// two(3) cant do
const two = function(num){
    return num+2
}


