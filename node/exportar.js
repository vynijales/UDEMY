console.log(module.exports === this) // true
console.log(module.exports === exports) // true

this.a = 1 // Referencia para o mesmo objeto
exports.b = 2 // Referencia para o mesmo objeto
module.exports.c = 3 // Módulo que é exportado


exports = null
console.log(module.exports) // { a: 1, b: 2, c: 3 }

exports = {
    nome: "teste"
}

console.log(module.exports) // { a: 1, b: 2, c: 3 }
module.exports = { publico: true }