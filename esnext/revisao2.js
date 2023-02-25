// Arrow Function // sempre são variáveis anônimas, que você pode atribuir à uma variável ou não
const soma = (a, b) => a + b
console.log(soma(2, 3)) // 5

// Arrow Function (this)
const lexico1 = () => console.log(this == exports) // Se fosse uma função tradicional apontaria para global
const lexico2 = lexico1.bind({}) // Se fosse uma função normal o bind linkaria para o objto criado aqui
lexico1() // true
lexico2() // true

// paramtro default
function log(texto = 'Node') {
    console.log(texto)
}

log() // Node
log('Sou mais forte') // Sou mais forte

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5)) // 14