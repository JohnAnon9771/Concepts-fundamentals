## **Categoria 3**

Comentarei nas questões que apenas tiverem algo novo a ser citado.

### @004 countNeg

```js
// Javascript
const isNeg = (number) => number < 0
const countNeg = (arr) => arr.filter(isNeg).length
```

"Tão fácil como roubar um doce de neném" né? Foi tão fácil que criei um desafio de não poder ser tão atrelado a linguagem, ou seja, não poderia usar metodos como <code>filter</code>. Alias, esse código é totalmente funcional, pois o <code>filter</code> sempre cria um novo array de elementos que passaram no seu <em>predicado</em> não ferindo assim um dos principios do funcional a **imutabilidade**.

Depois da reformulação sem o metodo <code>filter</code> a solução fica mais ou menos assim:

```js
// Javascript
const count = (predicate) => (arr) => {
  let count = 0
  for (let item of arr) {
    if (predicate(item)) count++
  }
  return count
}
```

Se tornou bem mais complexo né? Você pode ta se perguntando se esse código não está inferindo na imutabilidade devido a variavel <code>count</code> ser mutável. O javascript utiliza muito o conceito de **clousures** que são ótimas para criar **states** e **privacidade de dados**, com isso, mesmo a variavel sendo mutável, não quer dizer que essa função não seja totalmente pura.

### @005 final

```js
// Javascript
const slice = (initialIndex) => (arr) => arr.slice(initialIndex)
```

### @002 iguais

Nesse caso como o objetivo é bem parecido daria para reutilizar tranquilamente a <code>function count</code> pois ela está muito bem flexivel, onde o predicato é separado da lógica.

```js
// Javascript
const equals = (...numbers) =>
  numbers.filter((number) => numbers[0] === number).length
```

### @006 interior

```js
// Javascript
const sliceOfMiddle = (arr) => arr.slice(1, -1)
```

### @008 gangorra

Tenho algumas coisas a discutir sobre essa questão. Primeiro por que tanta função? Eu quis brincar muito com composição, fazendo separações de responsabilidade, isso me permite reaproveitar mais minhas funções, por exemplo, posso usar <code>comparison</code> e <code>reducerMultiply</code> em vários outros trechos de código. Segundo, por que a separação dos parametros mesmo não sendo uma função curried? Quando uma função tem que receber muitos parametros e você quer continuar totalmente funcional, existem <em>Helpers</em> para te auxiliar nisso, como as funções <code>pipe</code>, <code>compose</code> e etc... Nesse caso so fiz essa separação por facilidar na visualização na chamada da função, exatamente como o <code>comparison</code> está sendo chamado.

```js
// Javascript
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
```

### @010 min2

<code>Math.min</code> é deterministico, então sem preocupações de efeitos colaterais.

```js
// Javascript
const min = (...numbers) => Math.min(...numbers)
```

### @011 min3

Reutilização de funções ;p

```js
// Javascript
const min = (...numbers) => Math.min(...numbers)
```

### @000 soma2

```js
// Javascript
const sum = (value) => (otherValue) => value + otherValue
```
