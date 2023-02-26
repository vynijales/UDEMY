// http://files.cod3r.com.br/curso-js/turmaA.json
// usando promises

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// let nomes = []
// getTurma('A').then(alunos => {
// nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then( alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then( alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

// [
//     'A: Kellia',   'A: Hi',     'A: Inge',
//     'A: Myrle',    'A: Doreen', 'A: Pennie',
//     'A: Faye',     'A: Leena',  'A: Taylor',
//     'A: Juieta',   'B: Rossie', 'B: Mary',
//     'B: Dionysus', 'B: Myca',   'B: Sharlene',
//     'B: Meghan',   'B: Perice', 'B: Micheil',
//     'B: Nat',      'B: Bone',   'C: Kellina',
//     'C: Barrie',   'C: Darda',  'C: Rainer',
//     'C: Joan',     'C: Kasper', 'C: Sammie',
//     'C: Scott',    'C: Kiel',   'C: Dell'
//   ]

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) // 0.577 seconds usando promises e 1.408 usando callback hell
    .then(turmas => [].concat(...turmas))
    .then(aluno => aluno.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

    // [
    //     'Kellia',   'Hi',     'Inge',
    //     'Myrle',    'Doreen', 'Pennie',
    //     'Faye',     'Leena',  'Taylor',
    //     'Juieta',   'Rossie', 'Mary',
    //     'Dionysus', 'Myca',   'Sharlene',
    //     'Meghan',   'Perice', 'Micheil',
    //     'Nat',      'Bone',   'Kellina',
    //     'Barrie',   'Darda',  'Rainer',
    //     'Joan',     'Kasper', 'Sammie',
    //     'Scott',    'Kiel',   'Dell'
    //   ]


getTurma('D').catch(e => console.log(e.message)) // Unexpected token < in JSON at position 0

