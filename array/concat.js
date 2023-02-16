const filhas = ['Maria', 'Ana']
const filhos = ['João', 'Pedro']
const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos) // [ 'Maria', 'Ana', 'João', 'Pedro' ] [ 'Maria', 'Ana' ] [ 'João', 'Pedro' ]

console.log([].concat([1,2], [3, 4], 5, [[6, 7]])) // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
