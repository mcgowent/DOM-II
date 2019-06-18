// Your code goes here
let funBus = document.querySelector('.logo-heading')

funBus.addEventListener('mouseover', event => {
    event.target.style.fontSize = '10rem'
})

funBus.addEventListener('mouseleave', event => {
    event.target.style.fontSize = '1rem'
})

funBus.addEventListener('dblclick', event => {
    event.target.style.fontSize = '5rem'
    event.target.style.color = 'red'
})

funBus.addEventListener('click', event => {
    event.target.style.fontSize = '50rem'
    event.target.style.color = 'blue'
})

let img = document.querySelector('img')

img.addEventListener('drag', event => {
    event.target.style.display = 'none'
})

let intro = document.querySelector('body')

intro.addEventListener('wheel', event => {
    event.target.style.backgroundColor = 'red'
    event.target.style.color = 'black'
})

intro.addEventListener('keydown', event => {
    event.target.style.backgroundColor = 'blue'
    event.target.style.color = 'white'
})

intro.addEventListener('resize', event => {
    event.target.style.backgroundColor = 'black'
    event.target.style.color = 'black'
})