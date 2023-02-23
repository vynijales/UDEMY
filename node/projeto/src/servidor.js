const porta = 3003 // porta 80 é a porta padrão quando você faz uma requisição usado o protocolo http

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')


app.use(bodyParser.urlencoded({ extended: true })) // vai retornar uma função midlware


app.get('/produtos', (req, res, next) => { // http://localhost:3003/produtos
    res.send(bancoDeDados.getProdutos())
    next() // Sem o next(), não encaminharia para o get abaixo
})

app.get('/produtos/:id', (req, res, next) => { // http://localhost:3003/produtos
    res.send(bancoDeDados.getProduto(req.params.id)) // Converte para JSON
})


app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
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
  

// npm i --save body-parser@1.18.2 -E

