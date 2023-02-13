/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A 
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

const anuidade = function(mes, valor) {
    const TAXA = 0.05
    const TEMPO = mes - 1
    return valor * (1 + TAXA)**(TEMPO)
}

for (i = 1; i <= 12 ;i++) {
    console.log(anuidade(i, 1000).toFixed(2))
}