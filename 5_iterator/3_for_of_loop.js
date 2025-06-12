// for of loop => array map
// for in loop => array objects

// for of iterator
const arr = [1,2,3,4,5]
for (const number of arr) {
    console.log(number)
}

// map data structure in js, key value pair like object but unique
const map = new Map()
// console.log(typeof map) its object
map.set("a","ahmed") //Map(1) { 'a' => 'ahmed' }
map.set("a","ali") //Map(1) { 'a' => 'ali' }
map.set("s","sadiq") //Map(2) { 'a' => 'ali', 's' => 'sadiq' }
console.log(map)

for (const entry of map) {
    console.log(`${entry[0]} for ${entry[1]}`)
}
// as you can see you get each key-value pair as an array in map, so we can use array destructuring for it

for (const [key,value] of map) {
    console.log(`${key} for ${value}`)
}

// as we saw we can iterate over map object, but can we iterate like this over normal object? The answer is no, objects are not iterable using this syntax

