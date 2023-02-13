/* 37) ​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam 
como parâmetros um número n (número de termos), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos , 
bem como a soma dos elementos. */

const progressaoAritmetica = function (n, a1, r) { // "an=a1 + r·(n-1)
    for (let i = 1; i <= n; i++) {
        an = a1 + r * (i - 1)
        console.log(an)
    }
    console.log(`A somatória dos termos é ${((a1 + an) * n) / 2}.`)
}

const progressaoGeometrica = function (n, a1, q) { // a1 * q ^ (n - 1) // a1 * (q **n - 1) / (q - 1)
    for (let i = 1; i <= n; i++) {
        an = a1 * q ** (i - 1)
        console.log(an)
    }
    console.log(`A somatória dos termos é ${ (a1 * (q **n - 1) / (q - 1)) }.`)
}

// progressaoAritmetica(5, 2, 3)
// progressaoAritmetica(10, 2, 2)
// progressaoGeometrica(5, 4, 3)
// progressaoGeometrica(10, 1, 2)