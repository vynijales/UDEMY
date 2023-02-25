// let e const

{
    var a = 2
    let b = 3 // Let tem escolpo de bloco e função
}

console.log(a) // 2
// console.log(b) // Erro

// Templat String
const produto = 'iPad'
console.log(`${produto} é caro!`) // iPad é caro!

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras) // C o [ 'd', '3', 'r' ]

const [x, , y] = [1, 2, 3]
console.log(x, y) // 1 3

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome) // 9 Ana
