/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um 
triângulo). */

function triangulo(a, b, c) {
    if (a == b && b == c) {
        return "Equilatero"
    } else if (a != b && b != c && c != a) {
        return "Escaleno"
    } else {
        return "Isoceles"
    }
}

const testeTriangulo = function(t) {
    for (let i = 0; i <= t; i++) {
        for (let j = 0; j <= t; j++) {
            for (let k = 0; k <= t; k++) {
                console.log((`[${i}][${j}][${k}]: `) + triangulo(i, j, k))
            }
        }
    }
}

console.log(triangulo(2, 3, 2))

testeTriangulo(2)