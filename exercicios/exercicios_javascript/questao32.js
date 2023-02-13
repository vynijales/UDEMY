/*  Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

const mediaAritmetica = function (vetorInt) {
    let soma = 0
    for (let i = 0; i < vetorInt.length; i++) {
        soma += vetorInt[i]
    }
    console.log(`A média aritmética é ${soma / vetorInt.length}.`)
}

mediaAritmetica([1, 2, 3, 4, 5, 6, 7, 8, 9])