function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!') // Encadeando resultados
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase)) // Que legal!?!?
    .catch(e => console.log(e)) // tratatndo Erro