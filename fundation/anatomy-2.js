// Anonymous function
(function (a, b, c) {
  return a + b + c
})

// Function expression
const sum = function (a, b) {
  return a + b
}

const result = sum(7, 7)
console.log(result)

const anotherResult = sum
console.log(anotherResult(5, 5))

let x = sum
console.log(x(6, 6))