const clock = document.querySelector('#clock')
console.log(clock)
//1000 = 1 sec, setInterval executes a function after every mentioned time
setInterval(function(){
    const date = new Date()
    const time = date.toLocaleTimeString()
    clock.innerHTML=time //yaha mistake kar raha tha this innerHTML is not a function
    console.log(time)
    
},1000)