const aprovados = ['Ágatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`)
// 1 Ágatha
// 2 Aldo
// 3 Daniel
// 4 Raquel
})

aprovados.forEach(nome => console.log(nome))
// Ágatha
// Aldo
// Daniel
// Raquel

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
// Ágatha
// Aldo
// Daniel
// Raquel
aprovados.forEach(function(nome, indice, array, x) {
console.log(`${indice + 1} ${nome}`)
console.log(array, x)
// 1 Ágatha
// [ 'Ágatha', 'Aldo', 'Daniel', 'Raquel' ] undefined
// 2 Aldo
// [ 'Ágatha', 'Aldo', 'Daniel', 'Raquel' ] undefined
// 3 Daniel
// [ 'Ágatha', 'Aldo', 'Daniel', 'Raquel' ] undefined
// 4 Raquel
// [ 'Ágatha', 'Aldo', 'Daniel', 'Raquel' ] undefined
})
