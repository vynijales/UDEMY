const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) { return e * 20 })
console.log(resultado) // [ 20, 40, 60, 80, 100 ]

const soma10 = e => e + 10 // funcao arrow tem o return implicito 
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // converte para tipo float, fixa em 2 casas decimais e substitui . por ,

// É possível realizar diversos maps sucessivamente
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado) // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
