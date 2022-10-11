# E2 - Import/Export modules

* No arquivo principal, você deverá exportar os seguintes valores:
    * Exportar uma constante chamada `WELCOME_MESSAGE` com o valor `"Welcome, customer!"`. Ela deverá ser exportada de forma individual.
    * Exportar uma função chamada `sayHello()`, que quando for chamada irá simplesmente retornar o valor `"Hello!"`. Ela deverá ser exportada de forma individual.
    * Exportar como padrão um objeto, e dentro desse objeto deverá existir uma função chamada `sayGoodbye()` que quando for chamada irá simplesmente retornar o valor `"Goodbye!"`.
    * Exportar as constantes `MESSAGE_DISPLAY_TIMEOUT_MS` e `LOGIN_ATTEMPTS_LIMIT` que estão declaradas no arquivo `values.js` sem precisar especificar o nome delas no arquivo `index.js`. (Já que esses valores não serão usados no arquivo `index.js`, a ideia é que esse arquivo apenas "re-exporte" as constantes.)
