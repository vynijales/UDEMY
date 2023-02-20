url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Desafio => Encontre a mulher chinesa com menor salário

axios.get(url).then(response => {
    const funcionarios = response.data
    mulheresChinesas = funcionarios.filter(funcionario => funcionario.genero == 'F' && funcionario.pais == 'China' )
    console.log(mulheresChinesas.reduce((menorSalario, pessoa) => pessoa.salario < menorSalario.salario ? pessoa : menorSalario, mulheresChinesas[0]))
})
