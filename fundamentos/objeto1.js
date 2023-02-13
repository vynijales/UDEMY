const prod1 = {} // forma literal de representar um objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
}

'{ "nome": "Camisa Polo", "preco": 79.90}'

// json não é a mesma coisa que objeto, json é um formato textual para trocar dados entre sistemas.