const porta = 3003 // porta 80 é a porta padrão quando você faz uma requisição usado o protocolo http

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => { // http://localhost:3003/produtos
    console.log('Middwares 1...')
    next() // Sem o next(), não encaminharia para o get abaixo
})

app.get('/produtos', (req, res, next) => { // http://localhost:3003/produtos
    res.send({ nome: 'Notebook', preco:123.45 }) // Converte para JSON
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})


// COMANDOS USADOS NO TERMINAL
// npm init -y (yes para todas as especificações)
// npm -i --save express@4.16.2 -E
// npm i --save-dev nodemon@1.14.11 -E


// package.json
// {
//     "name": "projeto",
//     "version": "1.0.0",
//     "description": "",
//     "main": "src/servidor.js",
//     "scripts": {
//       "start": "nodemon",
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//       "express": "4.16.2"
//     },
//     "devDependencies": {
//       "nodemon": "1.14.11"
//     }
//   }
  