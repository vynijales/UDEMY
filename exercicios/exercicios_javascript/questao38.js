/* 38) ​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números 
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente 
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

const apenasImpares = function(n1, n2) {
    if (n1 > n2) {
        aux = n1
        n1 = n2
        n2 = aux
    }
    n1 % 2 == 1 ? n1 = n1 : n1++
    n2 % 2 == 1 ? n2 = n2 : n2--
    
    for (let i = n1; i <= n2; i += 2) {
        console.log(i)
    }
}

// apenasImpares(2, 5)
// apenasImpares(5, 2)
// apenasImpares(1, 15)
apenasImpares(2, 16)