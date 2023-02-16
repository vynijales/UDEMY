// Criar um filter
Array.prototype.filter2 = function(callback) {
    const newarray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)){
            newarray.push(this[i])
        }
    }
    return newarray
}


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

console.log(produtos.filter2(function(p) {
    if (p.fragil && p.preco >= 500) {return p} // Retorna uma array dos elementos frágeis e com preço maior ou igual a 500
}))

// [
//     { nome: 'Notebook', preco: 2499, fragil: true },
//     { nome: 'iPad Pro', preco: 4199, fragil: true }
//]
