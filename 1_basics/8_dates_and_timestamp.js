// currently there is work going on temporal api, it is going to replace the date in future when all browsers get integrated with it

let date = new Date()
console.log(`current date: ${date}`)

console.log(`get time funtion: ${date.getTime()}`)

console.log(`get full year funtion: ${date.getFullYear()}`)

console.log(`toISOString funtion: ${date.toISOString()}`)

console.log(`toUTCString funtion: ${date.toUTCString()}`)

console.log(`to json funtion: ${date.toJSON()}`)

console.log(`to string funtion: ${date.toString()}`)

console.log(`time funtion: ${date.getTime()}`) //gives millisecond time, helpful when you want to campare timestamps
 
let newDate = Date.now()

console.log(newDate)

//apni date declare karni? 
let apniDate = new Date(2025,5,9,3,40,45) //month ki 0 say indexing ha: year,month,day, hour, minute, second
console.log(`apni date ${apniDate}`)
let anotherMyDate = new Date("01-12-2005")
console.log(`My birthday: ${anotherMyDate}`)

//localeString function is widely used on customizing format
let customDate = new Date()
console.log(customDate)
console.log(customDate.toLocaleString('default',{
    weekday:"long",
    month:"long",
    year:"numeric"
}))
