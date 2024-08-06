document.body.style.background = 'green'
const inputs = document.querySelectorAll('input')
const btn = document.querySelector('button')
const sect = document.querySelector('section')

const height = inputs[0]
const weight = inputs[1]

const para1 = document.createElement('p')
const para2 = document.createElement('p')
const para3 = document.createElement('p')
const para4 = document.createElement('p')


function hello(){
    const h = height.value/100
    const w = weight.value
    const bmi =(w/h**2).toFixed(2)

    const status = bmi > 30 ? 'obesity' : bmi > 25 ? 'overweight' : bmi > 18.5 ?
    'healthy weight' : 'under weight'
    sect.append(para1,para2,para3,para4)
    const recommendation = bmi > 30 ? 'gym' : bmi > 25 ? 'eat less' : bmi > 18.5 ?
    'eat well' : 'eat full'
    const ratings = bmi > 30 ? 'very bad' : bmi > 25 ? 'bad' : bmi > 18.5 ?
    'very good' : 'excellent'
    para1.innerHTML = `<strong>result:</strong>${bmi}kgm<sup>-2</sup>`
    para2.innerHTML = `<strong>status:</strong>${status}`
    para3.innerHTML = `<strong>recommendation:</strong>${recommendation}`
    para4.innerHTML = `<strong>ratings:</strong>${ratings}`

}

btn.addEventListener('click', hello)