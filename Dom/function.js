// function greet(){
//   console.log('hello everyone')
// }

// greet()

function add(a,b = 10){
  console.log(a + b)
}

add(3,8)
add(3)

function UpperCase(text){
  console.log(text.toUpperCase())
}

UpperCase('genesis')

function UpperCase(text){
  console.log(text.toLowerCase())
}

UpperCase('genesis')

function capitlize(str){
  str = str.toLowerCase()
  console.log(str.replace(str[0],str[0].toUpperCase()))

}

// capitlize('august')
// capitlize('AUGUST')


// function truncate(str) {
//   let length = str.length
//   console.log(length > 20 ? str.slice(0,20).concat('...'): str)
// }

// truncate('a quick brown fox jump over the lazy dog')

function truncate(str,num) {
  let len = str.length
  console.log(str.length >= num ? str.slice(0,num)+'...': str)
}

truncate('a quick brown fox jump over the lazy dog')

