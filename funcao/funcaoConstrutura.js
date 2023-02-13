function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // atributo publico
    this.acelerar = function () {
        if (velocidadeAtual += velocidadeMaxima <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)