let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // Dupla negação torna verdadeiro

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Os falos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Para finalizar...")
console.log(!!('' || null || 0 || ' ')) // Operador lógico Or

var nome = ""
console.log(nome || 'Desconhecido')

var nome = "Lucas"
console.log(nome || 'Desconhecido')