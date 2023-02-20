const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica') // Exportou um objeto do node

const contadorC = require('./instanciaNova')() // Retorna função, () retorna objeto
const contadorD = require('./instanciaNova')() // Novas instancias que foram criadas a partir de uma factory

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // 3 3
// mesmo adicionando no contador A

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // 3 1
// não foi afetado, pois foi 
