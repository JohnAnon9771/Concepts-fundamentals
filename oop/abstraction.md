## Abstraction

Aqui focarei em mais detalhes sobre abstração.

### Manter uma única camada de abstração por vez

Quando você está escrevendo um programa, você deve manter uma única camada de abstração por vez. Você deve escolher um nível de abstração e manter esse nível consistente em todo o programa. Você deve evitar misturar diferentes níveis de abstração em um único programa. Por exemplo, se você está escrevendo um programa que manipula dados em um banco de dados, você deve escolher se deseja trabalhar com os dados em nível de registro ou em nível de arquivo. Você deve evitar misturar os dois níveis de abstração.

### Abstração com vazamento - Leaky Abstraction

> Uma abstração que vaza detalhes que deveria abstrair

"ORMs como Sequelize e Prisma usam o padrão Active Record que permite adicionar, remover, excluir e atualizar dados do servidor SQL sem precisar escrever nenhum código SQL. Para casos simples, eles funcionam surpreendentemente. Eles também tendem a funcionar muito bem para consultas mais não triviais. A desvantagem é que, quando nos deparamos com o cenário em que precisamos usar nossos ORMs para escrever consultas realmente complexas, não é incomum que eles planejem e executem código SQL ineficiente. Em situações como essa, a abstração do ORM vazou e somos forçados a aprender como fazer o ORM escrever uma consulta com melhor desempenho ou escrever manualmente a consulta SQL mais eficiente."