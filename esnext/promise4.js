function GerarNumerosEntre(min, max, tempo) {
    if (min > max) [min, max] = [max, min]
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        GerarNumerosEntre(1, 60, 4000),
        GerarNumerosEntre(1, 60, 1000),
        GerarNumerosEntre(1, 60, 500),
        GerarNumerosEntre(1, 60, 500),
        GerarNumerosEntre(1, 60, 100),
        GerarNumerosEntre(1, 60, 1500),
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log) // [ 29, 41, 7, 57, 46, 43 ]
    .then(() => console.timeEnd('promise')) // promise: 4.014s