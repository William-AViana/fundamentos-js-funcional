// reduce function returns a cumulative result of each array element

const numbers = [1, 2, 3, 4, 5, 6, 78, 9]

const sum = (total, el) => total + el
const total = numbers.reduce(sum)

console.log(total)

const avg = (acc, el, i, array) => {
  if (i === array.length - 1) {
    return (acc + el) / array.length
  } else {
    return acc + el
  }
}

console.log(numbers.reduce(avg))