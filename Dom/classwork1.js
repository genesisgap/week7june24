document.body.style.color = 'blue';
document.body.style.backgroundColor = 'lightblue';
document.body.style.padding = '40px';
document.body.style.borderRadius = '20px';
document.body.style.fontSize = '30px';
document.body.style.alignContent = 'left';


const inputs = document.querySelectorAll('input')
const btn = document.querySelector('button')
const sect = document.querySelector('section')
const title = document.querySelector('h1')

const mth = inputs[0]
const eng = inputs[1]

const para1 = document.createElement('p')
const para2 = document.createElement('p')
const person = prompt('what is your name')

title.textContent = 'WELCOME CLASS ' + person

function resultStatus(){
    const m = mth.value - 0
    const en = eng.value * 1
    
    const avg = (m + en) / 2no

    const status = m >= 50 && en >= 50 ? ' you are promoted' : m >= 50 || en >= 50 ? ` you need to reseat ${m >= 50 ? ' english' : ' mathematics'}` : ' sorry you have to repeat this class'

    para1.textContent = avg

    para2.textContent = person + status

    sect.append(para1,para2)

   
   }

btn.addEventListener('dblclick', resultStatus)




const val = 100000000000
val.toLocaleString()
