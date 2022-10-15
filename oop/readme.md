# Object-Oriented Programming

Programação orientada a objetos é um paradigma de programação que se baseia na abstração de objetos do mundo real, que são representados por classes e instâncias de classes.

## 4 Pillars of OOP

### Abstraction

Abstração é um dos principais conceitos de Orientação a objetos, é através dele que todos os outros conceitos se derivam. Seu principal objetivo é isolar o usuário de detalhes desnecessários, ou seja, o usuário não precisa saber como a classe funciona internamente, ele só precisa saber como usar a classe. Isso permite que o usuário se concentre em resolver o problema que ele está tentando resolver, sem se preocupar com detalhes internos.

"Semelhante à máquina de café em sua cozinha, você só precisa saber quais métodos do objeto estão disponíveis para chamar e quais parâmetros de entrada são necessários para acionar uma operação específica. Mas você não precisa entender como esse método é implementado e quais tipos de ações ele deve executar para criar o resultado esperado."

```rb
module CoffeeSelection
  ESPRESSO = 'espresso'
  FILTER_COFFEE = 'filter_coffee'
end

class Coffee
  def initialize(selection: CoffeeSelection::ESPRESSO, quantity: 1)
    @selection = selection
    @quantity = quantity
  end
end

class CoffeeMachine
  class ErrorSelection < StandardError; end

  def initialize(beans: 0)
    @beans = beans
  end

  def brew_coffee(selection:)
    case selection
    when CoffeeSelection::ESPRESSO
      brew_espresso
    when CoffeeSelection::FILTER_COFFEE
      brew_latte
    else
      raise ErrorSelection, "Invalid selection: #{selection}"
    end
  end

  private
    def brew_espresso
      Coffee.new(selection: CoffeeSelection::ESPRESSO, quantity: 1)
    end

    def brew_filter_coffee
      Coffee.new(selection: CoffeeSelection::FILTER_COFFEE, quantity: 1)
    end
end

machine = CoffeeMachine.new(beans: 100)

begin
  espresso = machine.brew_coffee(selection: CoffeeSelection::ESPRESSO)
rescue CoffeeMachine::ErrorSelection => e
  puts e.message
end
```
"Você pode ver neste exemplo que a abstração fornecida pela classe `CoffeeMachine` oculta todos os detalhes do processo de fabricação do café. Isso facilita o uso e permite que cada desenvolvedor se concentre em uma classe específica.

Se você implementar o `CoffeeMachine`, não precisará se preocupar com nenhuma tarefa externa, como fornecer xícaras, aceitar pedidos ou servir o café. Alguém vai trabalhar nisso. Seu trabalho é criar uma `CoffeeMachine` que faça um bom café.

E se você implementa um cliente que usa o `CoffeeMachine`, não precisa saber nada sobre seus processos internos. Alguém já o implementou para que você possa confiar em sua abstração para usá-lo em seu aplicativo ou sistema."

[Aprofunde-se mais sobre abstração](https://github.com/JohnAnon9771/Concepts-fundamentals/tree/main/oop/abstraction.md)

### Encapsulation

### Inheritance

### Polymorphism

## Object-Design

### Analysis

### Design

### Programming

#### Referecências
- [4 principals of OOP](https://khalilstemmler.com/articles/object-oriented/programming/4-principles/)
- [Leaky abstraction](https://khalilstemmler.com/wiki/leaky-abstraction/)
- [Concrete class](https://khalilstemmler.com/wiki/concrete-class/)