// pessoa -> endereço de memória 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // não é mais possível mexer no objeto

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa)