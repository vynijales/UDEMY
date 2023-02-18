const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola) // Fala Pessoal
console.log(moduloA.bemVindo) // Bem vindo ao node!
console.log(moduloA.ateLogo) // Até o próximo exemplo
console.log(moduloA)
// {
//     ola: 'Fala Pessoal',
//     bemVindo: 'Bem vindo ao node!',
//     ateLogo: 'Até o próximo exemplo'
// }

console.log(moduloB.bomDia) // Bom Dia
console.log(moduloB.boaNoite()) // Boa noite
console.log(moduloB) // { bomDia: 'Bom Dia', boaNoite: [Function: boaNoite] }
