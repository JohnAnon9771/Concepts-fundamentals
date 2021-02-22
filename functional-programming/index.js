// High Order functions
// const censor = (words) => {
//   const filtered = []
//   for (let i = 0, {length} = words; i < length; i++) {
//     const word = words[i]
//     if (word.length !== 4) filtered.push(word)
//   }
//   return filtered
// }

// [ 'shout', 'sun' ]
function reduce(reducer, initial, arr) {
  let acc = initial
  for (let i = 0, {length} = arr; i < length; i++) {
    acc = reducer(acc, arr[i])
  }
  return acc
}

function filter(words, callback) {
  return reduce(
    (acc, curr) => (callback(curr) ? acc.concat([curr]) : acc),
    [],
    words
  )
}

const censor = (words) => filter(words, (word) => word.length !== 4)

console.log(censor(["oops", "gasp", "shout", "sun"]))

// Curry and functions composition
