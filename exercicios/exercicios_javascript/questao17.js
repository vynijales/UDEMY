/* 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:  
Plano  Aumento 
A  10% 
B  15% 
C  20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

const aumentoSalario = function(plano, salario) {
    switch(plano) {
        case 'A':
            return salario * 1.1
            break
        case 'B':
            return salario * 1.5
            break
        case 'C':
            return salario * 1.2
            break
        default:
            return 'Plano inválido!'
    }
}

console.log(aumentoSalario('A', 1200))
console.log(aumentoSalario('B', 1200))
console.log(aumentoSalario('C', 1200))
console.log(aumentoSalario('D', 1200))