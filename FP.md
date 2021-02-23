# Functional Programming

## High Order Functions

Toda função de ordem superior recebe ou retorna uma função. Inverso de funções de ordem normal.

```js
function reduce(reducer, initial, arr) {
  let acc = initial
  for (let i = 0; i < arr.length; i++) {
    acc = reducer(acc, arr[i])
  }
  return acc
}
```

As funções do JavaScript são de primeira classe, ou seja, ela pode ser usada como qualquer outro valor. Pode ser atribuida a variaveis, podem receber funções, retonar funções, enfim.. literalmente pode ser usada com flexibilidade extremamente alta.

Funções de ordem superior nos permite abstrair calculos especificos ou regras de negocio para que sejam mais genericas e possam ser usadas em varios lugares.

Exemplo de função que retorna de um array os valores que tem tamanho maior que 4:

```js
function censor(words) {
  const filtered = []
  for (let i = 0, {length} = words; i < length; i++) {
    const word = words[i]
    if (word.length !== 4) filtered.push(word)
  }
  return filtered
}
```

Ok, é uma função normal, mas e se quisermos que ela trouxesse apenas o valores que começassem com 's'? Nó caso teriamos que criar outra função com essa nova condição.. Mas com funções de ordem superior, podemos abstrair essas condições para funções recebidas nos parametros, assim a função tem mais flexibilidade e menos regra impostas nela.

```js
function reduce(reducer, initial, arr) {
  let acc = initial
  for (let i = 0; i < arr.length; i++) {
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
```

Nesse exemplo, podemos perceber um bom nivel de abstração. A função censor está totalmente livre de suas responsabilidades e apenas filtra o que deseja com a função filter que pode ser usada em qualquer valor. A função de ordem superior <code>reduce</code> é uma abstração da responsabilidade de iterar sobre o array e selecionar os desejados, mas essa responsabilidade de saber quem deve ser selecionado fica por conta da função que recebe por argumentos <code>reducer</code>.

## Curry and Composition functions
