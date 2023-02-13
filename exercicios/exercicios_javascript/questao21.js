/* 21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos 
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com 
idade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

const planoDeSaude = function(idade) {
    const TAXA = 100
    if (idade < 0) {
        return 'Idade inválida!'
    } else if (idade < 10) {
        return TAXA + 80
    } else if (idade <= 30) {
        return TAXA + 50
    } else if (idade <= 60) {
        return TAXA + 95
    } else {
        return TAXA + 130
    }
}

console.log(planoDeSaude(0))
console.log(planoDeSaude(10))
console.log(planoDeSaude(15))
console.log(planoDeSaude(35))
console.log(planoDeSaude(61))
console.log(planoDeSaude(-3))