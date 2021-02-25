# Functional Programming

Programação funcional se baseia em alguns conceitos principais:

- Função pura
-

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

As funções do JavaScript são de primeira classe, ou seja, ela pode ser usada como qualquer outro valor. Pode ser atribuida a variaveis, podem receber funções, retonar funções, enfim... literalmente pode ser usada com flexibilidade extremamente alta.

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

Ok, é uma função normal, mas e se quisermos que ela trouxesse apenas o valores que começassem com 's'? No caso teriamos que criar outra função com essa nova condição.. Mas com funções de ordem superior, podemos abstrair essas condições para funções recebidas nos parametros, assim a função tem mais flexibilidade e menos regra impostas nela.

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

Funções curried são funções que recebem um argumento por vez. Por exemplo:

```js
const add = (a) => (b) => a + b

console.log(add(5)(2)) // 7
```

Para fazer chamar essas funções você pode utilizar a syntax de <strong>application functions</strong>. Em JavaScript, os parênteses <code>()</code> após a referência de função acionam a invocação da função.

Esse estilo de declaração de função é extremamente atrelada com o conceito de <strong>clousures</strong> (Abordarei esse conceito em outro topico).

# Parcial Application

Uma aplicação parcial é uma função que foi aplicada a alguns, mas ainda não a todos os seus argumentos. Em outras palavras, é uma função que possui alguns argumentos fixos dentro de seu escopo de encerramento. Uma função com alguns de seus parâmetros fixos é considerada parcialmente aplicada .

Utilizando o exemplo de cima da para notar que quando você aplica <code>add(5)</code> já é uma aplicação parcial pois foi passado apenas um argumento. No caso, não confundem que aplicação parcial só pode ser usada em modelo curry.

Aplicativos parciais podem levar tantos ou poucos argumentos por vez, conforme desejado. As funções curried, por outro lado, sempre retornam uma função unária: uma função que recebe um argumento.

<em>Todas as funções curried retornam aplicativos parciais, mas nem todos os aplicativos parciais são o resultado de funções curried.</em>

# point-free style

Esse conceito se basea na declaração de funções que não fazem referência aos seus parametros, ou seja, não tem "noção" de seus parametros.

```js
// declaração comum
function anything(/* parametros aqui*/) {}
const anything2 = (/* parametros aqui */) => {}
const anything3 = function (/* parametros aqui */) {}
```

Esse conceito é bastante usado junto a funções curried. Pegando nosso primeiro exemplo:

```js
const add = (a) => (b) => a + b
// Inc10 será uma função que sempre adicionará mais 10 aos seus argumentos.
// Nesse caso inc10 é uma função que foi declarada sem referência aos seus parametros.
const inc10 = add(10)
```
