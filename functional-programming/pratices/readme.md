# Pratices - Functional programming

Esse **README** é dedicado aos exercicios que estou realizando, nele irei detalhar pensamentos de implementação com algoritmos tanto em haskell como em javascript.

### @004 countNeg

Nesse exercicio como em todos os outros que irei fazer, pensarei em soluções totalmente funcionais no javascript, já que no haskell é a unica opção ;-;

**Solução em Javascript**

```js
// @004 countNeg
const isNeg = (number) => number < 0
const countNeg = (arr) => arr.filter(isNeg).length
```

"Tão fácil como roubar um doce de neném" né? Foi tão fácil que criei um desafio de não poder ser tão atrelado a linguagem, ou seja, não poderia usar metodos como <code>filter</code>. Alias, esse código é totalmente funcional, pois o <code>filter</code> sempre cria um novo array de elementos que passaram no seu <em>predicado</em> não ferindo assim um dos principios do funcional a **imutabilidade**.
