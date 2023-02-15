console.log(typeof Array, typeof new Array, typeof []) // function object object

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana' ]

aprovados = ['Bia', "Carlos", "Ana"]
console.log(aprovados[0]) // Bia
console.log(aprovados[1]) // Carlos
console.log(aprovados[2]) // Ana
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'
aprovados.push('Maria')
console.log(aprovados.length) // 5

aprovados[9] = 'Rafael'
console.log(aprovados.length) // 10
console.log(aprovados[8] === undefined) // true

console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Maria', <4 empty items>, 'Rafael' ]
aprovados.sort() // altera o array original
console.log(aprovados) // [ 'Ana', 'Bia', 'Carlos', 'Maria', 'Paulo', 'Rafael', <4 empty items> ]

delete aprovados[1]
console.log(aprovados[1]) // undefined
console.log(aprovados[2]) // Carlos

aprovados = ['Bia', "Carlos", "Ana"]
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') [ 'Bia', 'Elemento1', 'Elemento2', 'Ana' ]
console.log(aprovados) // [ 'Bia', 'Elemento1', 'Elemento2' ]
