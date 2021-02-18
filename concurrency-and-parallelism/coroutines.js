// Coroutines with generators
function* rtc() {
  console.log("1")
  yield 100
  console.log("2")
  yield 200
  console.log("3")
  yield 300
}

console.log("Before")
let iterator = rtc()
let retValue = iterator.next()
console.log(retValue.value)
retValue = iterator.next()
console.log(retValue.value)
retValue = iterator.next()
console.log(retValue.value)
