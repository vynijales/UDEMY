console.log(this === global) // false // this aponta para module.exports
console.log(this === module) // false

console.log(this === module.exports) // true
console.log(this === exports) // true // exports aponta para module.exports também

function logThis() {
    console.log('Dentro de uma função...') // Dentro de uma função...
    console.log(this === exports) // false
    console.log(this === module.exports) //false
    console.log(this === global) // true // this aponta para global
}

logThis()