/* 24)​ Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while. */

const helloWorld = function() {
    let cont = 0
    while (cont < 11) {
        console.log('Hello World!')
        cont += 1
    }
}

helloWorld()