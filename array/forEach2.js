Array.prototype.forEach2 = function(callback) { // Criando a função forEach para a classe Array
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // retorna o elemento, o índice atual e a array completa
    }
}

const aprovados = ['Ágatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`)
// 1 Ágatha
// 2 Aldo
// 3 Daniel
// 4 Raquel
})
