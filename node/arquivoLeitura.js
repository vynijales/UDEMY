const fs = require('fs') // módulo file system pré-instalado no node

const caminho = __dirname + '/arquivo.json' //__dirname é a constante que está presente em todos os arquivos/módulos do node que representa o diretório atual

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8') // Leia um arquivo de forma síncrona, ou seja se for um arquivo grande ele vai travar o event loop até ler completamente o arquivo
console.log(conteudo)

// {
//     "bd" : {
//         "host": "localhost",
//         "port": 5632,
//         "user": "usuario",
//         "pass": 12345
//     }
// }

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) // transformando string para JSON
    console.log(`${config.bd.host}:${config.bd.port}`) // localhost:5632
})

const config = require('./arquivo.json')
console.log(config.bd) // { host: 'localhost', port: 5632, user: 'usuario', pass: 12345 }

fs.readdir(__dirname, (err, arquivos) => { // Arquivos presentes no diretório
    console.log('Conteúdo de pasta...') // Conteúdo de pasta...
    console.log(arquivos) // Mostra quando tiver carregado o arquivo
})

// [
//     'arquivo.json',
//     'arquivoLeitura.js',
//     'exportar.js',
//     'exportarCliente.js',
//     'funcionarios',
//     'global.js',
//     'globalCliente.js',
//     'instanciaCliente.js',
//     'instanciaNova.js',
//     'instanciaUnica.js',
//     'moduloA.js',
//     'moduloB.js',
//     'morduloCliente.js',
//     'passandoParametros.js',
//     'passandoParametrosCliente.js',
//     'pastaA',
//     'this.js',
//     'thisArrowFunction.js',
//     'usandoModulosTerceiros.js'
//   ]
//   localhost:5632 // Como solicitei de forma assíncrona, só mostrou após carregar o arquivo
