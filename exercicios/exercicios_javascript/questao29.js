/* 29) ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos 
deles estão fora do intervalo, escrevendo estas informações.  */

const isInIntervalo = function(lista) {
    let aux = 0
    for (let i in lista) {
        if (lista[i] > 10 && lista[i] < 20) {
            aux += 1
        } 
    }
    console.log(`Há ${aux} números dentro do intervalo e ${lista.length - aux} fora do intervalo`)
}

isInIntervalo([1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 20])