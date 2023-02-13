/* 07) ​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, 
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três 
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, 
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo 
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: 
“Delta é negativo”. */

const Bhaskara = function(a, b, c) {
    const DELTA = (b ** 2) - (4 * a * c)
    if (DELTA < 0) {
        return "Delta e negativo"
    } else {
        x1 = ( -b + Math.sqrt(DELTA) )/ (2 * a)
        x2 = ( -b - Math.sqrt(DELTA) )/ (2 * a)
        return [x1.toFixed(2), x2.toFixed(2)]
    }
}

console.log(Bhaskara(3, -5, 12)) // DELTA negativo
console.log(Bhaskara(2, -8, 0)) // 4, 0
console.log(Bhaskara(1, 6, 5)) // -1 e -5
console.log(Bhaskara(-2, 1, 3)) // -1 e 1.5
console.log(Bhaskara(-4, 8, 0)) // 0 e 2