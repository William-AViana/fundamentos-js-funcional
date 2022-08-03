let a = 4
console.log(a)

// funciton declaration
function bomDia() {
  console.log('Bom dia!')
}

bomDia()

// Function expression
const boaTarde = function () {
  console.log('Boa tarde!')
}
boaTarde() // undefined

function somar(a = 0, b = 0) {
  return a + b
}

let resultado = somar(5, 6, 7, 8)
console.log(resultado)

resultado = somar(4)
console.log(resultado) // Nan
