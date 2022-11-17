# E7 - Challenge - Finding pairs

* Complete a função `countPairs()`, desenvolvendo uma lógica para contar a quantidade de pares presentes em uma lista de numeros.
    * Vamos considerar 1 par como sendo duas ocorrências de um mesmo número. Porém, cada numero poderá pertencer apenas à 1 par. Alguns exemplos:
        * Na lista [3, 2, 3, 4, 3] temos apenas 1 par (3-3) nos indices 0 e 2 da lista respectivamente. O numero 3 que está na posição 4 da lista fica sobrando, pois não há outra ocorrência do numero 3 mais para frente.
        * Na lista [4, 3, 2, 1, 2, 3, 4, 3, 2, 1] temos 4 pares unicos, e ficam sobrando 2 numeros sem pares (que podemos desconsiderar).
    * **Desafio:** É possível criar essa logica utilizando apenas 1 loop (for, while, forEach, etc...).
