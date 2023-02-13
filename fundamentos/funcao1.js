// Funcao sem retorno
function impimirSoma(a, b){
    console.log(a + b)
}

impimirSoma(2, 3)
impimirSoma(2)
impimirSoma(2, 10, 4, 5, 6, 7, 8)
impimirSoma()


// FUncao com retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(3, 4))
console.log(soma(3))
