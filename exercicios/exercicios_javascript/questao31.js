/* 31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
e imprime a quantidade no console. */

const negativos = function (vetorInt) {
    listaNegatvos = vetorInt.filter(elemento => elemento < 0)
    return listaNegatvos.length
}

console.log(negativos([-4, -3, -2, -1, 0, 1, 2, 3, 4]))