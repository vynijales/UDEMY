/* 20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

const reduzindoCodigo = function(valorAtual, valorNota, listaNotas, indice) {
    while (valorAtual >= valorNota) {
        valorAtual -= valorNota
        listaNotas[indice] += 1
    }
    return valorAtual
}

const caixaEletronico = function(n) {
    let notas = [0, 0, 0, 0, 0, 0]
    let valores = [100, 50, 10, 5, 2, 1]
    resultado = reduzindoCodigo(n, 100, notas, 0)
    console.log(`${notas[0]} notas de R$ ${valores[0]},`)
    for (let i = 1; i < notas.length ;i++){
        resultado = reduzindoCodigo(resultado, valores[i], notas, i)
        console.log(`${notas[i]} notas de R$ ${valores[i]},`)
    }
    console.log('')
}

caixaEletronico(107)
caixaEletronico(199)