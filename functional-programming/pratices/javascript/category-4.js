// @007 soma impares
const isOdd = (value) => value % 2 !== 0
const reducer = (accumulator, currentValue) => accumulator + currentValue
const sum = (predicate) => (arr) => {
  return arr.filter(predicate).reduce(reducer)
}

// @001 max3

const max = (...numbers) => Math.max(...numbers)

// @012 fatorial

const factorial = (number) => {
  for (let i = number - 1; i > 0; i--) {
    number *= i
  }
  return number
}

// @014 elemento

const valueOfIndex = (index) => (arr) => arr[index]

// @015 pertence

const include = (number) => (arr) => arr.includes(number)

// @016 total

const lenghtOfArray = (arr) => {
  let count = 0
  for (const _ of arr) count++
  return count
}

// @017 maior

const higherNumber = (arr) => {
  let higher = 0
  for (const value of arr) higher < value ? (higher = value) : 0
  return higher
}

// @023 corpo

const arrayWithoutLastElement = (arr) => arr.slice(0, -1)

// @028 divide

const divideArray = (number) => (arr) => {
  const copyOfArray = [...arr]
  const index = copyOfArray.indexOf(number) + 1
  const leftSide = copyOfArray.splice(0, index)
  return [leftSide, copyOfArray]
}

// @030 uniao

const concatAndFilter = (predicate) => (arr) => (otherArr) => {
  return arr.concat(otherArr).filter(predicate)
}

const unique = (value, index, arr) => arr.indexOf(value) === index
const union = concatAndFilter(unique)

// @031 intersect

const equals = (value, index, arr) => arr.indexOf(value) !== index
const intersect = concatAndFilter(equals)

// @047 splitints

const isPair = (value) => value % 2 === 0
const splitInOddAndPair = (arr) => {
  const oddNumber = arr.filter(isOdd)
  const pairNumber = arr.filter(isPair)
  return [oddNumber, pairNumber]
}

// @009 sublist
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const slice = (arr) => (initialValue) => (finalValue) => {
  return arr.slice(initialValue, finalValue)
}

const sliceNumber = slice(number)
// sliceNumber(1)(3) - [1,2]

// @051 paridade
const isTrue = (value) => value === true
const countBool = (arr) => arr.filter(isTrue).length
const parity = (arr) => {
  if (countBool(arr) % 2 !== 0) return true
  return false
}

// @054 swap

const swap = (firstIndex) => (lastIndex) => (arr) => {
  const copyOfArray = [...arr]
  if ((arr.indexOf(firstIndex) && arr.indexOf(lastIndex)) !== -1) {
    firstIndex = copyOfArray.indexOf(firstIndex)
    lastIndex = copyOfArray.indexOf(lastIndex)
    copyOfArray[firstIndex] = arr[lastIndex]
    copyOfArray[lastIndex] = arr[firstIndex]
    return copyOfArray
  }
  return arr
}

// @063 euler1

const euler = (number) => {
  let sumNumber = 0
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sumNumber += i
    }
  }
  return sumNumber
}

const arr = [1]

console.log(euler(3))
