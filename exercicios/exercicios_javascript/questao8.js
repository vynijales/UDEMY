/* 08) ​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém 
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o 
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um 
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior 
jogo. (Número do pior jogo).  */

const toInt = function(n) {
    return parseInt(n) // converte em número ou NaN
}

const formatList = function(scores) {
    scores = scores.split(' ') // quebra em espaços
    scores = scores.map(toInt) // aplica a função to Int para todos os elementos da lista
    const listaFormatada = scores.filter((score => (parseInt(score) != NaN))) // retorna uma array, e cada elemento precisa tornar verdadeiro a comparação
    // score = isNaN(parseInt(score)) ? 1 : _;
    return listaFormatada
}

const worseGame = function(scores) {
    list = formatList(scores)
    let worse = [list[0], 0]
    for (let i in list) {
        if (list[i] < worse[0]) {
            worse = [list[i], i]
        }
    }
    return `O pior jogo de Pedro foi o de número ${worse[1]}, com ${worse[0]} pontos.`
}

const records = function(scores) {
    const list = formatList(scores)
    let record = [list[0], 0]

    for(i = 0; i < list.length; i++) {
        if (record[0] < list[i]) {
            record = [list[i], record[1] + 1]
        }
    }
    return `Pedro superou seu próprio recorde ${record[1]} vezes.`
}

// const teste = "5 4 6"
const teste = "5 4 6 7 8 9 10 11 12 13 14 15 16 5 5 5 6 7 8"
//console.log(formatList(teste)) // lista formatada
console.log(worseGame(teste)) // pior jogo
console.log(records(teste)) // quantas vezes susperou seu próprio recorde