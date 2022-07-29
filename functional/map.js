// map function returns a new array without changing the original data

const numbers = [1, 2, 3, 4, 5, 6, 78, 9]

const doubleNumbers = numbers.map(el => el * 2)
console.log(numbers, doubleNumbers)

const students = [
  { name: 'Jake', score: 6.4 },
  { name: 'Susan', score: 8.6 },
  { name: 'Emma', score: 9.4 },
  { name: 'Peter', score: 9.1 },
]

const scoreStudents = students.map(el => el.score).map(Math.ceil)
console.log(students, scoreStudents)