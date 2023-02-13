// par nome/valor

const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupo aninhados de pares nome/valor

const cliente = {
    nome: "Pedro",
    isade: 32,
    peso: 90,
    endereco: {
        lagradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())