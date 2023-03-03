// Node não permite usar o async diretamente do módulo, precisa ser criado uma função assíncrona

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor()
//     .then(esperarPor)
//     .then(() => {console.log("Executando promise 1...")})
//     .then(esperarPor)
//     .then(() => {console.log("Executando promise 2...")})
//     .then(esperarPor)
//     .then(() => {console.log("Executando promise 3...")})

function retonarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retonarValorRapido() {
    return 20
}


async function executar() {
    let valor = await retonarValorRapido()

    await esperarPor()
    console.log(`Async/Await ${valor}...`)
    await esperarPor()
    console.log(`Async/Await ${valor + 1}...`)
    await esperarPor()
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executar().then(console.log)

executarDeVerdade()
