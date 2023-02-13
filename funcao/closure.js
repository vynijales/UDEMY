// Closure é o escolpo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externa à função

// Contexto léxico em ação
const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())