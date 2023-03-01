function gerarNumerosEntre(min, max) {
    if (min > max) [max, min] = [min, man] 
    // condicional if // destructuring <-> array
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log) // referência console.log