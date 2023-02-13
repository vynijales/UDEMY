const imprimitResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimitResultado(10)
imprimitResultado(4)
imprimitResultado('Epa!') // problema de js ter a tipagem fraca