function criarProduto(nome, preco){
    return {
        nome, 
        preco,
        desconto: 0.2
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))

computador = criarProduto('Computador', 3000)
computador.preco -= 150
console.log(computador)