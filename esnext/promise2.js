// setTimeout(function() {
//     console.log('Executando callback...')
//     // alt + shift + seta, para copiar linha
//     setTimeout(function() {
//         console.log('Executando callback...')

//         setTimeout(function() {
//             console.log('Executando callback...')
    
//         }, 2000)

//     }, 2000)

// }, 2000)

function esperarTempo(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Executando promise...")
            resolve() // Após esperar o tempo e imprimir no console, irá chamar o then.
        }, tempo)
    })
}

esperarTempo()
    .then(() => esperarTempo())
    .then(() => esperarTempo())