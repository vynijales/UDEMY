const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// Um objeto tem uma referencia para o seu prototipo
// referenca para outro objeto e o objeto pai tem atributos e comportamentos que podem ser acessados pelo objeto filho
// objeto não tem atributo prototype, apenas funções possuem prototype

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ == Object.prototype)
console.log(volvo.__proto__ == Object.prototype)
console.log(Object.prototype.__proto__) // O pai de mais alto nível

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
