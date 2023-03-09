// npm init -y // para criar o arquivo package.json
// npm i --save express@4.16.3 body-parser@1.18.2 -E

const express = require('express') // importar o express
const app = express() // instanciar o express e associar à essa variável
const bodyParser = require('body-parser') // importar o body-parser

app.use(bodyParser.urlencoded({ extended: true})) // urlencoded é o padrão, sem o body parser o req.body retorna undefined

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns</h1>')
})

app.listen(5500)