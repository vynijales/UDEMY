/* 28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

const contadorParidade = function(lista) {
    let par = []
    let impar = []
    for (let i in lista) {
        if (lista[i] % 2 == 0) {
            par.push(lista[i])
        } else if (lista[i] % 2 == 1) {
            impar.push(lista[i])
        }
    }
    console.log(`Há ${par.length} números pares na lista!`)
    console.log(`Há ${impar.length} números ímpares na lista!`)
}

contadorParidade([50,12,13,15,15,16, NaN, 23, 'abc'])