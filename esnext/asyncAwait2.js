const { reject } = require("lodash")

function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, man] 
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdDeNumeros, tentativas = 1) {
    const numeros = []

    try {
        for (let _ of Array(qtdDeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if (tentativas > 10) {
            throw "Que chato!!!"
        } else {
            return gerarMegaSena(qtdDeNumeros, tentativas + 1)
        }
    }
    
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)

// gerarNumerosEntre(1, 5, [1, 2, 4 ])
//     .then(console.log)
//     .catch(console.log)