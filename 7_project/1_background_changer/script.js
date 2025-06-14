const buttons = document.querySelectorAll('.button')
// console.log(buttons)

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target.id)
        document.body.style.backgroundColor = e.target.id
    })
})