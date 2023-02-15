const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento de um array
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen')
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift() // remove o primeiro!
console.log(pilotos) // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton') // adiciona no índice 0
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // indice 2, remove 0, acrescenta os itens 'Bottas' e 'Massa'
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

//remover
pilotos.splice(3, 1) // Remove item de índice 3
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do índice 2
console.log(algunsPilotos1) // [ 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4) // 1 inclusivo e 4 exclusivo
console.log(algunsPilotos2) // [ 'Alonso', 'Bottas', 'Raikkonen' ]
