const escola = 'Cod3r'

console.log(escola.charAt(4)) // caractere de indice 4
console.log(escola.charAt(5)) // caractere de indice 5, nenhum
console.log(escola.charCodeAt(3)) // tabela ascii
console.log(escola.indexOf('3')) // qual o índice do "3"

console.log(escola.substring(1)) // string a partir do indice 1
console.log(escola.substring(0, 3)) // 3 caracteres da string, a partir do indice 0

console.log('Escola '.concat(escola).concat("!")) // concatenação, basicamente

console.log(escola.replace(3, 'e')) // replace 3 por 'e'
console.log(escola.replace(/\d/, 'e')) // regex primeiro digitot
console.log(escola.replace(/\w/, 'e')) // regex primeira letra
console.log(escola.replace(/\w/g, 'e')) // regex todos os digitos [g] parametro global

console.log('Ana,Maria,Pedro'.split(',')) // retorna uma lista com elementos quebrados pela ','