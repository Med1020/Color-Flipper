const colors = ["#DEE2FC","#A5F0C5","#F1DDDF","#DFE667"]

const btn = document.querySelector('.btn')
const color = document.querySelector('.color')

btn.addEventListener('click',()=>{
    //get random no. b/w 0-3
    const randomNumber=getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent =colors[randomNumber]
})

const getRandomNumber = ()=>{
    return Math.floor(Math.random()*colors.length)
}