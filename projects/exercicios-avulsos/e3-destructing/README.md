# E3 - Destructing

* Complete a função `getWinnersMessage()`, desenvolvendo uma lógica para extrair o nome das pessoas ganhadoras baseado na posição do array.
    * O array já está ordenado por ordem de chegada. Ou seja, o primeiro item do array será o primeiro ganhador, o segundo item será o segundo ganhador, e assim por diante.
    * Não deverá ser utilizado acesso direto às posições, como por exemplo `listOfParticipants[0]`.
    * Também não é permitido utilizar loops.

* Complete a função `getUserReport()`, desenvolvendo uma lógica para extrair os dados do usuário de dentro de um objeto.
    * Não deverá ser utilizado acesso direto aos atributos dos objetos, como por exemplo `userData.name`.
    * Caso o atributo `profession` não for especificado, ele deverá receber o valor `unknown`. (Não será permitido criar uma nova variável para fazer essa verificação, por exemplo `const userProfession = profession || 'unknown'`)
    * Caso o atributo `address.country` não for especificado, ele deverá receber o valor `Brazil`. (Não será permitido criar uma nova variável para fazer essa verificação, por exemplo `const userCountry = address && address.country || 'Brazil'`)
