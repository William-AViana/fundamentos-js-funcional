// Create a range function
function range(param1, param2, param3 = 1) {
  const n1 = param2 === undefined ? 1 : param1
  const n2 = param2 === undefined ? param1 : param2
  const step = n1 <= n2 ? Math.abs(param3) : - Math.abs(param3)

  const nums = []
  for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {
    nums.push(i)
  }
  return nums
}
// range(5) -> [1, 2, 3, 4, 5]
console.log(range(5))

// range(6, 11) -> [6, 7, 8, 9, 10]
console.log(range(6, 11))

//  range(10, 19, 2) -> [10, 12, 14,16, 18]
console.log(range(10, 19, 2))

// range(6, 2) -> [6, 5, 4, 3, 2]
console.log(range(6, 2))

// range(8, 4, 0)
console.log(range(8, -3, 4))