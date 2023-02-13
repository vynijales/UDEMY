/* 23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

const media = function (id, n1, n2, n3) {
    let notas = [n1, n2, n3]
    let aux = [n1, 0]
    let soma = 0
    for (let n in notas) {
        if (notas[n] > aux[0]) {
            aux = [notas[n], n]
        }
    }
    for (let n in notas) {
        if (n == aux[1]) {
            soma += (notas[n] * 4) / 12
        } else {
            soma += (notas[n] * 3) / 12
        }
    }

    console.log(soma >= 5 ? `Aluno ${id} Aprovado.` : `Aluno ${id} Reprovado.`)

}

media('001', 1, 2, 3)
media('002', 4, 6, 8)
media('003', 5, 5, 5)
media('004', 5, 5, 10)