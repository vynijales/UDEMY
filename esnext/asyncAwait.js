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

// Recurso do ES8
// Objetivo de simplificar o uso de promises...
let obterAlunos = async () => {
    const tA = await getTurma('A')
    const tB = await getTurma('B')
    const tC = await getTurma('C')
    return [].concat(tA, tB, tC)
} // retorna um objeto AsyncFuncion

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
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