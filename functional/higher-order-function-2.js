// Curring
function finalPrice(tax) {
  return function (price) {
    return price * (1 + tax)
  }
}

const nycFinalPrice = finalPrice(0.0875)

console.log(nycFinalPrice(25).toFixed(2))
console.log(nycFinalPrice(21.7).toFixed(2))
// Curring
function porcentagemDoImposto(imposto) {
  return (value) => {
    return (desconto) =>
      value + value * imposto - value * desconto
  }
}

const valorDoProduto = porcentagemDoImposto(0.06)

const porcentagemDeDesconto = valorDoProduto(200)

console.log(porcentagemDeDesconto(0.01))