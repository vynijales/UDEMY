function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1) 

console.log('Até a próxima.')