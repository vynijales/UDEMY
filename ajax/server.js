const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) // serve static files from the current directory
app.use(bodyParser.urlencoded({ extended: true })) // parse URL-encoded bodies
app.use(bodyParser.json()) // parse JSON bodies

app.listen(8081, () => console.log('Server running on http://localhost:8081/'))