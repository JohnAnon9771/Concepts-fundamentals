// @004 countNeg
const isNeg = (number) => number < 0
const countNeg = (arr) => arr.filter(isNeg).length

// Reformulado
const count = (predicate) => (arr) => {
  let count = 0
  for (let item of arr) {
    if (predicate(item)) count++
  }
  return count
}

// @005 final
const slice = (initialIndex) => (arr) => arr.slice(initialIndex)

// @002 iguais
const equals = (...numbers) =>
  numbers.filter((number) => numbers[0] === number).length

// @006 interior
const sliceOfMiddle = (arr) => arr.slice(1, -1)

// @008 gangorra
// gangorra 30 100 60 50 == 0
// gangorra 40 40 38 60 == 1
const reducerMultiply = (accumulator, currentValue) =>
  accumulator * currentValue
const comparison = (left) => (right) =>
  left === right ? 0 : left < right ? 1 : -1

const seesaw =
  (...leftSide) =>
  (...rightSide) => {
    const resultLeftSide = leftSide.reduce(reducerMultiply)
    const resultRightSide = rightSide.reduce(reducerMultiply)
    return comparison(resultLeftSide)(resultRightSide)
  }

// @010 min2

const min = (...numbers) => Math.min(...numbers)

const arr = [2, 5, 4, 7, 9, 6]

// @000 soma2

const sum = (value) => (otherValue) => value + otherValue

console.log(min(...arr))
