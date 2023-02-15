// Object.preventExtensions // Impede que seja adicionado atributos
const produto = Object.preventExtensions({
  nome: `Qualquer`, preco: 1.99, tag: `promoção`
})
console.log(`Extensível: `, Object.isExtensible(produto)) // Extensível:  false

produto.nome = `Borracha`
produto.descricao= `Borracha escolar branca` // { nome: 'Borracha', preco: 1.99 }
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {
    nome: `Juliana`,
    idade: 35,
}
Object.seal(pessoa)
console.log(`Selado`, Object.isSealed(pessoa)) // Selado true

pessoa.sobrenome = `Silva`
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa) // { nome: 'Juliana', idade: 29 }

// Object.freeze = selado + valores constantes (writable = false)
