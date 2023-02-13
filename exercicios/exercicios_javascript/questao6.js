/* 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos.   */

const jurosSimples = function(capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial * (1 + taxaJuros * tempoAplicacao)
}

const jurosComposto = function(capitalInicial, taxaJuros, tempoAplicacao) {
    return capitalInicial = capitalInicial * (1 + taxaJuros)**(tempoAplicacao)

}

console.log(jurosSimples(2000, 0.04, 4).toFixed(2))
console.log(jurosComposto(2000, 0.04, 4).toFixed(2))