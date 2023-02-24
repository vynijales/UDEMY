// node entradaESaida.js -a

const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo) // false, se não for passado a flag -a


if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // Chamado quando o usuário aperta ENTER
        const nome = data.toString().replace('\n', '') // Por padrão o '\n' é armazenado na 'data' 
        
        process.stdout.write(`Fala ${nome}/n`)
        process.exit()
    })
}