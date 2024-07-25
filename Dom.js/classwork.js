document.body.style.background = 'green'


const idSec = document.getElementById('third')
third.textContent = 'Now We Ride'
idSec.style.backgroundColor = 'aqua'

const lists = document.querySelectorAll('ol>li')
lists[0].textContent = 'What is going on'
lists[0].style.backgroundColor = 'yellow'


// const lists = document.querySelectorAll('nth-of-type')
// list[8].textContent = 'What is going on in this class'

const eight = document.querySelector('li.toyota:nth-child(8)')
const nine = eight.nextElementSibling
nine.textContent = 'What is going on in this class'
nine.style.backgroundColor = 'white'

// const list =document.querySelectorAll(ol>li)

lists[9].style.background = 'linear-gradient(90deg, aqua 30%, yellow 30%, yellow 60%, red 60%)'

const april = document.getElementsByClassName('april')
lists[4].style.backgroundColor = 'blue' 
lists[4].textContent = 'I love Arsenal Football Club'

const dec = document.getElementsByClassName('dec')
lists[6].style.backgroundColor = 'white'
lists[6].textContent = 'I hate Chelsea Football Club'

const may = document.getElementsByTagName('li')
lists[3].textContent = 'I am very tired'
lists[3].style.backgroundColor = 'lightblue'