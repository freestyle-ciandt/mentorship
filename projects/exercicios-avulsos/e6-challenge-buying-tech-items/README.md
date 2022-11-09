# E6 - Challenge - Buying Tech Items

**Contexto:** O gerente de uma loja de itens para computador pediu para você implementar uma nova funcionalidade no sistema. Nessa nova funcionalidade, a pessoa especifica a quantidade de dinheiro que ela quer gastar (budget), e o sistema irá informar uma combinação de melhor teclado + melhor speaker que não ultrapasse o valor especificado.

**Requisitos:**

* Complete a função `getBestBuildWithBudget()`, desenvolvendo uma lógica para calcular qual a melhor build de equipamentos possível que caiba dentro do budget.
    * A função irá receber 3 parâmetros:
        * `keyboards`: uma lista de teclados disponíveis na loja. A lista contêm objetos com um atributo `name` (o nome do teclado) e um atributo `price`(o preço que aquele teclado custa).
        * `speakers`: uma lista de speakers disponíveis na loja. A lista contêm objetos com um atributo `name` (o nome do speaker) e um atributo `price`(o preço que aquele speaker custa).
        * `budget`: um numero que equivale ao preço maximo que a pessoa está disposta a pagar.
    * A função deverá retornar 3 atributos:
        * `bestKeyboard`: O nome do melhor teclado encontrado.
        * `bestSpeaker`: o nome do melhor speaker encontrado.
        * `bestPriceUnderBudget`: o preço total maximo (teclado + speaker) dentro do budget informado.
    * A função deverá escolher uma combinação de 1 teclado + 1 speaker em que o preço total fique abaixo do budget informado. A função deverá encontrar a melhor combinação de teclado + speaker (dentro do budget). Por exemplo:
        ```
        Teclados (nome | preço):
            - A | 40
            - B | 50
            - C | 60
        Speakers (nome | preço):
            - A | 5
            - B | 8
            - C | 12
        Budget: 60

        Combinações possíveis:
        - Teclado A + Speaker A: 45
        - Teclado A + Speaker B: 48
        - Teclado A + Speaker C: 52
        - Teclado B + Speaker A: 55
        - Teclado B + Speaker B: 58 (MELHOR OPÇÃO ENCONTRADA)
        - Teclado B + Speaker C: 62 (estoura o budget)
        - Teclado C + Speaker A: 65 (estoura o budget)
        - Teclado C + Speaker B: 68 (estoura o budget)
        - Teclado C + Speaker C: 72 (estoura o budget)

        A melhor combinação de teclado + speaker que fique abaixo de 60 é a do teclado B + speaker B, ou seja 50 + 8 = 58.
        ```
    * Caso não seja encontrada nenhuma opção de teclado + speaker abaixo do budget informado, a função deverá lançar um erro com a seguinte mensagem: No option found under the specified budget

