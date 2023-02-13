/* 27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

const Crianca = class{
    constructor(altura, taxaCrescimento){
        this.altura = altura
        this.taxaCrescimento = taxaCrescimento
    }
    
}

const diferencaAltura = function(a, b) {
    let aux = 0

    if (a.altura > b.altura) { // a maior tem que ser o menor 
        aux = a.altura
        a.altura = b.altura
        b.altura = aux
    }
    if (a.altura == b.altura) {
        console.log(`As crianças tem o mesmo tamanho!`)
    } else if (a.taxaCrescimento <= b.taxaCrescimento){
        console.log(`A menor criança nunca será maior do que a outra!`)
        // console.log(`Levará ${} para a menor criança superar a outra`)
    } else {
        let anos = 0
        while (a.altura <  b.altura) {
            a.altura *= 1 + a.taxaCrescimento
            b.altura *= 1 + b.taxaCrescimento
            anos += 1
        }
        console.log(`Levará ${anos} anos para a menor criança superar a outra!`)
    }
} 

const crianca1 = new Crianca (100, 0.20)
const crianca2 = new Crianca (150, 0.10)
const crianca3 = new Crianca (100, 0.10)

diferencaAltura(crianca1, crianca2) // realizado cálculo manual, correto!
diferencaAltura(crianca1, crianca1) // correto!
diferencaAltura(crianca2, crianca3) // correto!
