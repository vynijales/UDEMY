const moduloA = require('../../moduloA') // ../../moduloa funciona em windows e mac, mas não em linux
console.log(moduloA.ola)

const c = require('./pastaC') // por padrão, busca o arquivo index.js
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) // http://localhost:8080/