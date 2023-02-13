/* 40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de 
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o 
conceito B e de 9,0 a 10,0 o conceito A. */

const notaLetras = function (valor) {
    if (valor < 0 || valor > 10) { return 'Nota inválida' }
    else if (valor >= 0 && valor < 5) { return 'D' }
    else if (valor < 7) { return 'C' }
    else if (valor < 9) { return 'B' }
    else { return 'A' }
}

const conversorNotas = function (lista) {
    return lista.map(notaLetras)
}

console.log(conversorNotas([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))