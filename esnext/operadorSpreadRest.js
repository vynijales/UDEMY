// operador ... rest (juntar)/spread (espalhar)
// usar rest com parâmetro de função

const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { nome: true, ...funcionario }
console.log(clone) // { nome: 'Maria', salario: 12348.99 }

// usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoB = ['Maria', ...grupoA, 'Rafaela']
const grupoFinal = ['Matheus', ...grupoB]
console.log(grupoFinal) // [ 'Matheus', 'Maria', 'João', 'Pedro', 'Glória', 'Rafaela' ]
