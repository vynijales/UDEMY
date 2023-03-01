const primeiroElemento = arrayOuStrting => arrayOuStrting[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(["Ana", "Matheus", "Pedro", "João"])
})
    .then(primeiroElemento) // ["Ana"]
    .then(primeiroElemento) // "A"
    .then(letraMinuscula) // "a"
    // .then(valor => console.log(valor)) // Pode ser substituido pela linha abaixo
    .then(console.log) // a

