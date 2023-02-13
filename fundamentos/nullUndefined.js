let valor // não inicializada
console.log(valor)
//console.log(valor2) // is not defined é diferente de undefined

valor = null // Não está apontando para nenhum endereço de memória e não tem nenhum valor.
console.log(valor)
// console.log(valor.toString()) // Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // remover atributo de um objeto
console.log(produto)

produto.preco = null // sem espaço
console.log(!!produto.preco)
console.log(produto)
 