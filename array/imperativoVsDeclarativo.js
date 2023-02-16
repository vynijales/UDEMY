const alunos = [
    { nome: 'João', nota: 7.9},
    { nome: 'Maria', nota: 9.2}
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length) // 8.55

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, aluno) => total + aluno
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length) // 8.55

// Em SQL: select codigo, nome, email, from...
// A frase acima é mais volttada ao modo declarativo, pois se importa mais com o que vai ser feito, do que como irá ser feito