// always check what are you comparing, always take care of datatypes
// its also important when you get data from forms in backend
// in context of comparisons the result can be unexpected if you compare values with diff datatypes

console.log(2==1)
console.log(2>=1)
console.log(2<=1)
console.log(2!=1)
console.log(2>1)
console.log(2<1)

//things get ulgy in cases below
// ye kabhi sahi chalay ga kabhi nhi
// so good practice is check type and do necessary conversions and then do what you wanna do
console.log("2" > 1)
console.log("0" > 1)

// acha aik aur baat == and comparisons work differently  =>,<=,>,< will convert null to 0
console.log(null>0)
console.log(null>=0)
console.log(null==0)
