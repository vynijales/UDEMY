const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react').framework) // false

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})
// [Function (anonymous)] Função
// {} Objeto
// 123 Número

console.log(chavesVariadas.has(123)) // true
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) // false
console.log(chavesVariadas.size) // 2

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // sobrescreve valor da chave 123
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)

// Map(4) {
//     [Function (anonymous)] => 'Função',
//     {} => 'Objeto',
//     123 => 'b',
//     456 => 'b'
//   }