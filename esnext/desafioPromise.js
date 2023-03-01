const fs = require('fs')
const path = require('path')


function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(erro, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    // .then(console.log)
    .then(conteudo => conteudo.split('\r\n'))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log) // O valor final é: linha1, linha2, linha3
