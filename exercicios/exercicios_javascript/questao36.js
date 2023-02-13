/* 36) ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número 
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada 
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se 
o valor do elemento for maior que 5. */

const funcao1 = function(vetorNum, numInt) {
    return vetorNum.map(mult => mult * numInt)
}

const funcao2 = function(vetorNum, numInt) {
    return funcao1(vetorNum, numInt).filter(elemento => elemento > 5)
}

console.log(funcao1([1, 2, 3, 4, 5], 2))
console.log(funcao2([1, 2, 3, 4, 5], 2))