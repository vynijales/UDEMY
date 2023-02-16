Array.prototype.map2 = function(callback) { // Criando a função map para a classe Array
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}', 
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}', 
]

// Retornar uma array apenas com os preços
const preco = e => JSON.parse(e)["preco"]
console.log(carrinho.map2(preco)) // [ 3.45, 13.9, 41.22, 7.5 ]

// Resolução alternativa
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado) // [ 3.45, 13.9, 41.22, 7.5 ]
