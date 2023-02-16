const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

console.log(produtos.filter(function(p) {
    if (p.fragil && p.preco >= 500) {return p} // Retorna uma array dos elementos frágeis e com preço maior ou igual a 500
}))

// [
//     { nome: 'Notebook', preco: 2499, fragil: true },
//     { nome: 'iPad Pro', preco: 4199, fragil: true }
//]

const barato = e => e.preco < 500
const notFragil = e => !e.fragil

console.log(produtos.filter(barato).filter(notFragil)) // Retorna uma array dos elementos baratos e não frágeis
// [ { nome: 'Copo de Plástico', preco: 18.99, fragil: false } ]
