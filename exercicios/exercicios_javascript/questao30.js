/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

const maxAndMin = function (vetorInt) {
    let max = vetorInt[0]
    let min = vetorInt[0]
    for (let i in vetorInt) {
        if (vetorInt[i] > max) {
            max = vetorInt[i]
        } else if (vetorInt[i] < min) {
            min = vetorInt[i]
        }
    }
    console.log(`O maior número é ${max} e o menor número é ${min}.`)
}

maxAndMin([5, 6, -1, 7, 2, 3, 4, 5, 0])
maxAndMin([54, 66, 46, 04, -6, 4, 64, -64, 6, 46, 046, 4, 64, 64, 6, -46, 4, 6, -46, 4, 6, 55])