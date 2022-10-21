# E4 - Promises

* Na função `executeInParallel()`, os métodos que buscam dados do repositório estão sendo executados de forma linear. Isso faz com que o tempo de resposta total seja a soma do tempo de resposta de cada um dos métodos. Em consequência disso o teste acaba quebrando pois foi definido um limite de 5 segundos. Reescreva a função `executeInParallel()` de forma que os métodos do repositório sejam chamados de forma paralela.
* Implemente a função `validateToken()` com as seguintes características:
    * A função deverá retornar uma Promise. Essa Promise deverá verificar se o token é válido (igual a string `VALID_TOKEN` definido no arquivo de constants).
        * Caso verdadeiro, a Promise deverá esperar 2 segundos, e logo em seguida ser resolvida retornando o objeto `{ loggedIn: true }`.
        * Caso falso, a Promise deverá ser rejeitada lançando um erro com a mensagem `Token inválido.`

